import puppeteer from "puppeteer";
import http from "http";
import { createReadStream, existsSync, statSync, writeFileSync, copyFileSync, rmSync } from "fs";
import { dirname, extname, join, normalize, resolve } from "path";
import { fileURLToPath } from "url";

const PORT = 9876;
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "out");
const PUBLIC = join(ROOT, "public");

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".txt": "text/plain; charset=utf-8",
  ".woff2": "font/woff2",
  ".ico": "image/x-icon",
};

function serve(root) {
  const server = http.createServer((req, res) => {
    const url = new URL(req.url ?? "/", `http://127.0.0.1:${PORT}`);
    let pathname = decodeURIComponent(url.pathname);
    if (pathname.endsWith("/")) pathname += "index.html";
    const file = normalize(join(root, pathname));
    if (!file.startsWith(root)) {
      res.writeHead(403);
      res.end();
      return;
    }
    const target =
      existsSync(file) && statSync(file).isDirectory()
        ? join(file, "index.html")
        : file;
    if (!existsSync(target) || !statSync(target).isFile()) {
      res.writeHead(404);
      res.end();
      return;
    }
    res.writeHead(200, {
      "Content-Type": TYPES[extname(target)] ?? "application/octet-stream",
    });
    createReadStream(target).pipe(res);
  });
  return new Promise((ready) => {
    server.listen(PORT, "127.0.0.1", () => ready(server));
  });
}

async function printOne(page, western, dest) {
  const query = western ? "?western=true" : "";
  await page.goto(`http://127.0.0.1:${PORT}/${query}`, {
    waitUntil: "networkidle0",
  });
  const state = await page.evaluate(() => ({
    western: document.documentElement.getAttribute("data-western"),
    familyHidden:
      getComputedStyle(document.querySelector(".family-status")).display ===
      "none",
    phone: document.querySelector("header p:last-of-type")?.textContent ?? "",
  }));
  if (western && state.western !== "true") {
    throw new Error("western page did not set data-western");
  }
  if (!western && state.western) {
    throw new Error("default page set data-western");
  }
  if (state.familyHidden !== western) {
    throw new Error(
      western
        ? "western PDF still shows the family line"
        : "default PDF hid the family line",
    );
  }
  await page.pdf({
    path: dest,
    format: "A4",
    printBackground: false,
    margin: { top: "1cm", right: "1cm", bottom: "1cm", left: "1cm" },
  });
  const size = statSync(dest).size;
  if (size < 100_000) {
    throw new Error(`${dest} is too small (${size} bytes)`);
  }
}

async function main() {
  if (!existsSync(join(OUT, "index.html")) || !existsSync(join(OUT, "_next"))) {
    throw new Error("out/ is not a Next export. Run next build first.");
  }
  writeFileSync(join(OUT, ".nojekyll"), "");
  for (const name of ["cv.pdf", "cv-western.pdf"]) {
    rmSync(join(OUT, name), { force: true });
  }

  const server = await serve(OUT);
  const browser = await puppeteer.launch({ headless: true });
  try {
    const page = await browser.newPage();
    await printOne(page, false, join(OUT, "cv.pdf"));
    await printOne(page, true, join(OUT, "cv-western.pdf"));
    await browser.close();
  } finally {
    server.close();
  }

  copyFileSync(join(OUT, "cv.pdf"), join(PUBLIC, "cv.pdf"));
  copyFileSync(join(OUT, "cv-western.pdf"), join(PUBLIC, "cv-western.pdf"));
  console.log("PDFs written to out/ and public/");
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
});

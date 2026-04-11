#!/usr/bin/env node
// Generates public/cv.pdf by spinning up a local server over the built site
// and printing it headlessly via Puppeteer.
// Run after `gatsby build`: node scripts/generate-pdf.js

const puppeteer = require("puppeteer");
const { spawn } = require("child_process");
const http = require("http");
const path = require("path");

const PORT = 9876;
const OUTPUT = path.resolve(__dirname, "../public/cv.pdf");
const GATSBY_BIN = path.resolve(__dirname, "../node_modules/.bin/gatsby");

function waitForServer(retries = 30, delay = 500) {
  return new Promise((resolve, reject) => {
    const attempt = (n) => {
      http
        .get(`http://localhost:${PORT}`, resolve)
        .on("error", () => {
          if (n <= 0) return reject(new Error("Server did not start in time"));
          setTimeout(() => attempt(n - 1), delay);
        });
    };
    attempt(retries);
  });
}

async function generate() {
  console.log("Starting local server…");
  const server = spawn(GATSBY_BIN, ["serve", "-p", String(PORT)], {
    cwd: path.resolve(__dirname, ".."),
    stdio: "ignore",
  });

  try {
    await waitForServer();
    console.log("Server ready. Generating PDFs…");

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(`http://localhost:${PORT}`, { waitUntil: "networkidle0" });
    await page.click(".phone-number-button");
    await page.pdf({
      path: OUTPUT,
      format: "A4",
      printBackground: false,
      margin: { top: "1cm", right: "1cm", bottom: "1cm", left: "1cm" },
    });
    console.log("CV PDF written to", OUTPUT);

    await page.goto(`http://localhost:${PORT}?western=true`, { waitUntil: "networkidle0" });
    await page.click(".phone-number-button");
    await page.pdf({
      path: OUTPUT.replace("cv.pdf", "cv-western.pdf"),
      format: "A4",
      printBackground: false,
      margin: { top: "1cm", right: "1cm", bottom: "1cm", left: "1cm" },
    });
    console.log("Western CV PDF written to", OUTPUT.replace("cv.pdf", "cv-western.pdf"));

    await browser.close();
  } finally {
    server.kill();
  }
}

generate().catch((err) => {
  console.error("PDF generation failed:", err.message);
  process.exit(1);
});

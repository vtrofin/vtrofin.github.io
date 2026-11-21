"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Scheme = "light" | "dark";

const ICONS: Record<Scheme, React.ReactNode> = {
  light: <SunIcon className="size-4" />,
  dark: <MoonIcon className="size-4" />,
};

const LABELS: Record<Scheme, string> = {
  light: "Day",
  dark: "Night",
};

function applyScheme(scheme: Scheme) {
  document.documentElement.classList.toggle("dark", scheme === "dark");
  localStorage.setItem("theme", scheme);
}

export function ThemeToggle() {
  const [scheme, setScheme] = useState<Scheme>("light");
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setScheme(
      document.documentElement.classList.contains("dark") ? "dark" : "light",
    );
  }, []);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function choose(next: Scheme) {
    applyScheme(next);
    setScheme(next);
    setOpen(false);
  }

  return (
    <div ref={rootRef} className="relative print:hidden">
      <button
        type="button"
        aria-label="Switch color scheme"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex size-8 items-center justify-center rounded-md text-neutral-600 hover:bg-neutral-100 hover:text-black dark:text-neutral-300 dark:hover:bg-zinc-800 dark:hover:text-white"
      >
        {ICONS[scheme]}
      </button>
      {open && (
        <div
          role="menu"
          className="absolute right-0 z-50 mt-1 min-w-32 rounded-md border border-neutral-200 bg-white p-1 text-sm text-neutral-900 shadow-md dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
        >
          {(["light", "dark"] as const).map((value) => (
            <button
              key={value}
              type="button"
              role="menuitemradio"
              aria-checked={scheme === value}
              onClick={() => choose(value)}
              className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-left hover:bg-neutral-100 aria-checked:bg-neutral-100 dark:hover:bg-zinc-800 dark:aria-checked:bg-zinc-800"
            >
              {ICONS[value]}
              {LABELS[value]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

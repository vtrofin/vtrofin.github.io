"use client";

import { Lightbulb } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [night, setNight] = useState(false);

  useEffect(() => {
    setNight(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setNight(next);
  }

  return (
    <button
      type="button"
      aria-label={night ? "Switch to light view" : "Switch to night view"}
      onClick={toggle}
      className="print:hidden rounded p-1 text-neutral-600 hover:text-black dark:text-neutral-300 dark:hover:text-white"
    >
      <Lightbulb className={night ? "size-5 fill-current" : "size-5"} />
    </button>
  );
}

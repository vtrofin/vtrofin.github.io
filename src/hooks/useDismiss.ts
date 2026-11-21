"use client";

import { useEffect, useRef } from "react";

export function useDismiss<T extends HTMLElement>(
  active: boolean,
  onDismiss: () => void,
) {
  const ref = useRef<T>(null);
  const onDismissRef = useRef(onDismiss);
  onDismissRef.current = onDismiss;

  useEffect(() => {
    if (!active) return;
    function onPointerDown(event: PointerEvent) {
      if (!(event.target instanceof Node)) return;
      if (!ref.current?.contains(event.target)) onDismissRef.current();
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onDismissRef.current();
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return ref;
}

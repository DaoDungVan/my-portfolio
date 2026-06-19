import { useState, useEffect, useCallback } from "react";
import { flushSync } from "react-dom";

const STORAGE_KEY = "theme";

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  // Follow the OS/browser setting live, but only while the user hasn't picked manually.
  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e) => setTheme(e.matches ? "dark" : "light");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggle = useCallback(
    (e) => {
      const next = theme === "dark" ? "light" : "dark";
      localStorage.setItem(STORAGE_KEY, next);
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // Fallback: no View Transitions API or reduced motion -> instant flip
      if (!document.startViewTransition || reduce) {
        setTheme(next);
        return;
      }

      const x = e.clientX;
      const y = e.clientY;
      const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

      const vt = document.startViewTransition(() => flushSync(() => setTheme(next)));
      vt.ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${r}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 520,
            easing: "cubic-bezier(.4,0,.2,1)",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      });
    },
    [theme]
  );

  return [theme, toggle];
}

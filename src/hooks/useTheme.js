import { useState, useEffect, useCallback } from "react";
import { flushSync } from "react-dom";

export function useTheme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggle = useCallback(
    (e) => {
      const next = theme === "dark" ? "light" : "dark";
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

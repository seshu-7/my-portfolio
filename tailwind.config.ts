import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)", "paper-2": "var(--paper-2)",
        ink: "var(--ink)", "ink-2": "var(--ink-2)", "ink-3": "var(--ink-3)",
        amber: "var(--amber)", "amber-dim": "var(--amber-dim)",
        line: "var(--line)", "line-2": "var(--line-2)",
      },
      fontFamily: {
        display: "var(--font-display)",
        body: "var(--font-body)",
        mono: "var(--font-mono)",
      },
      maxWidth: { content: "var(--maxw)" },
      transitionTimingFunction: { brand: "cubic-bezier(.22,.61,.36,1)" },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        inferno: "var(--color-inferno)",
        ember: "var(--color-ember)",
        warning: "var(--color-warning)",
        ash: "var(--color-ash)",
        crack: "var(--color-crack)"
      },
      maxWidth: {
        content: "72rem"
      },
      spacing: {
        section: "clamp(4rem, 8vw, 7rem)"
      }
    }
  },
  plugins: []
};

export default config;

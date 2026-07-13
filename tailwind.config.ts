import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // SoftPak brand palette — sampled directly from the Figma SVG
        brand: {
          orange: "#F05A24",        // primary CTA / accent
          orangeAlt: "#F05D28",     // secondary orange
          dark: "#191A23",          // buttons, headings, dark sections
          darker: "#0F0F0F",
          peach: "#FFEEE7",         // "Who we serve" bg
          peachLight: "#FFF3EF",
          cardGray: "#F2F2F2",      // service cards
          cardGrayAlt: "#F9F9F9",
          bodyText: "#67646A",
          bodyTextAlt: "#6B6B6B",
          muted: "#DADADA",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        canvas: "1440px",
        content: "1296px",
      },
      fontSize: {
        // Approximate scale from the SVG
        "hero": ["64px", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "h2": ["48px", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "h3": ["24px", { lineHeight: "1.3" }],
        "stat": ["72px", { lineHeight: "1", letterSpacing: "-0.02em" }],
      },
    },
  },
  plugins: [],
};

export default config;

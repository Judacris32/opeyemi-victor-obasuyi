import type { Config } from "tailwindcss";

/**
 * Palette: "teal and orange", the classic cinema colour grade.
 * Contrast-checked pairs:
 *  - ink text on sun (6.4:1), ink on gold (11:1)
 *  - white on teal (6.3:1), peach on teal (5.3:1)
 *  - ember on paper (4.6:1) for small accent text on light backgrounds
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  // Accent styles are chosen at runtime in SplitHeading, so keep them in the build.
  safelist: ["accent-marker", "accent-gradient", "accent-gold", "accent-sun"],
  theme: {
    extend: {
      colors: {
        ink: "#13161F",
        night: "#0C0E14",
        paper: "#FBF8F2",
        sun: { DEFAULT: "#FF6B3D", soft: "#FF8A63" },
        ember: "#C9431A",
        gold: "#FFC145",
        teal: { DEFAULT: "#0E6B68", deep: "#0A4D4B" },
        aqua: "#DDF1EE",
        peach: "#FFE7D9",
        muted: "#5A5F6B",
        mist: "#B9C0CC",
        line: "#E7E0D3",
      },
      fontFamily: {
        display: ['"Big Shoulders Display"', "Impact", "sans-serif"],
        serif: ['"Instrument Serif"', "Georgia", "serif"],
        sans: ['"DM Sans Variable"', "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-hero": ["clamp(3.5rem, 9.5vw, 9.5rem)", { lineHeight: "0.86", letterSpacing: "0.005em" }],
        "display-1": ["clamp(2.75rem, 6vw, 5.75rem)", { lineHeight: "0.9" }],
        "display-2": ["clamp(2.25rem, 4.2vw, 4rem)", { lineHeight: "0.95" }],
        "display-3": ["clamp(1.6rem, 2.4vw, 2.25rem)", { lineHeight: "1" }],
        statement: ["clamp(1.75rem, 3.4vw, 3rem)", { lineHeight: "1.22" }],
        lede: ["clamp(1.35rem, 2vw, 1.75rem)", { lineHeight: "1.4" }],
      },
      maxWidth: { site: "1280px" },
      borderRadius: { card: "20px", banner: "36px" },
      boxShadow: {
        card: "0 1px 2px rgba(19,22,31,.04), 0 10px 30px rgba(19,22,31,.06)",
        lift: "0 28px 60px rgba(19,22,31,.16)",
        glow: "0 18px 40px rgba(255,107,61,.35)",
      },
    },
  },
  plugins: [],
};

export default config;

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
        ink: "#080808",
        wire: "#e23d2f",
        paper: "#fbfbf8",
        muted: "#6f6f68"
      },
      boxShadow: {
        lift: "0 18px 45px rgba(8, 8, 8, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;

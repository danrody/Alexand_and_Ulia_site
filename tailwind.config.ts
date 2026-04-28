import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f7efe3",
        linen: "#ede4d6",
        sage: "#858d75",
        moss: "#4d6545",
        bark: "#3b2f26",
        clay: "#b9a38d",
        blush: "#dcc5bc"
      },
      boxShadow: {
        soft: "0 22px 60px rgba(59, 47, 38, 0.16)",
        photo: "0 16px 30px rgba(59, 47, 38, 0.2)"
      }
    }
  },
  plugins: []
};

export default config;

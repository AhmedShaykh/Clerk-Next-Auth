import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {}
  },
  plugins: [
    require("tailwindcss-signals")
  ]
};

export default config;
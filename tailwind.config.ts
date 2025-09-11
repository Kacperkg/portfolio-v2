import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/_components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        humane: ["Humane", "sans-serif"],
      },
      keyframes: {
        scrollLeft: {
          to: { left: "-200px" },
        },
      },
      animation: {
        scroll: "scrollLeft 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;

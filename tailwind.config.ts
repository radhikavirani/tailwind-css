import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#00C462',
        'color': '#818181',
        'secondary': '#F1F0ED',
        'box': '#f8f7f5'
      },
    },
  },
  plugins: [],
};
export default config;

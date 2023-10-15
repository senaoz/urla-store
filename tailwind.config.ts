import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

// Suppress deprecation warnings during build
// @ts-ignore
delete colors.lightBlue;
// @ts-ignore
delete colors.warmGray;
// @ts-ignore
delete colors.trueGray;
// @ts-ignore
delete colors.coolGray;
// @ts-ignore
delete colors.blueGray;

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ...colors,
      primary: `#141E13`,
      secondary: `#F1EE8C`,
      neutral: colors.zinc,
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
export default config;

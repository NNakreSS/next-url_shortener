import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        cover: "0 0 4px 0 rgba(0, 67, 70, 0.5)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        Blue: "#172A3A",
        green: "#09BC8A",
        white: "#FFFFFF",
        "dark-green": "#004346",
        gray: "#303030",
        "off-wite": "#E3E3E3",
        background: "#F4F4F4",
        "light-aqua": "#75DDDD",
        Pink: "#FF6363",
      },
    },
  },
  plugins: [],
};
export default config;

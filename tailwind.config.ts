import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },


          screens: {
      "-1024": { max: "1024px" },
      "-900": { max: "900px" },
      "-650": { max: "650px" },
    },
    },

    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },




  },

  plugins: [],
};
export default config;

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
    },

<<<<<<< HEAD
    fontFamily: {
      roboto: "Roboto",
    },
=======
    fontFamily:{
      roboto: ['Roboto', 'sans-serif'],
    }
>>>>>>> 1af64989a4b4324a28c51fb6d061f5561b14ca7a
  },
  plugins: [],
};
export default config;

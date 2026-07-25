import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#f8f4ec",
        ink: "#1f1f1f",
        ember: "#c94922",
        pine: "#1f4f46"
      }
    }
  },
  plugins: []
};

export default config;

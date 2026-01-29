import type { Config } from "tailwindcss";

const config: Config = {
  // [여기 추가!] 이게 있어야 다크모드가 작동합니다.
  darkMode: 'class', 
  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
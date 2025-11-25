import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // 這裡告訴 Tailwind 去哪裡找我們的 class，漏了這裡就會破圖
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        // 設定字體變數對應
        sans: ["var(--font-noto)", "sans-serif"],
        jakarta: ["var(--font-jakarta)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
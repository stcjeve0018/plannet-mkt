import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. 開啟靜態輸出模式 (關鍵！)
  output: "export",
  
  // 2. 關閉圖片優化 (因為靜態網站沒有伺服器幫你壓縮圖片)
  // 如果不加這行，使用 <Image> 元件時會報錯
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
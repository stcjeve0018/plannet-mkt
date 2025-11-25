import "./globals.css";
import { Noto_Sans_TC, Plus_Jakarta_Sans } from "next/font/google";

// 設定中文字體
const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto",
});

// 設定英文字體
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata = {
  title: "小星球行銷 Plannet MKT | 陪你探索商業的溫柔夥伴",
  description: "結合技術與感性的數位行銷顧問",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW" className={`${notoSansTC.variable} ${jakarta.variable}`}>
      <body className="antialiased bg-white text-[#1E1E1E]">
        {children}
      </body>
    </html>
  );
}
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, LineChart, MessageCircleHeart, MousePointerClick } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// --- 品牌色系定義 (Tailwind Arbitrary Values) ---
// 主色: #4A77FF
// 輔色: #6CA6FF
// 強調: #FFB03A
// 背景: #F2F6FF
// 卡片陰影: shadow-[0_10px_24px_rgba(0,0,0,0.08)]

// --- 1. 導覽列組件 ---
const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
    <div className="container mx-auto px-6 h-20 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-[#4A77FF] flex items-center justify-center">
            <span className="text-white text-lg">🪐</span>
        </div>
        <span className="font-bold text-xl tracking-wide font-jakarta text-[#1E1E1E]">Plannet MKT</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 text-[#4A4A4A] font-medium text-sm">
        <Link href="#" className="hover:text-[#4A77FF] transition-colors">關於我們</Link>
        <Link href="#" className="hover:text-[#4A77FF] transition-colors">服務項目</Link>
        <Link href="#" className="hover:text-[#4A77FF] transition-colors">合作案例</Link>
        <Link href="#" className="hover:text-[#4A77FF] transition-colors">觀點文章</Link>
      </div>

      {/* CTA Button */}
      <button className="hidden md:flex px-6 py-2.5 bg-[#4A77FF] text-white rounded-full text-sm font-bold shadow-lg shadow-[#4A77FF]/20 hover:bg-[#3b66e3] hover:shadow-xl transition-all active:scale-95">
        聯絡我們
      </button>
      
      {/* Mobile Menu Icon (Placeholder) */}
      <div className="md:hidden text-[#1E1E1E]">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
      </div>
    </div>
  </nav>
);

// --- 2. Hero 區塊 ---
const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#F2F6FF] to-white">
      {/* 裝飾背景球 (柔和光暈) */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#6CA6FF]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FFB03A]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* 左側：文案 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#E5E9F2] shadow-sm mb-6">
                <span className="text-[#4A77FF] text-sm font-bold font-jakarta tracking-wide">Thinking with you, Building for you.</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1E1E1E] leading-tight mb-6">
              讓技術與數據，<br />
              成為品牌<span className="text-[#4A77FF] relative inline-block">
                最溫柔的後盾
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#FFB03A]/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="text-[#4A4A4A] text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              我們不只做網站，更陪你理清商業脈絡。用邏輯梳理複雜需求，用技術將你的想像落地成真。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-3.5 bg-[#4A77FF] text-white rounded-full font-bold shadow-[0_10px_24px_rgba(74,119,255,0.25)] hover:translate-y-[-2px] hover:shadow-xl transition-all flex items-center justify-center gap-2 group">
                開始專案諮詢
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-3.5 bg-white text-[#4A4A4A] border border-[#E5E9F2] rounded-full font-bold hover:bg-[#F9FAFF] hover:border-[#4A77FF] transition-all">
                了解服務流程
              </button>
            </div>
          </motion.div>

          {/* 右側：意象圖 (使用簡單的 CSS 形狀模擬小星球氛圍) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                {/* 模擬插畫區塊 */}
                <div className="absolute inset-4 bg-white rounded-[40px] shadow-[0_20px_40px_rgba(0,0,0,0.06)] flex items-center justify-center overflow-hidden border border-white/50">
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#F2F6FF] rounded-full opacity-50"></div>
                   <div className="relative z-10 text-center">
                      <div className="w-20 h-20 bg-[#4A77FF] rounded-2xl mx-auto mb-4 rotate-12 shadow-lg shadow-[#4A77FF]/30 flex items-center justify-center text-white">
                         <Code size={32} />
                      </div>
                      <div className="w-20 h-20 bg-[#FFB03A] rounded-full mx-auto -mt-8 -ml-16 shadow-lg shadow-[#FFB03A]/30 flex items-center justify-center text-white relative z-20">
                         <LineChart size={32} />
                      </div>
                      <div className="w-48 h-12 bg-white rounded-lg shadow-sm border border-slate-100 mt-6 flex items-center gap-3 px-4 mx-auto">
                         <div className="w-2 h-2 rounded-full bg-[#6CA6FF]"></div>
                         <div className="h-2 w-24 bg-slate-100 rounded-full"></div>
                      </div>
                   </div>
                </div>
                
                {/* 浮動卡片裝飾 */}
                <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-[0_10px_24px_rgba(0,0,0,0.08)] flex items-center gap-3 border border-slate-50"
                >
                    <div className="p-2 bg-[#E1EAFD] rounded-full text-[#4A77FF]">
                        <MessageCircleHeart size={20} />
                    </div>
                    <div>
                        <p className="text-xs text-[#888]">口碑輿情</p>
                        <p className="text-sm font-bold text-[#1E1E1E]">正面聲量 +45%</p>
                    </div>
                </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// --- 3. 服務項目區塊 ---
const Services = () => {
    const services = [
        {
            icon: <Code size={24} />,
            title: "客製化網站開發",
            desc: "不套公版，為你的品牌量身打造。注重使用者體驗與後台易用性，讓網站好看更好用。",
            color: "bg-[#E1EAFD] text-[#4A77FF]"
        },
        {
            icon: <MousePointerClick size={24} />,
            title: "精準廣告投放",
            desc: "不只看點擊，更看轉化。透過 GA4 數據分析，把每一分預算都花在對的受眾身上。",
            color: "bg-[#FFF4E3] text-[#FFB03A]"
        },
        {
            icon: <MessageCircleHeart size={24} />,
            title: "口碑輿情行銷",
            desc: "像朋友般在社群中建立對話。引導正向討論，為品牌建立真實且溫暖的信任感。",
            color: "bg-[#E0F2FE] text-[#0EA5E9]" // Cyan family
        }
    ];

    return (
        <section className="py-20 lg:py-32 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#1E1E1E] mb-4">我們能為你做什麼？</h2>
                    <p className="text-[#4A4A4A]">從技術開發到市場溝通，我們提供一站式的數位解決方案，讓你專注於產品核心。</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="group p-8 rounded-[24px] bg-white border border-[#F2F4F8] hover:border-[#4A77FF]/30 shadow-[0_10px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(74,119,255,0.1)] transition-all duration-300">
                            <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#1E1E1E] mb-3">{service.title}</h3>
                            <p className="text-[#4A4A4A] leading-relaxed text-sm lg:text-base">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- 4. 理念區塊 (Why Us) ---
const Philosophy = () => (
    <section className="py-20 bg-[#F2F6FF] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto bg-white rounded-[32px] p-8 lg:p-16 shadow-[0_20px_60px_rgba(74,119,255,0.08)] text-center">
                <span className="text-[#4A77FF] font-bold tracking-wider text-sm uppercase mb-4 block">Our Philosophy</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1E1E1E] mb-8 leading-snug">
                    像陪著老闆一起想事情，<br />
                    而不只是一個接單的廠商。
                </h2>
                <div className="space-y-6 text-[#4A4A4A] text-lg leading-relaxed">
                    <p>
                        市面上的行銷公司很多，但願意花時間「聽懂」你生意邏輯的很少。
                    </p>
                    <p>
                        在小星球，我們相信技術是冰冷的，但使用技術的人是溫暖的。
                        我們不推銷你不需要的功能，不賣弄你聽不懂的術語。
                        我們更像是一個懂技術的商業顧問，陪你把模糊的想法，變成清晰可執行的數位資產。
                    </p>
                </div>
                <div className="mt-10 pt-10 border-t border-slate-100 flex flex-col sm:flex-row gap-8 justify-center items-center">
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold text-[#4A77FF]">50+</span>
                        <span className="text-sm text-[#888] mt-1">品牌合作案例</span>
                    </div>
                    <div className="h-px w-20 sm:w-px sm:h-12 bg-slate-200"></div>
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold text-[#FFB03A]">98%</span>
                        <span className="text-sm text-[#888] mt-1">客戶回購率</span>
                    </div>
                    <div className="h-px w-20 sm:w-px sm:h-12 bg-slate-200"></div>
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold text-[#6CA6FF]">100%</span>
                        <span className="text-sm text-[#888] mt-1">客製化開發</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// --- 5. 聯絡 CTA ---
const ContactCTA = () => (
    <section className="py-20 lg:py-32 bg-white text-center">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1E1E1E] mb-6">
                準備好讓品牌登陸小星球了嗎？
            </h2>
            <p className="text-[#4A4A4A] mb-10 max-w-xl mx-auto">
                不管你有具體的規格，還是一個模糊的想法，我們都準備好聆聽了。
                喝杯咖啡，聊聊你的下一步。
            </p>
            <button className="px-10 py-4 bg-[#4A77FF] text-white rounded-full text-lg font-bold shadow-[0_10px_24px_rgba(74,119,255,0.3)] hover:scale-105 hover:shadow-[0_20px_40px_rgba(74,119,255,0.4)] transition-all duration-300">
                預約免費諮詢
            </button>
        </div>
    </section>
);

// --- Footer ---
const Footer = () => (
    <footer className="bg-[#FAFAFA] pt-16 pb-8 border-t border-slate-100">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-6 h-6 rounded-full bg-[#4A77FF] flex items-center justify-center">
                            <span className="text-white text-xs">🪐</span>
                        </div>
                        <span className="font-bold text-lg text-[#1E1E1E]">Plannet MKT</span>
                    </div>
                    <p className="text-sm text-[#888] max-w-xs">
                        陪你探索商業宇宙的溫柔導航員。<br />
                        用心開發，用數據說話。
                    </p>
                </div>
                <div className="flex gap-12 text-sm text-[#4A4A4A]">
                    <div className="flex flex-col gap-3">
                        <span className="font-bold text-[#1E1E1E] mb-1">Company</span>
                        <Link href="#" className="hover:text-[#4A77FF]">關於我們</Link>
                        <Link href="#" className="hover:text-[#4A77FF]">加入團隊</Link>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="font-bold text-[#1E1E1E] mb-1">Services</span>
                        <Link href="#" className="hover:text-[#4A77FF]">網站開發</Link>
                        <Link href="#" className="hover:text-[#4A77FF]">廣告投放</Link>
                        <Link href="#" className="hover:text-[#4A77FF]">口碑行銷</Link>
                    </div>
                </div>
            </div>
            <div className="text-center pt-8 border-t border-slate-200 text-xs text-[#888]">
                &copy; {new Date().getFullYear()} Plannet Marketing. All rights reserved.
            </div>
        </div>
    </footer>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-[#4A77FF] selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Philosophy />
      <ContactCTA />
      <Footer />
    </main>
  );
}
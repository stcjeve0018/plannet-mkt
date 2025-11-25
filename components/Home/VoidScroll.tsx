"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SECTIONS = [
  {
    title: "Insight",
    subtitle: "洞察數據背後的真相",
    color: "from-blue-600 to-purple-600",
    rotate: -5
  },
  {
    title: "Impact",
    subtitle: "創造撼動人心的衝擊",
    color: "from-cyan-500 to-blue-500",
    rotate: 5
  },
  {
    title: "Influence",
    subtitle: "擴散無遠弗屆的影響",
    color: "from-emerald-400 to-cyan-500",
    rotate: -3
  },
];

export default function VoidScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 1. 監聽滾動：把 Offset 調整得更精確
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    // 外部容器：400vh 高度作為滾動軌道
    <div ref={containerRef} className="relative h-[400vh]">
      
      {/* Sticky 視口 
         1. top-0: 吸在頂部
         2. h-screen: 佔滿全螢幕
         3. bg-black: 確保背景是不透明的，這樣捲上來時會蓋住上一頁
         4. overflow-hidden: 確保卡片飛出螢幕時不會產生卷軸
      */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-[#020617]">
        
        {/* 背景動態裝飾 */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-[#020617] to-[#020617]" />
        
        {/* 文字與卡片動畫 */}
        {SECTIONS.map((item, index) => {
          const start = index * 0.25;
          const end = start + 0.5;

          // 優化動畫曲線，讓飛入更有衝擊感
          const scale = useTransform(scrollYProgress, [start, end], [0.5, 3]); 
          const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.2, end], [0, 1, 1, 0]);
          const zIndex = useTransform(scrollYProgress, (pos) => (pos >= start && pos <= end ? 10 : 0));

          return (
            <motion.div
              key={index}
              style={{ scale, opacity, zIndex }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              {/* 卡片本體 */}
              <div 
                className={`
                    relative w-[70vw] h-[40vh] md:w-[50vw] md:h-[60vh] 
                    rounded-[3rem] p-1 bg-gradient-to-br ${item.color} 
                    shadow-[0_0_100px_rgba(56,189,248,0.2)]
                `}
                style={{ transform: `rotate(${item.rotate}deg)` }}
              >
                <div className="w-full h-full bg-[#050a1f] rounded-[calc(3rem-4px)] flex flex-col items-center justify-center text-center p-8 border border-white/10 backdrop-blur-3xl">
                    <h2 className={`text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br ${item.color} mb-6 drop-shadow-2xl`}>
                        {item.title}
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-300 font-light tracking-[0.2em] uppercase">
                        {item.subtitle}
                    </p>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* 結尾定格按鈕 */}
        <motion.div
            style={{ 
                opacity: useTransform(scrollYProgress, [0.8, 0.9], [0, 1]),
                scale: useTransform(scrollYProgress, [0.8, 0.9], [0.8, 1]),
                y: useTransform(scrollYProgress, [0.8, 0.9], [50, 0])
            }}
            className="relative z-50 text-center"
        >
             <h3 className="text-white text-4xl font-bold mb-8 tracking-tight">準備好啟航了嗎？</h3>
             <button className="group relative px-10 py-5 bg-white text-black font-bold rounded-full text-xl hover:scale-105 transition-all duration-300">
                <span className="relative z-10">Start Project</span>
                <div className="absolute inset-0 rounded-full blur-lg bg-cyan-400 opacity-0 group-hover:opacity-50 transition-opacity" />
             </button>
        </motion.div>

      </div>
    </div>
  );
}
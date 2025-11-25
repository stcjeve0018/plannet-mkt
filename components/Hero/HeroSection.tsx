"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import FancyButton from "@/components/UI/FancyButton";

export default function HeroSection() {
  // --- 1. 滑鼠聚光燈邏輯 ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section 
      className="relative h-screen w-full flex flex-col items-center justify-center bg-[#020617] overflow-hidden group"
      onMouseMove={handleMouseMove}
    >
      {/* --- A. 背景層：聚光燈與網格 --- */}
      
      {/* 雜訊紋理 */}
      <div className="bg-noise" />

      {/* 聚光燈效果 (Spotlight) - 滑鼠移動時會照亮背景 */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* 科技網格 (Grid) - 被照亮時才明顯 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />


      {/* --- B. 視覺主體層 --- */}
      <div className="relative z-10 text-center px-4 w-full max-w-[90vw]">
        
        {/* 頂部發光標籤 */}
        <motion.div 
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 rounded-full mb-8 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-cyan-300 text-xs font-mono tracking-widest uppercase">System Online</span>
        </motion.div>

        {/* 暴力大標題 */}
        <motion.h1 
          className="text-[12vw] leading-[0.9] font-black text-white text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/10 tracking-tighter select-none"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          DIGITAL
          <br />
          <span className="relative inline-block">
            IMPACT
            {/* 裝飾線條 */}
            <motion.span 
                initial={{ width: 0 }} 
                animate={{ width: "100%" }} 
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-2 left-0 h-[6px] bg-cyan-500" 
            />
          </span>
        </motion.h1>

        {/* 副標題 */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-slate-400 text-lg md:text-2xl font-light tracking-wide max-w-2xl mx-auto"
        >
          我們不只是寫程式，我們製造<span className="text-cyan-400 font-bold text-glow">視覺衝擊</span>。
        </motion.p>

        {/* CTA 區域 */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-12 flex flex-col sm:flex-row justify-center gap-6"
        >
            <FancyButton text="啟動專案 // START" className="text-lg px-10 py-4" />
        </motion.div>

      </div>

      {/* --- C. 底部裝飾 --- */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#020617] to-transparent z-20 pointer-events-none" />
    </section>
  );
}
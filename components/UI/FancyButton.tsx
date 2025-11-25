"use client";

import { motion } from "framer-motion";

interface FancyButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

export default function FancyButton({ text, onClick, className = "" }: FancyButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        px-8 py-3 rounded-full font-bold text-white shadow-lg shadow-cyan-500/20
        bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400
        transition-all duration-300 border border-white/10 ${className}
      `}
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
}
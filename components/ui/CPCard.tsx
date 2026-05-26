"use client";

import { motion } from "framer-motion";
import { Trophy, Zap, TrendingUp, BarChart3 } from "lucide-react";

interface CPCardProps {
  solved: number;
  rating: number;
  streak: number;
  data: number[];
}

export const CPCard = ({ solved, rating, streak, data }: CPCardProps) => {
  const maxValue = Math.max(...data);
  const points = data.map((val, i) => `${(i / (data.length - 1)) * 100},${100 - (val / maxValue) * 100}`).join(" ");

  return (
    <div className="glass p-8 rounded-3xl flex flex-col gap-8 group bg-gradient-to-br from-accent/5 to-transparent border-accent/10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Trophy size={22} className="text-accent" />
          <h3 className="text-xl font-heading font-bold tracking-tight">Competitive CP</h3>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/20 border border-accent/20 text-accent font-mono text-[9px] animate-pulse">
          <Zap size={10} fill="currentColor" />
          {streak} DAY STREAK
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-1">
          <p className="text-[10px] text-mono text-accent/40 uppercase tracking-widest leading-none">TOTAL_SOLVED</p>
          <p className="text-3xl font-heading font-bold text-foreground">{solved}+</p>
        </div>
        <div className="space-y-1">
          <p className="text-[10px] text-mono text-accent/40 uppercase tracking-widest leading-none">PEAK_RATING</p>
          <div className="flex items-baseline gap-2">
            <p className="text-3xl font-heading font-bold text-accent">{rating}</p>
            <TrendingUp size={14} className="text-accent/60" />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center text-[10px] text-mono text-foreground/30 uppercase tracking-widest">
           <span>RATING_HISTORY</span>
           <span className="text-accent/20">v2.1</span>
        </div>
        <div className="h-24 w-full relative">
          <svg viewBox="0 0 100 100" className="w-full h-full preserve-3d overflow-visible" preserveAspectRatio="none">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.polyline
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
              points={points}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.polyline
              fill="url(#gradient)"
              points={`0,100 ${points} 100,100`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

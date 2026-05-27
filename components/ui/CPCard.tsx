"use client";

import { Code2 } from "lucide-react";

export const CPCard = () => {
  return (
    <div className="glass p-8 rounded-3xl flex flex-col gap-6 bg-gradient-to-br from-accent/5 to-transparent border-accent/10 relative overflow-hidden group min-h-[300px] justify-between">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-accent/10 text-accent group-hover:scale-110 transition-transform duration-500">
            <Code2 size={22} />
          </div>
          <h3 className="text-xl font-heading font-bold tracking-tight">DSA &amp; Problem Solving</h3>
        </div>

        <div className="space-y-4 relative z-10">
          <p className="text-body text-foreground/75 font-sans leading-relaxed text-sm">
            Actively practicing DSA and problem solving. Focus is directed toward mastering core algorithms, data structures, and complexity analysis.
          </p>
        </div>
      </div>

      <div className="pt-4 border-t border-white/5 opacity-40 font-mono text-[9px] tracking-widest uppercase flex justify-between">
        <span>STATUS // ENG_PRACTICE</span>
        <span>GATE // 2028</span>
      </div>

      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 p-4 opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] transition-opacity">
        <Code2 size={120} />
      </div>
    </div>
  );
};

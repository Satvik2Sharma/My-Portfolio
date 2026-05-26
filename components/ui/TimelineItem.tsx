"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Circle, CheckCircle2, Zap, Rocket } from "lucide-react";

export type TimelineStatus = "past" | "current" | "future";

interface TimelineItemProps {
  title: string;
  description: string;
  date: string;
  status: TimelineStatus;
  nextAction?: string;
  isLast?: boolean;
}

export const TimelineItem = ({
  title,
  description,
  date,
  status,
  nextAction,
  isLast = false,
}: TimelineItemProps) => {
  return (
    <div className="relative group">
      {/* Connector Line */}
      {!isLast && (
        <div 
          className={cn(
            "absolute left-[11px] top-[30px] bottom-[-40px] w-[2px] z-0",
            status === "past" ? "bg-accent/40" : 
            status === "current" ? "bg-gradient-to-b from-accent to-accent/10 dashed border-l-2 border-dashed border-accent/20" : 
            "border-l-2 border-dashed border-white/10"
          )}
        />
      )}

      <div className="flex gap-8 relative z-10">
        {/* Node Icon */}
        <div className="relative h-6 w-6 shrink-0 mt-1">
          {status === "current" && (
            <div className="absolute inset-0 rounded-full bg-accent animate-radar" />
          )}
          
          <div className={cn(
            "absolute inset-0 rounded-full flex items-center justify-center border-2 transition-all duration-500",
            status === "past" ? "bg-accent border-accent text-zinc-950" :
            status === "current" ? "bg-bg border-accent text-accent shadow-[0_0_15px_var(--accent)]" :
            "bg-bg border-white/20 text-white/20 border-dashed"
          )}>
            {status === "past" ? <CheckCircle2 size={12} /> : 
             status === "current" ? <Zap size={12} fill="currentColor" /> : 
             <Circle size={10} />}
          </div>
        </div>

        {/* Content Card */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className={cn(
            "flex-grow pb-12 transition-all duration-500",
            status === "future" && "opacity-60"
          )}
        >
          <div className="glass p-6 rounded-2xl border-white/5 hover:border-accent/20 transition-colors group/card">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
              <span className={cn(
                "text-mono text-[10px] tracking-widest uppercase",
                status === "current" ? "text-accent" : "text-foreground/40"
              )}>
                {date} // {status.toUpperCase()}
              </span>
              {status === "future" && nextAction && (
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] text-mono text-accent animate-pulse">
                  <Rocket size={10} />
                  NEXT_ACTION: {nextAction}
                </div>
              )}
            </div>

            <h3 className={cn(
              "text-xl font-heading font-bold mb-2 transition-colors",
              status === "current" ? "text-white" : "text-white/80"
            )}>
              {title}
            </h3>
            
            <p className="text-body text-sm text-foreground/60 leading-relaxed">
              {description}
            </p>

            {/* Subtle glow for current item */}
            {status === "current" && (
              <div className="absolute inset-0 bg-accent/5 rounded-2xl -z-10 blur-xl opacity-0 group-hover/card:opacity-100 transition-opacity" />
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

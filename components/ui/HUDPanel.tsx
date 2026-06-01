"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface HUDPanelProps {
  className?: string;
}

export const HUDPanel = ({ className }: HUDPanelProps) => {
  const [mounted, setMounted] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the motion
  const springX = useSpring(x, { stiffness: 100, damping: 30 });
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(springY, [-300, 300], [10, -10]);
  const rotateY = useTransform(springX, [-300, 300], [-10, 10]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      if (window.matchMedia("(pointer: coarse)").matches) return;
      const moveX = clientX - window.innerWidth / 2;
      const moveY = clientY - window.innerHeight / 2;
      x.set(moveX);
      y.set(moveY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  if (!mounted) return null;

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, x: 20, y: -20 }}
      animate={{ opacity: 0.7, x: 0, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className={cn("block relative w-full z-20", className)}
    >
      <div className="glass p-4 md:p-6 font-mono text-[10px] md:text-[11px] leading-relaxed border-accent/20 animate-flicker min-w-[280px]">
        <div className="flex items-center gap-2 mb-4 border-b border-accent/10 pb-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-accent tracking-[0.2em]">SYSTEM_DIAGNOSTICS</span>
        </div>

        <div className="space-y-1 text-foreground/70">
          <p>
            <span className="text-accent/50 mr-2">&gt;</span>
            STATUS: <span className="text-accent">ACTIVE</span>
            <span className="ml-1 inline-block w-1.5 h-3 bg-accent animate-[blink_1s_step-end_infinite]" />
          </p>
          <p>
            <span className="text-accent/50 mr-2">&gt;</span>
            MODE: <span className="text-white">DEVELOPMENT // INTERNSHIP_PREP</span>
          </p>
          <p>
            <span className="text-accent/50 mr-2">&gt;</span>
            ROLE: CSE Undergrad @ COER University
          </p>
          <p>
            <span className="text-accent/50 mr-2">&gt;</span>
            FOCUS: AI/ML + Edge Computing + GATE 2028
          </p>
          <p>
            <span className="text-accent/50 mr-2">&gt;</span>
            READING: Engineering Papers // Deep Work
          </p>
        </div>

        <div className="mt-6 pt-2 border-t border-accent/10 flex justify-between items-center opacity-40">
          <span>SYSTEM: ACTIVE</span>
          <span>LOC: 29.86N / 77.89E</span>
        </div>
      </div>
    </motion.div>
  );
};

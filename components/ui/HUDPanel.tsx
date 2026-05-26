"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export const HUDPanel = () => {
  const [mounted, setMounted] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the motion
  const springX = useSpring(x, { stiffness: 100, damping: 30 });
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(springY, [-300, 300], [10, -10]);
  const rotateY = useTransform(springX, [-300, 300], [-10, 10]);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
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
      className="hidden lg:block absolute top-10 right-10 z-20"
    >
      <div className="glass p-6 font-mono text-[11px] leading-relaxed border-accent/20 animate-flicker min-w-[280px]">
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
            MODE: <span className="text-white">LEARNING</span>
          </p>
          <p>
            <span className="text-accent/50 mr-2">&gt;</span>
            ROLE: CSE @ COER | 2nd Semester
          </p>
          <p>
            <span className="text-accent/50 mr-2">&gt;</span>
            FOCUS: DSA + GATE 2028
          </p>
          <p>
            <span className="text-accent/50 mr-2">&gt;</span>
            READING: Atomic Habits
          </p>
        </div>

        <div className="mt-6 pt-2 border-t border-accent/10 flex justify-between items-center opacity-40">
          <span>LATENCY: 24MS</span>
          <span>LOC: 29.86N / 77.89E</span>
        </div>
      </div>
    </motion.div>
  );
};

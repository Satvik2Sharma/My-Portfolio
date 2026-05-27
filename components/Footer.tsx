"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const ASCII_ART = `
 _____  ___  _____ _   _ _____ _   __
/  ___|/ _ \\\\|_   _| | | |_   _| | / /
\\\\ \`--./ /_\\\\ \\ | | | | | | | | | |/ /
 \`--. \\\\  _  | | | | | | | | | |    \\\\
/\\\\__/ / | | | | | \\\\ \\\\_/ /_| |_| |\\\\  \\\\
\\\\____/\\\\_| |_/ \\\\_/  \\\\___/ \\\\___/\\\\_| \\\\_/
`;

export const Footer = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (isInView) {
      let charIndex = 0;
      const timer = setInterval(() => {
        setDisplayText(ASCII_ART.slice(0, charIndex + 1));
        charIndex++;
        if (charIndex === ASCII_ART.length) clearInterval(timer);
      }, 5);
      return () => clearInterval(timer);
    }
  }, [isInView]);

  return (
    <footer ref={containerRef} className="py-16 bg-surface/30 border-t border-white/5 overflow-hidden">
      <div className="container px-6 flex flex-col items-center gap-12">
        <div className="flex flex-col md:flex-row items-center justify-between w-full opacity-40 text-[10px] text-mono tracking-widest uppercase gap-4">
          <p>© 2026 // ALL_RIGHTS_RESERVED</p>
          <div className="h-px w-24 bg-white/10 hidden md:block" />
          <p className="normal-case text-center">Focused on continuous learning, deep work, and building technology that matters.</p>
          <div className="h-px w-24 bg-white/10 hidden md:block" />
          <p>LOCAL_TIME // GMT+5:30</p>
        </div>

        {/* Hidden ASCII Art */}
        <div className="w-full relative py-12 flex flex-col items-center">
            <motion.pre 
               className="text-[6px] md:text-[8px] lg:text-[10px] text-accent/20 font-mono leading-none select-none overflow-visible w-fit mx-auto"
            >
              {displayText}
              <motion.span 
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block w-2 h-4 bg-accent/40 align-middle ml-1"
              />
            </motion.pre>
            

        </div>
      </div>
    </footer>
  );
};

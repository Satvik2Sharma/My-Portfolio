"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Shield, Cpu, HardDrive } from "lucide-react";

const COMMANDS = [
  { cmd: "ls sys/arch", res: ["cpp_intel", "java_jvm", "linux_kernel"] },
  { cmd: "check --perf cpp", res: ["LOW_LATENCY: TRUE", "MEMORY_MGMT: MANUAL"] },
  { cmd: "whoami", res: ["satvik_sharma", "sys_architect"] },
];

export const TerminalCard = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let charIndex = 0;
    const currentCmd = COMMANDS[index].cmd;
    
    setText("");
    setIsTyping(true);

    const timer = setInterval(() => {
      setText(currentCmd.slice(0, charIndex + 1));
      charIndex++;
      
      if (charIndex === currentCmd.length) {
        clearInterval(timer);
        setIsTyping(false);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % COMMANDS.length);
        }, 3000);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [index]);

  return (
    <div className="glass p-8 rounded-3xl flex flex-col gap-6 bg-black/40 border-accent/10 md:col-span-2 relative overflow-hidden group">
      <div className="flex items-center justify-between border-b border-white/5 pb-4">
        <div className="flex items-center gap-3">
          <Terminal size={18} className="text-accent" />
          <h3 className="text-sm font-mono text-accent uppercase tracking-widest">SYSTEM_ARCHITECTURE</h3>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
        </div>
      </div>

      <div className="font-mono text-xs space-y-4">
        <div className="space-y-1 h-[100px] overflow-hidden">
          <div className="flex gap-2 text-foreground/40">
            <span className="text-accent">satvik@arsenal:~$</span>
            <span className="text-foreground/80">{text}</span>
            <span className="w-2 h-4 bg-accent animate-[blink_1s_step-end_infinite]" />
          </div>
          
          <AnimatePresence>
            {!isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-1 pl-4"
              >
                {COMMANDS[index].res.map((line, i) => (
                  <p key={i} className="text-foreground/40">
                    <span className="text-accent/20 mr-2">➔</span>
                    {line}
                  </p>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Static Skills Detail */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/5 opacity-60">
          <div className="space-y-1">
            <p className="text-[10px] text-accent/60">LANGUAGE</p>
            <p className="text-white">C++ / Python / Java</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] text-accent/60">ENVIRONMENT</p>
            <p className="text-white">Linux / Git</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] text-accent/60">CS_THEORY</p>
            <p className="text-white">OS / OOPs / DSA</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] text-accent/60">DATABASE</p>
            <p className="text-white">SQL / DBMS</p>
          </div>
        </div>
      </div>

      {/* Background Graphic */}
      <div className="absolute -bottom-10 -right-10 opacity-[0.03] rotate-12 pointer-events-none transition-transform duration-700 group-hover:rotate-0">
        <Cpu size={300} />
      </div>
    </div>
  );
};

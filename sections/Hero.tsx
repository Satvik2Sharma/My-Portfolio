"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/Section";
import { HUDPanel } from "@/components/ui/HUDPanel";

const phrases = [
  "Software Engineer",
  "CSE Student @ COER",
  "GATE 2028 Aspirant",
  "Problem Solver",
];

export const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section className="relative min-h-[90vh] flex items-center pt-24 overflow-visible">
      <HUDPanel />
      
      <div className="max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-mono text-accent"
            >
              Hi, I&apos;m Satvik Sharma
            </motion.p>
            
            <h1 className="text-5xl md:text-8xl font-bold leading-[1.1] tracking-tighter">
              A Passionate B.Tech(CSE) Student. <br />
              <div className="h-[1.2em] relative overflow-hidden inline-block align-top ml-1">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={phrases[index]}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0 text-accent block whitespace-nowrap"
                  >
                    {phrases[index]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-body text-xl max-w-2xl text-foreground/60 leading-relaxed font-sans"
          >
            I build high-performance applications and solve complex 
            algorithmic challenges while pursuing my engineering degree.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <Button size="lg" className="h-14 px-10 text-base">
              Explore Projects
            </Button>
            <Button variant="secondary" size="lg" className="h-14 px-10 text-base">
              View Case Studies
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px]"
      />
    </Section>
  );
};

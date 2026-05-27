"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/Section";
import { HUDPanel } from "@/components/ui/HUDPanel";

const phrases = [
  "AI-Powered Systems",
  "Edge-Optimized AI",
  "High-Performance Apps",
  "Modern Web Experiences",
];

export const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Section className="relative min-h-[90vh] flex items-center pt-24 overflow-visible">
      <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-12 z-10 relative">
        <div className="max-w-3xl space-y-8 flex-1">
          <div className="space-y-4">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-mono text-accent text-lg md:text-xl font-medium tracking-wide"
            >
              Hi, I&apos;m Satvik Sharma
            </motion.p>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tighter">
              Building{" "}
              <br className="lg:hidden" />
              <div className="h-[1.2em] relative overflow-hidden inline-block align-top">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={phrases[index]}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="text-accent inline-block whitespace-nowrap"
                  >
                    {phrases[index]}
                  </motion.span>
                </AnimatePresence>
              </div>{" "}
              <br />
              &amp; Scalable Web Experiences.
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-body text-xl max-w-2xl text-foreground/60 leading-relaxed font-sans"
          >
            Motivated Computer Science undergraduate focused on Artificial Intelligence, Edge Computing, and Full-Stack Development. Passionate about building impactful, edge-optimized AI solutions and scalable web applications.
          </motion.p>

          <div className="lg:hidden">
            <HUDPanel className="mb-6 w-full" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <Button size="lg" className="h-14 px-10 text-base" onClick={() => scrollToSection("featured-projects")}>
              Explore Projects
            </Button>
            <Button variant="secondary" size="lg" className="h-14 px-10 text-base" onClick={() => scrollToSection("research")}>
              View Research
            </Button>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="lg" className="h-14 px-10 text-base border border-accent/20">
                View Resume
              </Button>
            </a>
          </motion.div>
        </div>

        <div className="hidden lg:block shrink-0 z-20">
          <HUDPanel className="w-[320px] xl:w-[360px]" />
        </div>
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

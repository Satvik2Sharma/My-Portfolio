"use client";

import { Section } from "@/components/Section";
import { Magnetic } from "@/components/ui/Magnetic";
import { Button } from "@/components/ui/Button";
import { Code2, Globe, Mail, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const SOCIALS = [
  { name: "GitHub", href: "https://github.com/satviksharma", icon: <Code2 size={24} /> },
  { name: "LinkedIn", href: "https://linkedin.com/in/satviksharma", icon: <Globe size={24} /> },
  { name: "Email", href: "mailto:satvik@example.com", icon: <Mail size={24} /> },
];

export const Contact = () => {
  return (
    <Section id="contact" className="relative min-h-[60vh] flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-12"
      >
        <div className="space-y-4">
          <p className="text-mono text-accent tracking-[0.2em]">CONNECTION_PORTAL // V1.0</p>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
            Let&apos;s build something <br />
            <span className="text-accent underline decoration-accent/20">meaningful.</span>
          </h2>
        </div>

        <div className="flex items-center justify-center gap-8">
          {SOCIALS.map((social) => (
            <Magnetic key={social.name} strength={0.4}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-16 h-16 rounded-full glass border-white/5 hover:border-accent/40 bg-white/5 transition-colors overflow-hidden"
              >
                <div className="relative z-10 text-foreground/60 group-hover:text-accent transition-colors duration-500">
                  {social.icon}
                </div>
                {/* Magnetic Glow Reveal */}
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              </a>
            </Magnetic>
          ))}
        </div>

        <div className="pt-8">
          <Button size="lg" className="h-16 px-12 text-lg rounded-full group">
            START_COLLABORATION
            <ArrowUpRight size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>
      </motion.div>

      {/* Background Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -z-10" />
    </Section>
  );
};

"use client";

import { Section } from "@/components/Section";
import { Magnetic } from "@/components/ui/Magnetic";
import { Button } from "@/components/ui/Button";
import { Mail, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-github"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-linkedin"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const SOCIALS = [
  { name: "Github", href: "https://github.com/Satvik2Sharma", icon: <GithubIcon size={24} /> },
  { name: "Linkedin", href: "https://www.linkedin.com/in/satvik2sharma", icon: <LinkedinIcon size={24} /> },
  { name: "Email", href: "mailto:satviksharma1706@gmail.com", icon: <Mail size={24} /> },
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

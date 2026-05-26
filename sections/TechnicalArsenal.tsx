"use client";

import { Section } from "@/components/Section";
import { SkillCard } from "@/components/ui/SkillCard";
import { TerminalCard } from "@/components/ui/TerminalCard";
import { CPCard } from "@/components/ui/CPCard";
import { Brain, Layout, Cpu, Code2, Globe, Database, Network, Shield } from "lucide-react";

const CORE_INTELLIGENCE = [
  { name: "AI/ML (NLP Focus)", usedIn: ["Sehpaathi AI", "NutriSnap"] },
  { name: "Python (FastAPI/PyTorch)", usedIn: ["Research Lab", "Sehpaathi AI"] },
  { name: "Computer Vision", usedIn: ["NutriSnap"] },
];

const EXPERIENCE_DESIGN = [
  { name: "Next.js / TypeScript", usedIn: ["Portfolio", "Sehpaathi AI"] },
  { name: "Tailwind CSS / Framer Motion", usedIn: ["Portfolio", "Research Lab"] },
  { name: "System Architecture Design", usedIn: ["Sehpaathi AI", "Healthcare Chatbot"] },
];

export const TechnicalArsenal = () => {
  return (
    <Section id="arsenal" className="relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">My <span className="text-accent">Toolstack</span></h2>
          <p className="text-body max-w-xl text-foreground/70 leading-relaxed italic border-l-2 border-accent/20 pl-4 py-1">
            Specialized engineering focused on high-performance systems and 
            perceptive user experiences.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Core Intelligence */}
        <SkillCard 
          title="Core Intelligence" 
          icon={Brain} 
          skills={CORE_INTELLIGENCE}
        />

        {/* Experience Design */}
        <SkillCard 
          title="Experience Design" 
          icon={Layout} 
          skills={EXPERIENCE_DESIGN}
        />

        {/* System Architecture Terminal */}
        <TerminalCard />

        {/* Competitive Programming */}
        <CPCard 
          solved={450} 
          rating={1654} 
          streak={42} 
          data={[1100, 1250, 1200, 1400, 1550, 1450, 1600, 1654]} 
        />

        {/* Cloud Infrastructure (Bonus) */}
        <SkillCard 
          title="Infrastructure" 
          icon={Database} 
          skills={[
            { name: "Linux / Shell Scripting", usedIn: ["Research Lab", "System Architecture"] },
            { name: "PostgreSQL / Redis", usedIn: ["Sehpaathi AI", "NutriSnap"] },
            { name: "Docker / K8s", usedIn: ["Research Lab"] },
          ]}
        />
      </div>

      {/* Decorative SVG Icons */}
      <div className="absolute top-0 right-0 p-20 opacity-[0.03] pointer-events-none select-none hidden lg:block">
        <Shield size={400} className="text-accent" />
      </div>
    </Section>
  );
};

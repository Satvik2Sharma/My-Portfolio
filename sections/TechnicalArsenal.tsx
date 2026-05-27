"use client";

import { Section } from "@/components/Section";
import { SkillCard } from "@/components/ui/SkillCard";
import { TerminalCard } from "@/components/ui/TerminalCard";
import { CPCard } from "@/components/ui/CPCard";
import { Brain, Layout, Cpu, Code2, Globe, Database, Network, Shield } from "lucide-react";

const CORE_LANGUAGES = [
  { name: "Java", usedIn: ["Academic Projects"] },
  { name: "Python", usedIn: ["Sehpaathi AI", "Price Predictor", "Research Paper"] },
  { name: "C/C++", usedIn: ["OSPOT", "Agro-Guardian"] },
];

const AI_ML = [
  { name: "TensorFlow", usedIn: ["Academic Prep"] },
  { name: "OpenCV", usedIn: ["Research Paper"] },
  { name: "YOLOv8", usedIn: ["Research Paper"] },
  { name: "NLP", usedIn: ["Sehpaathi AI"] },
  { name: "Scikit-Learn", usedIn: ["Price Predictor"] },
];

const WEB_DEVELOPMENT = [
  { name: "Next.js", usedIn: ["Sehpaathi AI", "Portfolio"] },
  { name: "React", usedIn: ["Sehpaathi AI", "Portfolio"] },
  { name: "Tailwind CSS", usedIn: ["Sehpaathi AI", "Portfolio"] },
  { name: "FastAPI", usedIn: ["Sehpaathi AI"] },
  { name: "Django", usedIn: ["Academic Projects"] },
];

const CS_FUNDAMENTALS = [
  { name: "DSA", usedIn: ["GATE Prep", "Academic Projects"] },
  { name: "OOPs", usedIn: ["OSPOT", "Academic Projects"] },
  { name: "Operating Systems", usedIn: ["OSPOT", "GATE Prep"] },
  { name: "DBMS Basics", usedIn: ["Sehpaathi AI", "Academic Projects"] },
  { name: "Computer Networks Basics", usedIn: ["GATE Prep"] },
];

const DEVELOPER_TOOLS = [
  { name: "Linux", usedIn: ["OSPOT", "Development"] },
  { name: "Git/GitHub", usedIn: ["Version Control", "All Projects"] },
  { name: "VS Code", usedIn: ["Development IDE"] },
  { name: "PyCharm", usedIn: ["Price Predictor"] },
  { name: "IntelliJ", usedIn: ["Java Projects"] },
  { name: "Arduino IDE", usedIn: ["Agro-Guardian"] },
  { name: "Power BI", usedIn: ["Academic Projects"] },
];

export const TechnicalArsenal = () => {
  return (
    <Section id="arsenal" className="relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Technical <span className="text-accent">Arsenal</span></h2>
          <p className="text-body max-w-xl text-foreground/70 leading-relaxed italic border-l-2 border-accent/20 pl-4 py-1">
            Core tools, frameworks, and CS fundamental topics practiced and implemented across my engineering journey.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Core Languages */}
        <SkillCard 
          title="Core Languages" 
          icon={Code2} 
          skills={CORE_LANGUAGES}
        />

        {/* AI / Machine Learning */}
        <SkillCard 
          title="AI / Machine Learning" 
          icon={Brain} 
          skills={AI_ML}
        />

        {/* Web Development */}
        <SkillCard 
          title="Web Development" 
          icon={Globe} 
          skills={WEB_DEVELOPMENT}
        />

        {/* CS Fundamentals */}
        <SkillCard 
          title="CS Fundamentals" 
          icon={Cpu} 
          skills={CS_FUNDAMENTALS}
        />

        {/* Developer Tools */}
        <SkillCard 
          title="Developer Tools" 
          icon={Database} 
          skills={DEVELOPER_TOOLS}
        />

        {/* DSA & Problem Solving */}
        <CPCard />

        {/* System Architecture Terminal */}
        <TerminalCard />
      </div>

      {/* Decorative SVG Icons */}
      <div className="absolute top-0 right-0 p-20 opacity-[0.03] pointer-events-none select-none hidden lg:block">
        <Shield size={400} className="text-accent" />
      </div>
    </Section>
  );
};

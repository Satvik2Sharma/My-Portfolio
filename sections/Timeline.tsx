"use client";

import { Section } from "@/components/Section";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { Milestone, Flag, Rocket, History } from "lucide-react";

const JOURNEY = [
  {
    date: "AUG 2024",
    status: "past" as const,
    title: "Commenced B.Tech in CSE @ COER",
    description: "Started my academic journey in Computer Science and Engineering, focusing on building a strong foundation in high-performance computing and algorithms.",
  },
  {
    date: "DEC 2024",
    status: "past" as const,
    title: "Built Sehpaathi AI V4.1",
    description: "Successfully launched the flagship EdTech platform with accuracy-based NLP diagnostics and personalized study plan generation for fellow students.",
  },
  {
    date: "MAR 2025",
    status: "current" as const,
    title: "Healthcare Diagnostic Engine",
    description: "Currently engineering a real-time AI diagnostic engine (Neuro-Chat) with weighted confidence scoring and a minimalist conversational UI.",
  },
  {
    date: "JUL 2025",
    status: "future" as const,
    title: "Internship @ Tier-1 Tech",
    description: "Aiming for a summer internship at a leading technology firm to apply my system architecture and AI skills to large-scale production environments.",
    nextAction: "PREP_LEET_GOAL_200",
  },
  {
    date: "FEB 2026",
    status: "future" as const,
    title: "SDE-1 Roles & GATE 2028 Prep",
    description: "Beginning intensive preparation for GATE 2028 while targetting high-performance SDE-1 roles in specialized engineering domains.",
    nextAction: "GATE_PIPELINE_INIT",
  },
];

export const Timeline = () => {
  return (
    <Section id="journey" className="relative overflow-visible">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 px-4">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Academic <span className="text-accent">Evolution</span></h2>
          <p className="text-body max-w-xl text-foreground/70 leading-relaxed italic border-l-2 border-accent/20 pl-4 py-1">
            Visualizing the timeline of my technical growth and future landmarks.
          </p>
        </div>

        <div className="flex items-center gap-3 p-1 glass bg-white/5 rounded-2xl border-white/5">
          <div className="p-3 rounded-xl bg-accent text-zinc-950 shadow-[0_0_15px_var(--accent)]">
            <History size={20} />
          </div>
          <div className="p-3 text-foreground/20">
            <Milestone size={20} />
          </div>
          <div className="p-3 text-foreground/20">
            <Rocket size={20} />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-20 relative">
        <div className="space-y-4">
          {JOURNEY.map((milestone, index) => (
            <TimelineItem 
              key={milestone.title} 
              {...milestone} 
              isLast={index === JOURNEY.length - 1} 
            />
          ))}
        </div>
        
        {/* Floating marker label */}
        <div className="absolute top-0 -left-20 opacity-5 pointer-events-none select-none hidden lg:block">
          <span className="text-[140px] font-bold text-mono tracking-tighter vertical-text origin-top-left -rotate-90">TRACKER</span>
        </div>
      </div>
    </Section>
  );
};

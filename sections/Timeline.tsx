"use client";

import { Section } from "@/components/Section";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { Milestone, Flag, Rocket, History } from "lucide-react";
import { motion } from "framer-motion";

const JOURNEY = [
  {
    date: "AUG 2024",
    status: "past" as const,
    title: "Commenced B.Tech in CSE @ COER University",
    description: "Started B.Tech in Computer Science & Engineering at COER University.",
  },
  {
    date: "DEC 2024",
    status: "past" as const,
    title: "Shipped Sehpaathi AI",
    description: "Built and launched Sehpaathi AI — a full-stack student performance and learning gap analysis platform.",
  },
  {
    date: "AUG 2025",
    status: "past" as const,
    title: "2nd Place @ IIT Roorkee AI Hackathon",
    description: "Won 2nd Place at the prestigious IIT Roorkee AI & GenAI Hackathon.",
  },
  {
    date: "NOV 2025",
    status: "past" as const,
    title: "Oracle OCI AI Foundations Certified",
    description: "Earned Oracle Cloud Infrastructure — AI Foundations Associate Certification with an 87% score.",
  },
  {
    date: "APR 2026",
    status: "past" as const,
    title: "Research Accepted @ ICSSCS 2026",
    description: "Research paper on 'Edge-Optimized YOLOv8 Surveillance Systems' accepted for publication and presentation.",
  },
  {
    date: "MAY 2026",
    status: "current" as const,
    title: "Software Intern @ Cognifyz Technologies",
    description: "Software Development Intern at Cognifyz Technologies Pvt. Ltd., working on modern web experiences.",
    nextAction: "INTERNSHIP_MILESTONES",
  },
  {
    date: "FUTURE",
    status: "future" as const,
    title: "GATE 2028 Preparation",
    description: "Intensive systems and core CS mastery targeting the Graduate Aptitude Test in Engineering 2028.",
    nextAction: "GATE_PREP_PIPELINE",
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

        {/* Subtle CTA at the end of Timeline */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-16 p-6 rounded-2xl bg-accent/5 border border-accent/10 text-center font-mono text-xs text-accent"
        >
          INTERESTED IN WORKING TOGETHER? I&apos;M OPEN TO INTERNSHIPS, COLLABORATIONS, AND RESEARCH PROJECTS.
        </motion.div>
        
        {/* Floating marker label */}
        <div className="absolute top-0 -left-20 opacity-5 pointer-events-none select-none hidden lg:block">
          <span className="text-[140px] font-bold text-mono tracking-tighter vertical-text origin-top-left -rotate-90">TRACKER</span>
        </div>
      </div>
    </Section>
  );
};

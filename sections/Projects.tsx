"use client";

import { ProjectCard } from "@/components/ui/ProjectCard";
import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { Cpu, Layout, Database, Sparkles, Code2, Globe } from "lucide-react";

const PROJECTS = [
  {
    title: "Sehpaathi AI V4",
    description: "An advanced EdTech platform with accuracy-based NLP diagnostics and personalized study plan generation.",
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-close-up-1728-large.mp4",
    techStack: [
      { name: "PostgreSQL", icon: <Database size={14} />, category: "Backend" as const },
      { name: "Artificial Intelligence", icon: <Cpu size={14} />, category: "AI" as const },
      { name: "Next.js", icon: <Layout size={14} />, category: "UI" as const },
    ],
    timeline: [
      { label: "Data_Ingest", active: true },
      { label: "NLP_Engine", active: true },
      { label: "UI_Refinement", active: false }
    ]
  },
  {
    title: "Neuro-Chat Healthcare",
    description: "Real-time AI diagnostic engine with weighted confidence scoring and minimalist conversational UI.",
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-medical-consultation-on-a-digital-tablet-40432-large.mp4",
    techStack: [
      { name: "FastAPI", icon: <Database size={14} />, category: "Backend" as const },
      { name: "TensorFlow", icon: <Cpu size={14} />, category: "AI" as const },
      { name: "React", icon: <Layout size={14} />, category: "UI" as const },
    ],
    timeline: [
      { label: "Diagnostic_Core", active: true },
      { label: "Realtime_Sync", active: true },
      { label: "Clinical_Trial", active: false }
    ]
  },
  {
    title: "Nebula Dashboard",
    description: "High-performance data visualization suite for complex cloud infrastructure monitoring.",
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-cloud-security-and-data-processing-animation-31634-large.mp4",
    techStack: [
      { name: "D3.js", icon: <Layout size={14} />, category: "UI" as const },
      { name: "AWS", icon: <Database size={14} />, category: "Backend" as const },
      { name: "GraphQL", icon: <Code2 size={14} />, category: "Backend" as const },
    ],
    timeline: [
      { label: "Metric_Ingest", active: true },
      { label: "Visual_Render", active: true },
      { label: "Cloud_Sync", active: true }
    ]
  },
];

export const Projects = () => {
  return (
    <Section id="projects" className="relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="space-y-4">
          <p className="text-mono text-accent">LATEST_WORKS // V1.0</p>
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
          <p className="text-body max-w-xl">
            A selection of high-impact applications focusing on AI 
            integration, data analytics, and premium user experiences.
          </p>
        </div>
        
        <div className="flex gap-4">
          <div className="px-4 py-2 rounded-full border border-white/5 bg-white/5 text-[10px] text-mono flex items-center gap-2">
            <Sparkles size={12} className="text-accent" />
            FILTER: ALL_ACTIVE
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>

      {/* Decorative vertical line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent h-full -ml-8 hidden lg:block" />
    </Section>
  );
};

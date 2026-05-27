"use client";

import { ProjectCard } from "@/components/ui/ProjectCard";
import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { Cpu, Layout, Database, Sparkles, Code2, Globe } from "lucide-react";

const PROJECTS = [
  {
    title: "Sehpaathi AI",
    description: "AI-powered student performance analysis platform designed to identify learning gaps using semantic similarity and logic-based scoring.",
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-close-up-1728-large.mp4",
    githubUrl: "https://github.com/Satvik2Sharma/SehpathiAIv2",
    liveUrl: "https://sehpathi-a-iv2.vercel.app/",
    techStack: [
      { name: "Next.js", icon: <Layout size={14} />, category: "UI" as const },
      { name: "FastAPI", icon: <Database size={14} />, category: "Backend" as const },
      { name: "NLP Diagnostic", icon: <Cpu size={14} />, category: "AI" as const },
    ],
    timeline: [
      { label: "Diagnostic_Core", active: true },
      { label: "Similarity_Scoring", active: true },
      { label: "Feedback_Workflows", active: true }
    ]
  },
  {
    title: "Laptop Price Predictor",
    description: "Machine learning web application for predicting laptop prices using engineered hardware and display features.",
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-cloud-security-and-data-processing-animation-31634-large.mp4",
    githubUrl: "https://github.com/Satvik2Sharma/laptop_price-predictor_full-ml-app_Task-2-5_ml-club",
    liveUrl: "https://satvik-sharma-laptop-price-predictor.onrender.com",
    techStack: [
      { name: "Python", icon: <Code2 size={14} />, category: "Backend" as const },
      { name: "Flask", icon: <Database size={14} />, category: "Backend" as const },
      { name: "XGBoost", icon: <Cpu size={14} />, category: "AI" as const },
      { name: "Scikit-Learn", icon: <Cpu size={14} />, category: "AI" as const },
    ],
    timeline: [
      { label: "Data_Extraction", active: true },
      { label: "Feature_Pipeline", active: true },
      { label: "XGBoost_Regressor", active: true }
    ]
  },
  {
    title: "Agro-Guardian",
    description: "Automated crop protection system using ESP32, ultrasonic sensors, and PIR modules for animal threat detection.",
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-cloud-security-and-data-processing-animation-31634-large.mp4",
    githubUrl: "https://github.com/Satvik2Sharma/Agro-Gaurdian",
    techStack: [
      { name: "ESP32", icon: <Cpu size={14} />, category: "Hardware" as const },
      { name: "C++", icon: <Code2 size={14} />, category: "Backend" as const },
      { name: "IoT Sensors", icon: <Database size={14} />, category: "Hardware" as const },
    ],
    timeline: [
      { label: "Sensor_Ingest", active: true },
      { label: "Threat_Detection", active: true },
      { label: "Relay_Activation", active: true }
    ]
  },
  {
    title: "OSPOT",
    description: "Console-based diagnostics tool for monitoring CPU, RAM, and disk usage in real time.",
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-close-up-1728-large.mp4",
    githubUrl: "https://github.com/Satvik2Sharma/OSPOT",
    techStack: [
      { name: "C++", icon: <Code2 size={14} />, category: "Backend" as const },
      { name: "OS APIs", icon: <Cpu size={14} />, category: "Backend" as const },
      { name: "File Handling", icon: <Database size={14} />, category: "Backend" as const },
    ],
    timeline: [
      { label: "OS_API_Binding", active: true },
      { label: "Metric_Sampling", active: true },
      { label: "Realtime_Console", active: true }
    ]
  },
];

export const Projects = () => {
  return (
    <Section id="projects" className="relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="space-y-4">
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

"use client";

import { BentoCard } from "@/components/ui/BentoCard";
import { Section } from "@/components/Section";
import { Zap, Target, Users, Layout, Brain, Server, Database } from "lucide-react";

const FLAGSHIP_PROJECTS = [
  {
    title: "Sehpaathi AI V4.1",
    subtitle: "AI_EDTECH_PLATFORM // 01",
    description: "An intelligent learning companion that transforms student performance data into actionable growth strategies using NLP diagnostics and accuracy-based scoring.",
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-close-up-1728-large.mp4",
    metrics: [
      { label: "Latency", value: "< 45ms", icon: <Zap size={14} /> },
      { label: "Accuracy", value: "98.2%", icon: <Target size={14} /> },
      { label: "Users", value: "1.2k+", icon: <Users size={14} /> },
    ],
    architectureContent: (
      <div className="space-y-8">
        <div className="p-6 rounded-2xl bg-accent/5 border border-accent/10">
          <h4 className="text-accent text-mono text-sm mb-4">SYSTEM_TOPOLOGY</h4>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-8 px-4 font-mono text-xs">
            <div className="flex flex-col items-center gap-2 p-4 glass rounded-xl border-accent/20 w-32 text-center">
              <Layout className="text-accent" />
              FRONTEND (NEXT.JS)
            </div>
            <div className="md:rotate-0 rotate-90 text-accent/20 opacity-40">➔</div>
            <div className="flex flex-col items-center gap-2 p-6 glass rounded-full border-accent/20 w-40 text-center animate-pulse">
              <Brain className="text-accent" />
              NLP_ENGINE (FASTAPI)
            </div>
            <div className="md:rotate-0 rotate-90 text-accent/20 opacity-40">➔</div>
            <div className="flex flex-col items-center gap-2 p-4 glass rounded-xl border-accent/20 w-32 text-center">
              <Database className="text-accent" />
              POSTGRES + REDIS
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-lg font-bold">The Core Engine</h4>
            <p className="text-foreground/60 leading-relaxed">
              Implemented a weighted confidence scoring algorithm that merges NLP similarity 
              and hard metrics. Uses Redis for caching frequently accessed student analytics.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Dynamic Generation</h4>
            <p className="text-foreground/60 leading-relaxed">
              Personalized 7-day study plans are generated using a heuristic-based 
              scheduler that adapts to the student&apos;s "Grip Score" in real-time.
            </p>
          </div>
        </div>
      </div>
    ),
    thinkingContent: (
      <div className="space-y-6">
        <div className="space-y-2">
          <h4 className="text-accent font-mono text-sm">PROBLEM_SPACE</h4>
          <p className="text-lg text-foreground/80">
            Education analytics are often descriptive, not prescriptive. Students know they failed, 
            but not *how* to improve specifically based on their cognitive gaps.
          </p>
        </div>
        <div className="space-y-2">
          <h4 className="text-accent font-mono text-sm">APPROACH</h4>
          <p className="text-foreground/60">
            I moved away from standard LLMs for the diagnostic layer to a customized 
            NLP pipeline that uses TF-IDF and Cosine Similarity for precise gap analysis 
            at zero latency. This ensured a "snappy" dashboard experience.
          </p>
        </div>
        <div className="space-y-2">
          <h4 className="text-accent font-mono text-sm">ALTERNATIVES</h4>
          <p className="text-foreground/60">
            Considered using OpenAI Completions for everything, but rejected it due to 
            high token costs and unpredictable latency for every diagnostic check.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "NutriSnap AI",
    subtitle: "HEALTH_ANALYTICS // 02",
    description: "Computer vision platform for automated nutritional analysis from food images, featuring real-time macro-nutrient tracking and caloric prediction.",
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-medical-consultation-on-a-digital-tablet-40432-large.mp4",
    metrics: [
      { label: "Recognition", value: "94%", icon: <Zap size={14} /> },
      { label: "Inference", value: "210ms", icon: <Target size={14} /> },
      { label: "Database", value: "10k+", icon: <Users size={14} /> },
    ],
    architectureContent: (
      <div className="p-8 text-center text-foreground/40 font-mono italic">
        [ SYSTEM_DIAGRAM_V2.0_LOAD_PENDING ]
      </div>
    ),
    thinkingContent: (
      <div className="space-y-4">
        <p className="text-lg text-foreground/80">Solving mass-market nutrition tracking friction...</p>
        <p className="text-foreground/60">
          The goal was to eliminate manual entry. We used YOLOv8 for real-time 
          object detection combined with a custom Nutrition API mapping.
        </p>
      </div>
    ),
  },
];

export const FeaturedProjects = () => {
  return (
    <Section className="relative overflow-visible">
      {/* Decorative background label */}
      <div className="absolute top-0 right-0 -mr-12 opacity-5 pointer-events-none select-none hidden lg:block">
        <span className="text-[200px] font-bold text-mono tracking-tighter -rotate-90 origin-top-right">FLAGSHIP</span>
      </div>

      <div className="space-y-16">
        <div className="space-y-4 max-w-2xl">
          <p className="text-mono text-accent">FLAGSHIP_COLLECTIONS // V4.0</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">Featured <span className="text-accent">Prototypes</span></h2>
          <p className="text-body text-xl">
             High-precision engineering meeting specialized AI use-cases. 
             Explore the thinking and architecture behind my flagship builds.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {FLAGSHIP_PROJECTS.map((project) => (
            <BentoCard key={project.title} {...project} isFlagship />
          ))}
        </div>
      </div>
    </Section>
  );
};

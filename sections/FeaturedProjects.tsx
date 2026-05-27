"use client";

import { BentoCard } from "@/components/ui/BentoCard";
import { Section } from "@/components/Section";
import { Zap, Target, Users, Layout, Brain, Server, Database } from "lucide-react";

const FLAGSHIP_PROJECTS = [
  {
    title: "Sehpaathi AI",
    subtitle: "AI_EDTECH_PLATFORM // 01",
    description: "AI-powered student performance analysis platform designed to identify learning gaps using semantic similarity and logic-based scoring.",
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-close-up-1728-large.mp4",
    githubUrl: "https://github.com/Satvik2Sharma/SehpathiAIv2",
    liveUrl: "https://sehpathi-a-iv2.vercel.app/",
    metrics: [
      { label: "NLP Engine", value: "Semantic", icon: <Brain size={14} /> },
      { label: "Frontend", value: "Next.js", icon: <Layout size={14} /> },
      { label: "Backend", value: "FastAPI", icon: <Server size={14} /> },
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
              SQL DATABASE
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Semantic Gap Analysis</h4>
            <p className="text-foreground/60 leading-relaxed">
              Utilizes TF-IDF vectorization and cosine similarity to map student test responses against expected logical checkpoints, pinpointing specific conceptual blindspots.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Adaptive Feedback</h4>
            <p className="text-foreground/60 leading-relaxed">
              Translates logic-based similarity scores into personalized revision workflows, providing students with target revision materials and focused practice items.
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
            Descriptive test scoring identifies *what* questions a student missed, but struggles to identify the underlying cognitive or conceptual gaps that caused the error.
          </p>
        </div>
        <div className="space-y-2">
          <h4 className="text-accent font-mono text-sm">APPROACH</h4>
          <p className="text-foreground/60">
            Implemented a semantic-similarity analyzer that parses student response logic, comparing it with reference answers. This offers fine-grained diagnostics without the compute overhead and token cost of raw LLM prompting.
          </p>
        </div>
        <div className="space-y-2">
          <h4 className="text-accent font-mono text-sm">DESIGN DECISIONS</h4>
          <p className="text-foreground/60">
            Chose FastAPI for the similarity scoring engine to guarantee sub-50ms execution times, keeping the main user interface responsive and recruiter-friendly during demonstrations.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Laptop Price Predictor",
    subtitle: "MACHINE_LEARNING // 02",
    description: "Machine learning web application for predicting laptop prices using engineered hardware and display features.",
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-cloud-security-and-data-processing-animation-31634-large.mp4",
    githubUrl: "https://github.com/Satvik2Sharma/laptop_price-predictor_full-ml-app_Task-2-5_ml-club",
    liveUrl: "https://satvik-sharma-laptop-price-predictor.onrender.com",
    metrics: [
      { label: "R² Accuracy", value: "0.8913", icon: <Target size={14} /> },
      { label: "Dataset Size", value: "1.3k Recs", icon: <Database size={14} /> },
      { label: "Model", value: "XGBoost", icon: <Zap size={14} /> },
    ],
    architectureContent: (
      <div className="space-y-8">
        <div className="p-6 rounded-2xl bg-accent/5 border border-accent/10">
          <h4 className="text-accent text-mono text-sm mb-4">DATA_PIPELINE</h4>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-8 px-4 font-mono text-xs">
            <div className="flex flex-col items-center gap-2 p-4 glass rounded-xl border-accent/20 w-32 text-center">
              <Database className="text-accent" />
              RAW DATASET
            </div>
            <div className="md:rotate-0 rotate-90 text-accent/20 opacity-40">➔</div>
            <div className="flex flex-col items-center gap-2 p-6 glass rounded-full border-accent/20 w-40 text-center animate-pulse">
              <Zap className="text-accent" />
              FEATURE ENG
            </div>
            <div className="md:rotate-0 rotate-90 text-accent/20 opacity-40">➔</div>
            <div className="flex flex-col items-center gap-2 p-4 glass rounded-xl border-accent/20 w-32 text-center">
              <Server className="text-accent" />
              XGB REGRESSOR
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Feature Engineering</h4>
            <p className="text-foreground/60 leading-relaxed">
              Extracts rich indicators from unstructured specs, including Pixel Density (PPI), IPS display, touchscreen capability, and storage categories (SSD/HDD split).
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Prediction Query Vector</h4>
            <p className="text-foreground/60 leading-relaxed">
              Constructs a clean 45-feature query vector dynamically on Flask API requests to run inferences with minimal overhead and reliable prediction accuracy.
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
            Raw hardware specifications (e.g., CPU brand, storage size, RAM size, display resolution) do not scale linearly with pricing due to complex manufacturer configurations.
          </p>
        </div>
        <div className="space-y-2">
          <h4 className="text-accent font-mono text-sm">APPROACH</h4>
          <p className="text-foreground/60">
            Focused heavily on text processing and extraction pipeline to feed structured numerical features (like screen resolution translated to PPI) into regression models rather than raw categorical values.
          </p>
        </div>
        <div className="space-y-2">
          <h4 className="text-accent font-mono text-sm">MODEL SELECTION</h4>
          <p className="text-foreground/60">
            Trained multiple models including Linear Regression, Decision Trees, and Random Forests. An XGBoost Regressor achieved the highest testing performance with an R² score of 0.8913.
          </p>
        </div>
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

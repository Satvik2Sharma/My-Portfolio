"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Play, Activity, Target, Users, Zap, Binary, Network, Code2, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";

interface Metric {
  label: string;
  value: string;
  icon: React.ReactNode;
}

interface BentoCardProps {
  title: string;
  subtitle: string;
  description: string;
  videoSrc: string;
  metrics: Metric[];
  architectureContent: React.ReactNode;
  thinkingContent: React.ReactNode;
  isFlagship?: boolean;
  githubUrl?: string;
  liveUrl?: string;
}

export const BentoCard = ({
  title,
  subtitle,
  description,
  videoSrc,
  metrics,
  architectureContent,
  thinkingContent,
  isFlagship = false,
  githubUrl,
  liveUrl,
}: BentoCardProps) => {
  const [modalType, setModalType] = useState<"architecture" | "thinking" | null>(null);
  const isVideo = videoSrc.endsWith(".mp4") || videoSrc.endsWith(".webm");

  return (
    <>
      <div
        className={cn(
          "glass rounded-3xl overflow-hidden relative group flex flex-col",
          isFlagship && "lg:col-span-2"
        )}
      >
        {/* Video Background/Preview */}
        <div className="relative aspect-video lg:aspect-auto lg:h-[300px] overflow-hidden bg-surface">
          {isVideo ? (
            <video
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
            />
          ) : (
            <img
              src={videoSrc}
              alt={title}
              className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent" />
          
          {/* Metrics Panel */}
          <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="glass p-3 rounded-2xl border-white/5 bg-white/5 backdrop-blur-xl">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-accent">{metric.icon}</span>
                  <span className="text-[9px] text-mono text-foreground/40 uppercase tracking-wider">{metric.label}</span>
                </div>
                <div className="text-lg font-heading font-bold text-accent">{metric.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 space-y-4 flex-grow flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-mono text-accent text-[10px] tracking-widest">{subtitle}</span>
              <div className="h-px flex-grow bg-accent/10" />
            </div>
            <h3 className="text-3xl font-heading font-bold text-foreground tracking-tight">{title}</h3>
            <p className="text-body text-foreground/60 leading-relaxed">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-4">
            <Button 
               variant="secondary" 
               className="rounded-full px-6 bg-white/5 border-white/5 hover:border-accent/20"
               onClick={() => setModalType("architecture")}
            >
              <Network size={14} className="mr-2 text-accent" />
              View Architecture
            </Button>
            <Button 
              variant="secondary" 
              className="rounded-full px-6 bg-white/5 border-white/5 hover:border-accent/20"
              onClick={() => setModalType("thinking")}
            >
              <Binary size={14} className="mr-2 text-accent" />
              View Thinking
            </Button>
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Button 
                   variant="secondary" 
                   className="rounded-full px-6 bg-white/5 border-white/5 hover:border-accent/20"
                >
                  <Code2 size={14} className="mr-2 text-accent" />
                  Code
                </Button>
              </a>
            )}
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <Button 
                   variant="secondary" 
                   className="rounded-full px-6 bg-white/5 border-white/5 hover:border-accent/20"
                >
                  <ExternalLink size={14} className="mr-2 text-accent" />
                  Live Demo
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Architecture Modal */}
      <Modal
        isOpen={modalType === "architecture"}
        onClose={() => setModalType(null)}
        title={`${title} // SYSTEM_ARCHITECTURE`}
      >
        {architectureContent}
      </Modal>

      {/* Thinking Modal */}
      <Modal
        isOpen={modalType === "thinking"}
        onClose={() => setModalType(null)}
        title={`${title} // REASONING_ENGINE`}
      >
        {thinkingContent}
      </Modal>
    </>
  );
};

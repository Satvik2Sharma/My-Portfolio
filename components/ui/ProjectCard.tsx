"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ExternalLink, 
  Code2, 
  Play, 
  Layers, 
  Cpu, 
  Layout, 
  Clock,
  ChevronRight
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  videoSrc: string;
  techStack: { name: string; icon?: React.ReactNode; category?: string }[];
  timeline: { label: string; active: boolean }[];
}

export const ProjectCard = ({ 
  title, 
  description, 
  videoSrc, 
  techStack,
  timeline = []
}: ProjectCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeMarker, setActiveMarker] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play().catch(() => {});
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.div
        ref={cardRef}
        layoutId={`card-${title}`}
        onClick={() => setIsExpanded(true)}
        className="cursor-pointer group relative"
      >
        <Card className="overflow-hidden p-0 border-white/5 bg-surface/40 hover:border-accent/30 transition-all duration-500">
          {/* Video Preview Container */}
          <div className="relative aspect-video overflow-hidden">
            <video
              ref={videoRef}
              src={videoSrc}
              muted
              loop
              playsInline
              preload="none"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60" />
            
            <div className="absolute bottom-4 left-4 flex gap-2">
              {techStack.map((tech) => (
                <span key={tech.name} className="px-2 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[10px] text-mono text-accent">
                  {tech.name.toUpperCase()}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-heading font-bold tracking-tight group-hover:text-accent transition-colors">
                {title}
              </h3>
              <div className="p-2 rounded-lg bg-white/5 group-hover:bg-accent/10 transition-colors">
                <Play size={16} className="text-foreground/40 group-hover:text-accent" />
              </div>
            </div>
            
            <p className="text-small text-foreground/60 line-clamp-2 leading-relaxed">
              {description}
            </p>

            {/* Interactive Timeline Preview */}
            <div className="pt-4 border-t border-white/5">
              <div className="flex justify-between items-center mb-2">
                 <span className="text-[10px] text-mono text-foreground/40 uppercase tracking-widest">SYSTEM_PIPELINE</span>
                 <span className="text-[10px] text-mono text-accent">ACTIVE</span>
              </div>
              <div className="flex gap-1 h-1">
                {timeline.map((item, i) => (
                  <div 
                    key={i} 
                    className={cn(
                      "flex-grow rounded-full transition-all duration-700",
                      item.active ? "bg-accent shadow-[0_0_8px_var(--accent)]" : "bg-white/10"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Expanded Player Modal */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/90 backdrop-blur-xl"
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              layoutId={`card-${title}`}
              className="w-full max-w-5xl glass rounded-3xl overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="lg:col-span-2 relative aspect-[16/10] bg-black">
                   <video
                    src={videoSrc}
                    autoPlay
                    controls
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <div className="p-8 flex flex-col gap-6">
                  <div className="space-y-2">
                    <div className="text-mono text-accent text-[10px]">PROJECT_BRIEF</div>
                    <h2 className="text-3xl font-heading font-bold">{title}</h2>
                    <p className="text-small text-foreground/60 leading-relaxed">
                      {description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="text-mono text-accent text-[10px]">CORE_ARCHITECTURE</div>
                    <div className="space-y-3">
                      {timeline.map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className={cn(
                            "w-2 h-2 rounded-full",
                            item.active ? "bg-accent animate-pulse shadow-[0_0_8px_var(--accent)]" : "bg-white/10"
                          )} />
                          <span className={cn(
                            "text-xs font-mono tracking-tight",
                            item.active ? "text-foreground" : "text-foreground/30"
                          )}>
                            {item.label.toUpperCase()}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto flex gap-3">
                    <Button className="flex-grow">VIEW_LIVE</Button>
                    <Button variant="secondary" className="p-3">
                      <Code2 size={20} />
                    </Button>
                  </div>
                </div>
              </div>
              
              <Button 
                variant="ghost" 
                className="absolute top-4 right-4 rounded-full p-2 h-10 w-10 border-accent/20"
                onClick={() => setIsExpanded(false)}
              >
                ✕
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

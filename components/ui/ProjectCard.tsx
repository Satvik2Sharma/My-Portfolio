"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ExternalLink, 
  Code2, 
  Play
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
  githubUrl?: string;
  liveUrl?: string;
}

interface VideoWithDiagnosticsProps {
  src: string;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  autoPlay?: boolean;
  controls?: boolean;
  className?: string;
  videoRef?: React.RefObject<HTMLVideoElement | null>;
}

const VideoWithDiagnostics = ({
  src,
  muted,
  loop,
  playsInline,
  autoPlay,
  controls,
  className,
  videoRef: externalRef,
}: VideoWithDiagnosticsProps) => {
  const localRef = useRef<HTMLVideoElement>(null);
  const ref = externalRef || localRef;
  
  const [error, setError] = useState<string | null>(null);
  const [diagnostics, setDiagnostics] = useState<{
    readyState: number;
    networkState: number;
    currentSrc: string;
  } | null>(null);

  const updateDiagnostics = useCallback(() => {
    if (ref.current) {
      setDiagnostics({
        readyState: ref.current.readyState,
        networkState: ref.current.networkState,
        currentSrc: ref.current.currentSrc || src,
      });
    }
  }, [src, ref]);

  useEffect(() => {
    updateDiagnostics();
    const interval = setInterval(updateDiagnostics, 1000);
    return () => clearInterval(interval);
  }, [src, updateDiagnostics]);

  const handleError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const videoEl = ref.current;
    let errMsg = "Unknown video loading error.";
    if (videoEl && videoEl.error) {
      switch (videoEl.error.code) {
        case videoEl.error.MEDIA_ERR_ABORTED:
          errMsg = "Video playback aborted by user.";
          break;
        case videoEl.error.MEDIA_ERR_NETWORK:
          errMsg = "Network error caused video download to fail.";
          break;
        case videoEl.error.MEDIA_ERR_DECODE:
          errMsg = "Video decoding failed. The format/codec is likely unsupported.";
          break;
        case videoEl.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
          errMsg = "Video source not supported (404, invalid path, or bad MIME type).";
          break;
      }
    }
    console.error(`[Video Diagnostics] Error loading video: "${src}". Details: ${errMsg}`, e);
    setError(errMsg);
    updateDiagnostics();
  };

  const handleLoadedData = () => {
    console.log(`[Video Diagnostics] Data loaded for: "${src}"`);
    setError(null);
    updateDiagnostics();
  };

  const handleCanPlay = () => {
    console.log(`[Video Diagnostics] Can play video: "${src}"`);
    updateDiagnostics();
  };

  const getNetworkStateString = (state: number) => {
    switch (state) {
      case 0: return "0: NETWORK_EMPTY (No source/initial)";
      case 1: return "1: NETWORK_IDLE (Idle/cached)";
      case 2: return "2: NETWORK_LOADING (Downloading)";
      case 3: return "3: NETWORK_NO_SOURCE (Source not found)";
      default: return `${state}: Unknown`;
    }
  };

  const getReadyStateString = (state: number) => {
    switch (state) {
      case 0: return "0: HAVE_NOTHING (No data)";
      case 1: return "1: HAVE_METADATA (Metadata loaded)";
      case 2: return "2: HAVE_CURRENT_DATA (Current frame only)";
      case 3: return "3: HAVE_FUTURE_DATA (Can play a bit)";
      case 4: return "4: HAVE_ENOUGH_DATA (Can play smoothly)";
      default: return `${state}: Unknown`;
    }
  };

  return (
    <div className="relative w-full h-full group/video bg-black flex items-center justify-center">
      <video
        ref={ref}
        src={src}
        muted={muted}
        loop={loop}
        playsInline={playsInline}
        autoPlay={autoPlay}
        controls={controls}
        className={className}
        onError={handleError}
        onLoadedData={handleLoadedData}
        onCanPlay={handleCanPlay}
        onLoadStart={updateDiagnostics}
        onDurationChange={updateDiagnostics}
        onPlay={updateDiagnostics}
        onPlaying={updateDiagnostics}
        onPause={updateDiagnostics}
      />

      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/85 backdrop-blur-md p-6 text-center z-10 select-text">
          <div className="p-3 bg-red-950/40 border border-red-500/30 rounded-full mb-3 text-red-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h4 className="text-red-400 font-bold mb-1 text-sm font-mono tracking-wider">VIDEO_LOAD_FAILED</h4>
          <p className="text-xs text-foreground/80 max-w-md mb-4">{error}</p>
          
          {diagnostics && (
            <div className="bg-black/60 border border-white/5 rounded-lg p-3 max-w-lg w-full text-left font-mono text-[10px] space-y-1.5 text-foreground/60">
              <div className="text-accent border-b border-white/5 pb-1 mb-1 font-bold">DIAGNOSTICS:</div>
              <div><span className="text-foreground/40">SRC:</span> {diagnostics.currentSrc}</div>
              <div><span className="text-foreground/40">READY_STATE:</span> {getReadyStateString(diagnostics.readyState)}</div>
              <div><span className="text-foreground/40">NETWORK_STATE:</span> {getNetworkStateString(diagnostics.networkState)}</div>
            </div>
          )}
        </div>
      )}

      {!error && diagnostics && (
        <div className="absolute bottom-2 right-2 bg-black/75 backdrop-blur-sm border border-white/10 rounded px-2 py-1 text-[8px] font-mono text-foreground/40 pointer-events-none opacity-0 group-hover/video:opacity-100 transition-opacity duration-300 z-10">
          Ready: {diagnostics.readyState} | Net: {diagnostics.networkState}
        </div>
      )}
    </div>
  );
};

export const ProjectCard = ({ 
  title, 
  description, 
  videoSrc, 
  techStack,
  timeline = [],
  githubUrl,
  liveUrl
}: ProjectCardProps) => {
  const isVideo = videoSrc.endsWith(".mp4") || videoSrc.endsWith(".webm");
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);

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
            {isVideo ? (
              <VideoWithDiagnostics
                videoRef={videoRef}
                src={videoSrc}
                muted
                loop
                playsInline
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
              />
            ) : (
              <img
                src={videoSrc}
                alt={title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
              />
            )}
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

            <div className="flex gap-3 pt-4" onClick={(e) => e.stopPropagation()}>
              {githubUrl && (
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button variant="secondary" className="w-full text-xs py-2 h-auto flex items-center justify-center gap-2 border border-white/10 hover:border-accent/30 hover:bg-accent/10 transition-colors">
                    <Code2 size={14} />
                    View Code
                  </Button>
                </a>
              )}
              {liveUrl && (
                <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button className="w-full text-xs py-2 h-auto flex items-center justify-center gap-2">
                    <ExternalLink size={14} />
                    Live Demo
                  </Button>
                </a>
              )}
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
                  {isVideo ? (
                    <VideoWithDiagnostics
                      src={videoSrc}
                      autoPlay
                      controls
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <img
                      src={videoSrc}
                      alt={title}
                      className="w-full h-full object-contain mx-auto"
                    />
                  )}
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
                    {liveUrl && (
                      <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex-grow">
                        <Button className="w-full flex gap-2 justify-center">
                          <ExternalLink size={20} />
                          <span className="text-xs font-mono">LIVE DEMO</span>
                        </Button>
                      </a>
                    )}
                    {githubUrl && (
                      <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={cn(!liveUrl && "flex-grow")}>
                        <Button variant="secondary" className="w-full flex gap-2 justify-center">
                          <Code2 size={20} />
                          <span className="text-xs font-mono">VIEW CODE</span>
                        </Button>
                      </a>
                    )}
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

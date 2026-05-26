"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, 
  Quote, 
  Download, 
  Binary, 
  BrainCircuit, 
  ChevronRight,
  ClipboardCheck,
  Clipboard
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

interface ResearchCardProps {
  title: string;
  abstract: string;
  contributions: string[];
  tools: string[];
  citation: string;
  bibtex: string;
  onOpen: () => void;
}

export const ResearchCard = ({ 
  title, 
  abstract, 
  contributions, 
  tools, 
  citation, 
  bibtex,
  onOpen 
}: ResearchCardProps) => {
  const [copied, setCopied] = useState(false);
  const [showELI5, setShowELI5] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="flex flex-col gap-6 group relative overflow-hidden">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-accent/10 text-accent">
            <FileText size={20} />
          </div>
          <h3 className="text-xl font-heading font-bold tracking-tight">{title}</h3>
        </div>
        
        <p className="text-small text-foreground/60 leading-relaxed italic border-l-2 border-accent/20 pl-4 py-1">
          &quot;{abstract}&quot;
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <h4 className="text-[10px] text-mono text-accent uppercase tracking-widest">KEY_CONTRIBUTIONS</h4>
          <ul className="space-y-2">
            {contributions.map((item, i) => (
              <li key={i} className="text-xs text-foreground/50 flex items-start gap-2">
                <span className="text-accent/50 mt-1">✦</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="space-y-3">
          <h4 className="text-[10px] text-mono text-accent uppercase tracking-widest">NEURAL_STACK</h4>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span key={tool} className="px-2 py-1 rounded bg-white/5 border border-white/5 text-[9px] text-mono text-foreground/40">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/5">
        <Button onClick={onOpen} className="group/btn">
          OPEN_FULL_PAPER
          <ChevronRight size={14} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
        <div className="flex gap-2">
          <Button variant="secondary" size="sm" onClick={() => copyToClipboard(citation)}>
            {copied ? <ClipboardCheck size={14} /> : <Quote size={14} />}
            <span className="ml-2 text-[10px] text-mono">CITATION</span>
          </Button>
          <Button variant="secondary" size="sm" onClick={() => copyToClipboard(bibtex)}>
            <Binary size={14} />
            <span className="ml-2 text-[10px] text-mono">BIBTEX</span>
          </Button>
          <Button variant="secondary" size="sm" onClick={() => setShowELI5(!showELI5)}>
            <BrainCircuit size={14} />
            <span className="ml-2 text-[10px] text-mono">ELI5</span>
          </Button>
        </div>
      </div>

      {/* ELI5 Overlay */}
      <AnimatePresence>
        {showELI5 && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute inset-0 z-10 glass bg-accent/5 p-8 flex flex-col justify-center gap-4 text-center backdrop-blur-3xl"
          >
            <h4 className="text-accent font-mono text-xs uppercase tracking-[0.3em]">EXPLANATION_ENGINE</h4>
            <p className="text-body text-sm text-foreground/80 leading-relaxed italic">
              {/* This would be simplified abstract for non-experts */}
              Imagine you have a giant library where everything is a mess. 
              This research is about a super-smart robot that can find exactly 
              what you need by just looking at how the books are organized.
            </p>
            <Button variant="ghost" onClick={() => setShowELI5(false)} className="mx-auto text-accent">
              CLOSE_ENGINE
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};

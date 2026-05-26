"use client";

import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { motion } from "framer-motion";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut, 
  Moon, 
  Sun,
  Maximize2,
  Download,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface PDFViewerProps {
  file: string;
  onClose: () => void;
  sections?: { label: string; page: number }[];
}

export const PDFViewer = ({ file, onClose, sections = [] }: PDFViewerProps) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.2);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [isHighlighting, setIsHighlighting] = useState<boolean>(false);

  useEffect(() => {
    // Configure PDF.js worker only on client
    pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  const changePage = (offset: number) => {
    setPageNumber(prevPageNumber => Math.min(Math.max(1, prevPageNumber + offset), numPages));
  };

  const goToSection = (page: number) => {
    setPageNumber(page);
    setIsHighlighting(true);
    setTimeout(() => setIsHighlighting(false), 1500);
  };

  return (
    <div className="fixed inset-0 z-[120] bg-black/95 flex flex-col pt-16">
      {/* Top Header Controls */}
      <div className="absolute top-0 left-0 right-0 h-16 glass-hover bg-background/50 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-6 z-20">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={onClose} className="text-foreground/60 border-accent/20">
            CLOSE_LAB
          </Button>
          <div className="h-4 w-px bg-white/10" />
          <div className="flex items-center gap-2 text-mono text-[10px] text-accent">
            <Clock size={12} />
            TIME_TO_READ: ~12 MIN
          </div>
        </div>

        <div className="flex items-center gap-1 bg-surface/50 p-1 rounded-xl border border-white/5">
          <Button variant="ghost" size="sm" onClick={() => changePage(-1)} disabled={pageNumber <= 1}>
            <ChevronLeft size={16} />
          </Button>
          <span className="text-mono text-xs px-2 min-w-[80px] text-center">
            {pageNumber} / {numPages || "--"}
          </span>
          <Button variant="ghost" size="sm" onClick={() => changePage(1)} disabled={pageNumber >= numPages}>
            <ChevronRight size={16} />
          </Button>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-surface/50 p-1 rounded-xl border border-white/5 mr-2">
            <Button variant="ghost" size="sm" onClick={() => setScale(s => Math.max(0.5, s - 0.2))}>
              <ZoomOut size={16} />
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setScale(s => Math.min(2.5, s + 0.2))}>
              <ZoomIn size={16} />
            </Button>
          </div>
          <Button variant="ghost" size="sm" onClick={() => setIsDarkMode(!isDarkMode)} className="text-accent underline">
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
        </div>
      </div>

      {/* Main Viewport */}
      <div className="flex-grow overflow-auto custom-scrollbar p-8 flex justify-center bg-[#151515]">
        <div 
          className={cn(
            "transition-all duration-300 relative",
            isDarkMode && "invert brightness-90 contrast-125",
            isHighlighting && "ring-8 ring-accent/20 animate-pulse"
          )}
          style={{ 
            filter: isDarkMode ? "invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.1)" : "none" 
          }}
        >
          <Document file={file} onLoadSuccess={onDocumentLoadSuccess} loading={
            <div className="text-mono text-accent animate-pulse">INITIATING_NEURAL_LINK...</div>
          }>
            <Page 
              pageNumber={pageNumber} 
              scale={scale} 
              renderAnnotationLayer={false}
              renderTextLayer={true}
              className="shadow-2xl rounded-sm"
            />
          </Document>
        </div>
      </div>

      {/* Bottom Seek Bar */}
      <div className="h-20 glass-hover bg-background/50 backdrop-blur-xl border-t border-white/5 flex items-center px-8 shrink-0">
        <div className="w-full max-w-4xl mx-auto">
          <div className="flex justify-between mb-4">
            {sections.map((section) => (
              <button
                key={section.label}
                onClick={() => goToSection(section.page)}
                className={cn(
                  "text-[10px] text-mono transition-colors hover:text-accent",
                  pageNumber >= section.page ? "text-accent" : "text-foreground/30"
                )}
              >
                {section.label.toUpperCase()}
              </button>
            ))}
          </div>
          <div className="relative h-1 bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              className="absolute left-0 top-0 h-full bg-accent shadow-[0_0_10px_var(--accent)]"
              initial={{ width: 0 }}
              animate={{ width: `${(pageNumber / (numPages || 1)) * 100}%` }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            />
            {sections.map((section) => (
              <div 
                key={section.label}
                className="absolute w-1 h-1 bg-white/20 rounded-full top-0"
                style={{ left: `${(section.page / (numPages || 1)) * 100}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

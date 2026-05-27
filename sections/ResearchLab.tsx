"use client";

import { useState } from "react";
import { Section } from "@/components/Section";
import { ResearchCard } from "@/components/ui/ResearchCard";
import dynamic from "next/dynamic";

const PDFViewer = dynamic(
  () => import("@/components/ui/PDFViewer").then((mod) => mod.PDFViewer),
  { ssr: false }
);
import { FlaskConical, Brain, Network, Microchip, Atom } from "lucide-react";

const RESEARCH_PAPERS = [
  {
    title: "Edge-Optimized YOLOv8 Surveillance Systems",
    abstract: "Research focused on edge-optimized computer vision surveillance pipelines using YOLOv8 for efficient real-time inference.",
    contributions: [
      "Accepted among 101 papers from 2000+ submissions (ICSSCS 2026).",
      "Focused on lightweight deployment efficiency.",
      "Performance-oriented AI inference pipeline."
    ],
    tools: ["YOLOv8", "Computer Vision", "Edge AI", "Python", "OpenCV"],
    citation: "Sharma, S. (2026). Edge-Optimized YOLOv8 Surveillance Systems. ICSSCS 2026.",
    bibtex: "@inproceedings{sharma2026edge,\n  title={Edge-Optimized YOLOv8 Surveillance Systems},\n  author={Sharma, Satvik},\n  booktitle={Proceedings of the International Conference on Smart & Sustainable Computing (ICSSCS 2026)},\n  year={2026}\n}",
    file: "/edge-yolo-surveillance.pdf",
    sections: [
      { label: "Abstract", page: 1 },
      { label: "Methodology", page: 1 },
      { label: "Results", page: 1 },
      { label: "Conclusion", page: 1 }
    ]
  }
];

export const ResearchLab = () => {
  const [selectedPaper, setSelectedPaper] = useState<typeof RESEARCH_PAPERS[0] | null>(null);

  return (
    <Section id="research" className="relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Research &amp; <span className="text-accent">Publications</span></h2>
          <p className="text-body max-w-xl text-foreground/70 leading-relaxed italic border-l-2 border-accent/20 pl-4 py-1">
            Exploring practical AI systems, edge intelligence, and performance-oriented computing through research-driven engineering.
          </p>
        </div>

        <div className="flex gap-4 p-1 glass bg-white/5 rounded-2xl border-white/5">
          <div className="p-3 rounded-xl bg-accent/20 text-accent">
            <FlaskConical size={20} />
          </div>
          <div className="p-3 text-foreground/20">
            <Atom size={20} />
          </div>
          <div className="p-3 text-foreground/20">
            <Microchip size={20} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        {RESEARCH_PAPERS.map((paper) => (
          <ResearchCard 
            key={paper.title} 
            {...paper} 
            onOpen={() => setSelectedPaper(paper)} 
          />
        ))}
      </div>

      {/* Full PDF Viewer Modal */}
      {selectedPaper && (
        <PDFViewer 
          file={selectedPaper.file} 
          onClose={() => setSelectedPaper(null)} 
          sections={selectedPaper.sections}
        />
      )}



    </Section>
  );
};

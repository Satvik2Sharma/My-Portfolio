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
    title: "Augmented Reality in Neurosurgery: A Meta-Analysis",
    abstract: "A comprehensive investigation into the efficacy of AR-guided instrumentation in complex spinal procedures, focusing on accuracy gains and reduced operative time.",
    contributions: [
      "Developed a novel evaluation framework for haptic feedback loops.",
      "Identified a 23% increase in placement precision under simulated conditions.",
      "Proposed a unified standard for metadata structures in surgical AR."
    ],
    tools: ["PyTorch", "OpenCV", "Unity3D", "Hololens 2"],
    citation: "Sharma, S. (2025). AR in Neurosurgery: Precision Analysis. [Research Paper Preprint].",
    bibtex: "@article{sharma2025ar, title={AR in Neurosurgery}, author={Satvik Sharma}, journal={Preprint}, year={2025}}",
    file: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    sections: [
      { label: "Abstract", page: 1 },
      { label: "Methodology", page: 1 },
      { label: "Analysis", page: 1 },
      { label: "Conclusion", page: 1 }
    ]
  },
  {
    title: "Federated Learning for Private Health Diagnostics",
    abstract: "Exploring the trade-off between model utility and data privacy in distributed healthcare networks using differential privacy and secure aggregation.",
    contributions: [
      "Optimized communication overhead for low-bandwidth medical devices.",
      "Implemented a secure multi-party computation layer using RSA encryption.",
      "Evaluated model drift in non-IID healthcare dataset distributions."
    ],
    tools: ["TensorFlow Federated", "Python", "Kubernetes", "Redis"],
    citation: "Sharma, S. (2024). FL for Private Health Diagnostics. [Internal Research Lab].",
    bibtex: "@article{sharma2024fl, title={FL for Private Health}, author={Satvik Sharma}, journal={Internal}, year={2024}}",
    file: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    sections: [
      { label: "Abstract", page: 1 },
      { label: "Core_Loop", page: 1 },
      { label: "Evaluation", page: 1 }
    ]
  }
];

export const ResearchLab = () => {
  const [selectedPaper, setSelectedPaper] = useState<typeof RESEARCH_PAPERS[0] | null>(null);

  return (
    <Section id="research" className="relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="space-y-4">
          <p className="text-mono text-accent">RESEARCH_LAB // V2.5</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Deep <span className="text-accent">Research</span></h2>
          <p className="text-body max-w-xl text-foreground/70 leading-relaxed italic border-l-2 border-accent/20 pl-4 py-1">
            Bridging the gap between theoretical computer science and 
            real-world specialized applications.
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

      {/* Side Decorative Labels */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 text-[10px] text-mono text-foreground/20 rotate-90 origin-right tracking-[0.5em] pointer-events-none select-none uppercase">
        ACADEMIC_INTEGRITY // COGNITIVE_ANALYSIS
      </div>

    </Section>
  );
};

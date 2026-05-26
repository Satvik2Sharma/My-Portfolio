"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon, ExternalLink } from "lucide-react";

interface SkillItem {
  name: string;
  usedIn: string[];
}

interface SkillCardProps {
  title: string;
  icon: LucideIcon;
  skills: SkillItem[];
  className?: string;
}

export const SkillCard = ({ title, icon: Icon, skills, className }: SkillCardProps) => {
  return (
    <div className={cn("glass p-8 rounded-3xl flex flex-col gap-6 group hover:border-accent/20 transition-all duration-500", className)}>
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-xl bg-accent/10 text-accent group-hover:scale-110 transition-transform duration-500">
          <Icon size={22} />
        </div>
        <h3 className="text-xl font-heading font-bold tracking-tight">{title}</h3>
      </div>

      <div className="space-y-6">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground/90">{skill.name}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {skill.usedIn.map((project) => (
                <div 
                  key={project}
                  className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[9px] text-mono text-foreground/40 flex items-center gap-1.5"
                >
                  <span className="w-1 h-1 rounded-full bg-accent/40" />
                  {project.toUpperCase()}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 p-4 opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] transition-opacity">
        <Icon size={120} />
      </div>
    </div>
  );
};

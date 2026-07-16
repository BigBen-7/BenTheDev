"use client";

import {
  TbBrandTypescript,
  TbBrandNextjs,
  TbBrandReactNative,
} from "react-icons/tb";
import { FaReact, FaGitAlt } from "react-icons/fa";
import { SiNestjs, SiPostgresql, SiRust, SiTailwindcss, SiVite, SiGooglechrome } from "react-icons/si";

const techStack = [
  { icon: TbBrandTypescript, label: "TypeScript" },
  { icon: FaReact, label: "React" },
  { icon: TbBrandNextjs, label: "Next.js" },
  { icon: SiNestjs, label: "NestJS" },
  { icon: TbBrandReactNative, label: "React Native" },
  { icon: SiPostgresql, label: "PostgreSQL" },
  { icon: SiRust, label: "Rust" },
  { icon: SiTailwindcss, label: "Tailwind" },
  { icon: FaGitAlt, label: "Git" },
  { icon: SiVite, label: "Vite" },
  { icon: SiGooglechrome, label: "Chrome MV3" },
];

function MarqueeTrack({ reverse = false }: { reverse?: boolean }) {
  const items = [...techStack, ...techStack];
  return (
    <div
      className={`flex w-max gap-3 ${
        reverse ? "animate-marquee-reverse" : "animate-marquee"
      }`}
    >
      {items.map((tech, i) => (
        <div
          key={i}
          className="flex items-center gap-2 rounded-lg border border-border/50 bg-background/60 px-3.5 py-2 backdrop-blur-sm whitespace-nowrap"
        >
          <tech.icon className="h-3.5 w-3.5 text-primary shrink-0" />
          <span className="text-xs font-medium text-muted-foreground">
            {tech.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export function TechMarquee() {
  return (
    <div className="space-y-3 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="overflow-hidden">
        <MarqueeTrack />
      </div>
      <div className="overflow-hidden">
        <MarqueeTrack reverse />
      </div>
    </div>
  );
}

import { Calendar, Mail } from "lucide-react";
import {
  TbBrandNextjs,
  TbBrandTypescript,
  TbBrandReactNative,
} from "react-icons/tb";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { SiNestjs, SiPostgresql, SiRust, SiTailwindcss } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { ResumeModal } from "@/components/resume-modal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const techGroups = [
  {
    label: "Languages",
    items: [
      { icon: TbBrandTypescript, name: "TypeScript", color: "text-blue-400" },
      { icon: SiRust, name: "Rust", color: "text-orange-400" },
    ],
  },
  {
    label: "Frameworks",
    items: [
      { icon: FaReact, name: "React", color: "text-cyan-400" },
      { icon: TbBrandNextjs, name: "Next.js", color: "text-foreground" },
      { icon: SiNestjs, name: "NestJS", color: "text-red-400" },
      { icon: TbBrandReactNative, name: "React Native", color: "text-cyan-400" },
    ],
  },
  {
    label: "Tools & DB",
    items: [
      { icon: SiPostgresql, name: "PostgreSQL", color: "text-sky-400" },
      { icon: SiTailwindcss, name: "Tailwind", color: "text-teal-400" },
      { icon: FaGitAlt, name: "Git", color: "text-orange-500" },
      { icon: FaGithub, name: "GitHub", color: "text-foreground" },
    ],
  },
];

const experience = [
  {
    title: "Freelance Developer",
    org: "Independent · Remote",
    period: "Active · 2026",
    color: "teal",
    dot: "bg-teal-500",
    badge: "bg-teal-500/10 border-teal-500/20 text-teal-500",
    periodIcon: null,
    desc: null,
    items: [
      { label: "Lmart", labelColor: "text-blue-500 dark:text-blue-400", text: "Electronics inventory system (Next.js frontend); per-unit stock tracking, BNPL credits, consignment, profit reporting." },
      { label: "Enechambs", labelColor: "text-green-600 dark:text-green-400", text: "Full-stack foodstuff inventory (Next.js + NestJS + PostgreSQL).", link: { href: "/projects?tab=freelance", text: "View case study" } },
    ],
  },
  {
    title: "Open Source Contributor",
    org: "OnlyDust Platform & Ecosystem · Remote",
    period: "Active · 2022 – Present",
    color: "primary",
    dot: "bg-primary",
    badge: "bg-green-500/10 border-green-500/20 text-green-500",
    periodIcon: null,
    desc: "Shipped across 15+ projects in blockchain, infrastructure, and dev tooling via the OnlyDust platform. Led full-stack development on Veritix with NestJS and Next.js.",
    items: null,
  },
  {
    title: "Frontend Training Program",
    org: "Leadway Insurance Company Ltd. · Kaduna, Nigeria",
    period: "04/2024 – 10/2024",
    color: "blue",
    dot: "bg-blue-500",
    badge: "bg-blue-500/10 border-blue-500/20 text-blue-500",
    periodIcon: true,
    desc: "Completed a 6-month frontend development program. Built dynamic apps including Feedback App and GitHub Finder. Led a team of 7 on Shepherd and a referral app management system.",
    items: null,
  },
  {
    title: "Volunteer Frontend Mentor",
    org: "Code for Africa · Remote",
    period: "03/2023 – 11/2023",
    color: "violet",
    dot: "bg-violet-500",
    badge: "bg-violet-500/10 border-violet-500/20 text-violet-500",
    periodIcon: true,
    desc: "Mentored aspiring developers through weekly virtual sessions. Guided 5+ students through building their first React apps. Created learning resources and conducted code reviews.",
    items: null,
  },
  {
    title: "Intern",
    org: "Ihifix Digital Academy · Kaduna, Nigeria",
    period: "02/2022 – 12/2022",
    color: "amber",
    dot: "bg-amber-500",
    badge: "bg-amber-500/10 border-amber-500/20 text-amber-500",
    periodIcon: true,
    desc: "Contributed to UI design and web application development. Built responsive layouts with HTML, CSS, and JavaScript. Debugged code, collaborated with designers, and optimized web performance.",
    items: null,
  },
];

export function AboutContent() {
  return (
    <div className="space-y-7">

      {/* ── Profile header ─────────────────────────────── */}
      <div className="relative overflow-hidden rounded-xl border border-border">
        {/* banner gradient */}
        <div className="h-24 w-full bg-gradient-to-br from-primary/30 via-primary/10 to-transparent" />
        {/* avatar — overlapping the banner */}
        <div className="px-5 pb-5">
          <div className="-mt-12 flex items-end justify-between gap-4 flex-wrap">
            <div className="h-20 w-20 rounded-full overflow-hidden ring-4 ring-background shadow-lg shrink-0">
              <Image
                src="/Benard.png"
                alt="Benard Simon"
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
            <ResumeModal className="shrink-0" />
          </div>
          <div className="mt-3 space-y-0.5">
            <h2 className="text-xl font-bold leading-tight">Benard Simon</h2>
            <p className="text-sm text-primary font-medium">
              Software Engineer · Mobile & Web · OSS Contributor
            </p>
          </div>
          {/* social links */}
          <div className="mt-4 flex gap-2">
            <Button variant="outline" size="icon" className="h-8 w-8" asChild>
              <Link href="https://github.com/BigBen-7" target="_blank" rel="noopener noreferrer">
                <FaGithub className="h-3.5 w-3.5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8" asChild>
              <Link href="https://www.linkedin.com/in/benard-simon-181413244" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="h-3.5 w-3.5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8" asChild>
              <Link href="mailto:benardsimon7@gmail.com">
                <Mail className="h-3.5 w-3.5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* ── About bio ──────────────────────────────────── */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-primary text-base">About Benard<span className="text-primary">.</span></CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
          <p>
            Software Engineer focused on building fast, accessible, and
            well-crafted web and mobile experiences. I work across the full
            stack — from architecture and component design to performance and
            polish — with a strong bias toward shipping things that actually
            feel good to use.
          </p>
          <p>
            Outside of personal projects, I actively contribute to open-source
            across the Starknet, Stellar, and Worldcoin ecosystems, focusing on
            UI, developer experience, and frontend infrastructure.
          </p>
        </CardContent>
      </Card>

      {/* ── Technologies ───────────────────────────────── */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Technologies</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {techGroups.map((group) => (
            <div key={group.label}>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2.5">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map(({ icon: Icon, name, color }) => (
                  <div
                    key={name}
                    className="flex items-center gap-1.5 rounded-lg border border-border/60 bg-muted/40 px-2.5 py-1.5"
                  >
                    <Icon className={`h-3.5 w-3.5 shrink-0 ${color}`} />
                    <span className="text-xs font-medium">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* ── Experience timeline ────────────────────────── */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Experience</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative space-y-0">
            {/* vertical line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" aria-hidden />

            {experience.map((exp, i) => (
              <div key={i} className="relative pl-7 pb-6 last:pb-0">
                {/* dot */}
                <div className={`absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-background ${exp.dot} shrink-0`} />

                <div className={`rounded-xl border border-${exp.color}-500/20 bg-${exp.color}-500/5 p-3.5 relative overflow-hidden`}>
                  <div className={`absolute top-0 left-0 w-1 h-full bg-${exp.color === "primary" ? "primary" : exp.color + "-500"} rounded-l-xl`} />
                  <div className="pl-2 space-y-2">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="font-semibold text-sm">{exp.title}</h3>
                        <p className="text-xs text-muted-foreground">{exp.org}</p>
                      </div>
                      <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold shrink-0 ${exp.badge}`}>
                        {exp.periodIcon && <Calendar className="h-2.5 w-2.5" />}
                        {!exp.periodIcon && (
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-current" />
                          </span>
                        )}
                        {exp.period}
                      </span>
                    </div>

                    {exp.desc && (
                      <p className="text-xs text-muted-foreground leading-relaxed">{exp.desc}</p>
                    )}

                    {exp.items && (
                      <ul className="space-y-1.5 mt-1">
                        {exp.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <span className={`font-medium ${item.labelColor}`}>{item.label}</span>
                            <span>— {item.text}</span>
                            {item.link && (
                              <Link
                                href={item.link.href}
                                className="inline-flex items-center gap-1 text-[10px] font-medium text-primary hover:underline whitespace-nowrap"
                              >
                                {item.link.text} ↗
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

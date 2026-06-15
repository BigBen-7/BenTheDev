import { Calendar, FileCode, Mail } from "lucide-react";
import {
  TbBrandNextjs,
  TbBrandTypescript,
  TbBrandReactNative,
} from "react-icons/tb";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { SiNestjs, SiPostgresql } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { ResumeModal } from "@/components/resume-modal";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export function AboutContent() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <div className="mx-auto h-32 w-32 overflow-hidden rounded-full bg-primary/10 flex items-center justify-center">
            <Image
              src="/Benard.png"
              alt="Ben"
              width={200}
              height={200}
              className="object-cover"
            />
          </div>
          <CardTitle className="text-center text-6xl mt-4">Benard</CardTitle>
          <CardDescription className="text-center text-primary">
            Software Engineer{" "}
            <span className="font-extrabold text-white">|</span> Mobile &amp; Web{" "}
            <span className="font-extrabold text-white">|</span> OpenSource Contributor
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-center gap-2">
            <Button variant="outline" size="icon" asChild>
              <Link
                href="https://github.com/BigBen-7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link
                href="https://www.linkedin.com/in/benard-simon-181413244"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="mailto:benardsimon7@gmail.com">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
          <div className="text-center">
            <ResumeModal className="w-full" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-primary">About Benard<span className="text-primary">.</span></CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm">
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

      {/* Technologies */}
      <Card>
        <CardHeader>
          <CardTitle>Technologies</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-sm font-medium mb-2">Languages</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>
                <FileCode className="w-3 h-3" /> JavaScript
              </Badge>
              <Badge>
                <TbBrandTypescript /> TypeScript
              </Badge>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>
                <FaReact />
                React
              </Badge>
              <Badge>
                <TbBrandNextjs />
                Next.js
              </Badge>
              <Badge>
                <SiNestjs />
                NestJs
              </Badge>
              <Badge>
                <TbBrandReactNative />
                React Native
              </Badge>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Databases</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>
                <SiPostgresql />
                PostgreSQL
              </Badge>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Version Control</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>
                <FaGitAlt />
                Git
              </Badge>
              <Badge>
                <FaGithub />
                GitHub
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Experience */}
      <Card>
        <CardHeader>
          <CardTitle>Experience</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">

          {/* Freelance Developer */}
          <div className="rounded-xl border border-teal-500/20 bg-teal-500/5 p-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-teal-500 rounded-l-xl" />
            <div className="pl-3 space-y-2">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-sm">Freelance Developer</h3>
                  <p className="text-xs text-muted-foreground">Independent · Remote</p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-teal-500/10 border border-teal-500/20 px-2.5 py-0.5 text-[10px] font-semibold text-teal-500">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-teal-500" />
                  </span>
                  Active · 2026
                </span>
              </div>
              <ul className="space-y-1.5 mt-1">
                <li className="flex items-start gap-2 text-xs text-muted-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="18" height="18" className="shrink-0 mt-0.5 rounded-[4px]">
                    <rect width="32" height="32" rx="7" fill="#2563EB"/>
                    <text x="16" y="22" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif" fontSize="14" fontWeight="700" fill="white" letterSpacing="-0.5">Lp</text>
                  </svg>
                  <span><span className="font-medium text-blue-600 dark:text-blue-400">Lmart</span> — Electronics inventory system (Next.js frontend); per-unit stock tracking, BNPL credits, consignment, profit reporting.</span>
                </li>
                <li className="flex items-start gap-2 text-xs text-muted-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none" width="18" height="18" className="shrink-0 mt-0.5 rounded-[4px]">
                    <defs>
                      <linearGradient id="enechambs-bg" x1="0" y1="0" x2="1" y2="1">
                        <stop stopColor="#1a9155"/>
                        <stop offset="1" stopColor="#0b3d22"/>
                      </linearGradient>
                    </defs>
                    <rect width="40" height="40" rx="9" fill="url(#enechambs-bg)"/>
                    <rect x="9" y="7" width="3.5" height="27" rx="1.75" fill="white"/>
                    <path d="M9 7H22C25 7 27 8.6 27 10.5C27 12.4 25 14 22 14H9V7Z" fill="white"/>
                    <path d="M9 18H18C20.8 18 22.5 19.3 22.5 21C22.5 22.7 20.8 24 18 24H9V18Z" fill="white"/>
                    <path d="M9 27H22C25 27 27 28.6 27 30.5C27 32.4 25 34 22 34H9V27Z" fill="white"/>
                    <circle cx="27" cy="10.5" r="2.2" fill="#a3f0c0" fillOpacity="0.9"/>
                    <circle cx="22.5" cy="21" r="1.8" fill="#a3f0c0" fillOpacity="0.8"/>
                    <circle cx="27" cy="30.5" r="2.2" fill="#a3f0c0" fillOpacity="0.9"/>
                  </svg>
                  <span className="flex flex-col gap-1">
                    <span><span className="font-medium text-green-600 dark:text-green-400">Enechambs</span> — Full-stack foodstuff inventory (Next.js + NestJS + PostgreSQL).</span>
                    <Link
                      href="/projects?tab=freelance"
                      className="inline-flex items-center gap-1 text-[10px] font-medium text-primary hover:underline"
                    >
                      View project details
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                    </Link>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Open Source Contributor */}
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-l-xl" />
            <div className="pl-3 space-y-2">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-sm">Open Source Contributor</h3>
                  <p className="text-xs text-muted-foreground">OnlyDust Platform & Ecosystem · Remote</p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-green-500/10 border border-green-500/20 px-2.5 py-0.5 text-[10px] font-semibold text-green-500">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                  </span>
                  Active · 2022 – Present
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Shipped across 15+ projects in the blockchain, infrastructure, and dev tooling space via the OnlyDust platform. Led full-stack development on Veritix with NestJS and Next.js.
              </p>
            </div>
          </div>

          {/* Frontend Training */}
          <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 rounded-l-xl" />
            <div className="pl-3 space-y-2">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-sm">Frontend Training Program</h3>
                  <p className="text-xs text-muted-foreground">Leadway Insurance Company Ltd. · Kaduna, Nigeria</p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 text-[10px] font-semibold text-blue-500">
                  <Calendar className="h-2.5 w-2.5" />
                  04/2024 – 10/2024
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Completed a 6-month frontend development program. Built dynamic apps including Feedback App and GitHub Finder. Led a team of 7 on Shepherd and a referral app management system.
              </p>
            </div>
          </div>

          {/* Volunteer Mentor */}
          <div className="rounded-xl border border-violet-500/20 bg-violet-500/5 p-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-violet-500 rounded-l-xl" />
            <div className="pl-3 space-y-2">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-sm">Volunteer Frontend Mentor</h3>
                  <p className="text-xs text-muted-foreground">Code for Africa · Remote</p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-violet-500/10 border border-violet-500/20 px-2.5 py-0.5 text-[10px] font-semibold text-violet-500">
                  <Calendar className="h-2.5 w-2.5" />
                  03/2023 – 11/2023
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Mentored aspiring developers through weekly virtual sessions. Guided 5+ students through building their first React apps. Created learning resources and conducted code reviews.
              </p>
            </div>
          </div>

          {/* Intern */}
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-amber-500 rounded-l-xl" />
            <div className="pl-3 space-y-2">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-sm">Intern</h3>
                  <p className="text-xs text-muted-foreground">Ihifix Digital Academy · Kaduna, Nigeria</p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 text-[10px] font-semibold text-amber-500">
                  <Calendar className="h-2.5 w-2.5" />
                  02/2022 – 12/2022
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Contributed to UI design and web application development. Built responsive layouts with HTML, CSS, and JavaScript. Debugged code, collaborated with designers, and optimized web performance.
              </p>
            </div>
          </div>

        </CardContent>
      </Card>
    </div>
  );
}

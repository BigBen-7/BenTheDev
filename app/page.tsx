"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  GitMerge,
  Music,
  Chrome,
} from "lucide-react";
import { SiRust } from "react-icons/si";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { SlidePanel } from "@/components/slide-panel";
import { AboutContent } from "@/components/about-content";
import { ContactContent } from "@/components/contact-content";

export default function Home() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* ── Nav ───────────────────────────────────────────── */}
      <header className="sticky top-0 z-10 w-full nav-glass">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" width="28" height="28" className="shrink-0">
                <defs>
                  <radialGradient id="nav-warm" cx="78%" cy="78%" r="65%">
                    <stop offset="0%" stopColor="#FF4400" stopOpacity="0.14"/>
                    <stop offset="100%" stopColor="#FF4400" stopOpacity="0"/>
                  </radialGradient>
                  <radialGradient id="nav-glow-outer" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FF4400" stopOpacity="0.28"/>
                    <stop offset="100%" stopColor="#FF4400" stopOpacity="0"/>
                  </radialGradient>
                  <radialGradient id="nav-glow-inner" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FF6633" stopOpacity="0.65"/>
                    <stop offset="100%" stopColor="#FF4400" stopOpacity="0"/>
                  </radialGradient>
                </defs>
                <rect width="32" height="32" rx="7" fill="#0d0d14"/>
                <rect width="32" height="32" rx="7" fill="url(#nav-warm)"/>
                <circle cx="15" cy="19" r="7" fill="white"/>
                <circle cx="15" cy="19" r="3.4" fill="#0d0d14"/>
                <rect x="0" y="12" width="9" height="14" fill="#0d0d14"/>
                <rect x="5" y="5" width="4" height="21" rx="2" fill="white"/>
                <circle cx="25" cy="25" r="7.5" fill="url(#nav-glow-outer)"/>
                <circle cx="25" cy="25" r="4.5" fill="url(#nav-glow-inner)"/>
                <circle cx="25" cy="25" r="2.6" fill="#FF4400"/>
                <circle cx="24.1" cy="24.1" r="0.85" fill="#FF8855" fillOpacity="0.85"/>
              </svg>
            </Link>
          </div>
          <nav className="flex items-center gap-6 text-sm">
            <Link
              href="/projects"
              className="font-medium transition-colors hover:text-foreground/80"
            >
              Projects
            </Link>
            <button
              onClick={() => setIsContactOpen(true)}
              className="font-medium px-3 py-1.5 rounded-md border border-primary/20 text-primary transition-all hover:bg-primary/10"
            >
              Contact
            </button>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container">

        {/* ── Hero ──────────────────────────────────────────── */}
        <section className="relative pb-12 md:pb-16 lg:py-14">
          {/* subtle grid backdrop */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black_50%,transparent_100%)]
              bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)]
              bg-[size:3rem_3rem] opacity-30"
          />

          <div className="flex flex-col items-start gap-8 md:flex-row md:justify-between">
            {/* Left — text */}
            <div className="space-y-6 md:max-w-[60%]">
              <div className="space-y-3 animate-fade-in-up-d1">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Benard Simon<span className="text-primary">.</span>
                </h1>
                <p className="text-xl font-medium text-muted-foreground">
                  <span className="text-primary font-semibold">Software Engineer</span>
                </p>
              </div>

              <p className="animate-fade-in-up-d2 max-w-[560px] text-muted-foreground md:text-base leading-relaxed">
                I build web and mobile apps that are a pleasure to use — crafting
                beautiful interfaces with meaningful transitions and thoughtful
                interactions. When I&apos;m not shipping products, I contribute to
                open source.
              </p>

              <div className="animate-fade-in-up-d3 flex flex-wrap gap-4">
                <Button onClick={() => setIsAboutOpen(true)} className="flex items-center">
                  About Me <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setIsContactOpen(true)}
                  className="transition-all hover:text-primary"
                >
                  Contact Me
                </Button>
              </div>

            </div>

            {/* Right — profile card */}
            <div className="w-full md:w-auto mt-8 md:mt-0 animate-fade-in-up-d2">
              <Card className="flex flex-col gap-2 min-w-[240px] rounded-xl p-6 liquid-glass">
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden ring-2 ring-primary/20">
                    <Image
                      src="/Benard.png"
                      alt="Benard"
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">Benard Simon</h3>
                    <p className="text-xs text-muted-foreground">
                      Kaduna, Nigeria · WAT (UTC+1)
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex gap-4 justify-center">
                  <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                    <Link href="https://github.com/BigBen-7" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                    <Link href="https://www.linkedin.com/in/benard-simon-181413244" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                    <Link href="mailto:benardsimon7@gmail.com">
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Email</span>
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* ── Featured Projects — Bento Grid ────────────────── */}
        <section className="space-y-6 py-8 md:py-12">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Featured Projects
              </h2>
              <p className="text-muted-foreground">
                Some of my recent work and open-source contributions.
              </p>
            </div>
            <Button variant="ghost" asChild className="ml-auto hidden sm:flex">
              <Link href="/projects" className="flex items-center">
                View all <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Bento */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[190px]">

            {/* ── dormant — 2×2 hero cell ── */}
            <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-2xl border border-border/60 liquid-glass transition-all duration-300 ease-out hover:scale-[1.01] hover:shadow-2xl hover:border-primary/40 cursor-pointer">
              {/* gradient layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/12 via-primary/4 to-transparent pointer-events-none" />
              {/* dot grid */}
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none opacity-[0.12] [mask-image:radial-gradient(ellipse_at_top_left,black_20%,transparent_70%)]
                  bg-[radial-gradient(hsl(var(--foreground))_1px,transparent_1px)] bg-[size:18px_18px]"
              />
              <div className="relative z-10 flex h-full flex-col md:flex-row">

                {/* Left — info */}
                <div className="flex flex-col flex-1 p-6 sm:p-7">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/20">
                      <Chrome className="h-5 w-5 text-primary" />
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-green-500/25 bg-green-500/10 px-3 py-1 text-[10px] font-semibold text-green-500">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                      </span>
                      Live on Chrome Web Store
                    </span>
                  </div>
                  <div className="mt-auto space-y-3">
                    <div>
                      <h3 className="text-3xl font-bold tracking-tight">dormant</h3>
                      <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed max-w-sm">
                        Chrome extension that auto-suspends inactive tabs to reclaim RAM —
                        live popup, domain whitelisting, zero telemetry.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {["TypeScript", "React", "Chrome MV3", "Vite"].map(t => (
                        <Badge key={t} variant="secondary" className="rounded-md text-xs">{t}</Badge>
                      ))}
                    </div>
                    <div className="flex gap-2 pt-1">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/projects" className="flex items-center gap-1.5">
                          View Project <ArrowRight className="h-3 w-3" />
                        </Link>
                      </Button>
                      <Button size="sm" asChild>
                        <Link href="https://chromewebstore.google.com/detail/dormant/pipmpmbmfbbfcfibbpdljkemldnnkike" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                          Install <ExternalLink className="h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Right — extension popup mockup */}
                <div className="hidden md:flex items-center justify-center px-4 pb-6 pt-4 md:w-[42%]">
                  <div className="w-full max-w-[210px] rounded-xl border border-border/50 bg-background/90 backdrop-blur-sm shadow-2xl overflow-hidden ring-1 ring-primary/10 group-hover:ring-primary/25 transition-all duration-300">
                    {/* Browser chrome bar */}
                    <div className="flex items-center gap-1.5 px-3 py-2 bg-muted/60 border-b border-border/50">
                      <div className="h-2 w-2 rounded-full bg-red-400/60" />
                      <div className="h-2 w-2 rounded-full bg-yellow-400/60" />
                      <div className="h-2 w-2 rounded-full bg-green-400/60" />
                      <div className="flex-1 ml-1.5 h-4 rounded bg-background/60 border border-border/40 flex items-center px-2 gap-1">
                        <Chrome className="h-2 w-2 text-muted-foreground/50 shrink-0" />
                        <span className="text-[7px] text-muted-foreground/40 truncate">chrome-extension://dormant</span>
                      </div>
                    </div>
                    {/* Popup UI */}
                    <div className="p-3.5 space-y-3">
                      <div className="flex items-center gap-2">
                        <Chrome className="h-3.5 w-3.5 text-primary shrink-0" />
                        <span className="text-[11px] font-bold flex-1">dormant</span>
                        <span className="text-[9px] text-green-500 font-semibold">● on</span>
                      </div>
                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-1.5">
                        <div className="rounded-lg bg-primary/8 border border-primary/15 p-2 text-center">
                          <p className="text-xl font-bold text-primary leading-none">3</p>
                          <p className="text-[8px] text-muted-foreground mt-0.5">tabs slept</p>
                        </div>
                        <div className="rounded-lg bg-green-500/8 border border-green-500/15 p-2 text-center">
                          <p className="text-xl font-bold text-green-500 leading-none">214</p>
                          <p className="text-[8px] text-muted-foreground mt-0.5">MB freed</p>
                        </div>
                      </div>
                      {/* Suspended tab rows */}
                      <div className="space-y-1.5">
                        {[
                          { domain: "reddit.com", emoji: "🔴" },
                          { domain: "youtube.com", emoji: "📺" },
                          { domain: "twitter.com", emoji: "🐦" },
                        ].map(({ domain, emoji }) => (
                          <div key={domain} className="flex items-center gap-1.5 rounded-md bg-muted/50 border border-border/40 px-2 py-1.5">
                            <span className="text-[9px] shrink-0">{emoji}</span>
                            <span className="text-[9px] text-muted-foreground flex-1 truncate">{domain}</span>
                            <span className="text-[8px] text-primary/60 font-medium shrink-0">💤</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── fineTunes — top right ── */}
            <div className="group relative overflow-hidden rounded-2xl border border-border/60 liquid-glass transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-xl hover:border-violet-500/40 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-teal-500/5 to-transparent pointer-events-none" />
              {/* Waveform decoration */}
              <div className="absolute bottom-0 inset-x-0 h-16 opacity-[0.18] pointer-events-none">
                <svg viewBox="0 0 200 56" preserveAspectRatio="none" className="w-full h-full">
                  {[8,14,22,18,30,24,35,28,20,32,38,26,40,32,22,36,42,28,16,34,38,22,30,26,18,32,24,20,28,14,22,18,30,10,24,18,26,14,20,16].map((h, i) => (
                    <rect key={i} x={i * 5} y={56 - h} width="3" height={h} rx="1.5" fill="#a78bfa" />
                  ))}
                </svg>
              </div>
              <div className="relative z-10 flex flex-col h-full p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/15 ring-1 ring-violet-500/20">
                    <Music className="h-4 w-4 text-violet-400" />
                  </div>
                  <Badge variant="outline" className="text-[10px] border-violet-500/30 text-violet-400 rounded-full">
                    AI-powered
                  </Badge>
                </div>
                <h3 className="text-xl font-bold">fineTunes</h3>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed flex-1">
                  Music discovery dashboard + AI playlist generation via Spotify &amp; Gemini APIs.
                </p>
                <div className="flex gap-2 mt-3">
                  <Button size="sm" variant="outline" className="text-xs h-7 px-2.5" asChild>
                    <Link href="/projects" className="flex items-center gap-1">Details <ArrowRight className="h-2.5 w-2.5" /></Link>
                  </Button>
                  <Button size="sm" className="text-xs h-7 px-2.5 bg-violet-600 hover:bg-violet-500 text-white border-0" asChild>
                    <Link href="https://fine-tunes.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">Demo <ExternalLink className="h-2.5 w-2.5" /></Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* ── Regain+ — bottom right ── */}
            <div className="group relative overflow-hidden rounded-2xl border-2 border-dashed border-primary/25 transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-xl hover:border-primary/45 cursor-pointer" style={{ background: "hsl(var(--primary)/0.04)" }}>
              <div className="absolute inset-0 bg-gradient-to-tl from-primary/10 via-transparent to-transparent pointer-events-none" />
              <div className="relative z-10 flex flex-col h-full p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/20 text-base">
                    🔁
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full border border-dashed border-primary/40 bg-primary/8 px-2.5 py-0.5 text-[9px] font-bold tracking-widest text-primary uppercase">
                    Coming Soon
                  </span>
                </div>
                <h3 className="text-xl font-bold">Regain+</h3>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed flex-1">
                  21-day habit-replacement mobile app. Break addictions with daily intentional actions &amp; streak tracking.
                </p>
                <div className="flex flex-wrap gap-1 mt-3">
                  {["React Native", "NestJS"].map(t => (
                    <Badge key={t} variant="secondary" className="text-[10px] rounded-md">{t}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center sm:hidden mt-2">
            <Button asChild>
              <Link href="/projects" className="flex items-center">
                View all projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>


        {/* ── Open Source — Grouped by Repo ─────────────────── */}
        <section className="space-y-6 py-8 md:py-12">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Open Source
              </h2>
              <p className="text-muted-foreground">
                Rust backend contributions to the Stellar ecosystem via OnlyDust.
              </p>
            </div>
            <Button variant="ghost" asChild className="ml-auto hidden sm:flex">
              <Link href="/projects?tab=oss" className="flex items-center">
                View all <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="space-y-3">

            {/* ── stellar-fee-tracker ── */}
            <div className="overflow-hidden rounded-2xl border border-amber-500/20">
              {/* repo header */}
              <div className="flex items-center gap-3 px-4 py-3 bg-amber-500/5 border-b border-amber-500/15">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-amber-500/15">
                  <SiRust className="h-3.5 w-3.5 text-amber-500" />
                </div>
                <div className="flex items-center gap-1.5 min-w-0 flex-1">
                  <span className="text-xs text-muted-foreground font-medium">StellarCommons</span>
                  <span className="text-muted-foreground/40">/</span>
                  <span className="text-sm font-bold truncate">stellar-fee-tracker</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 text-[10px] font-semibold text-amber-500">
                    <GitMerge className="h-2.5 w-2.5" /> 4 merged
                  </span>
                  <Link href="https://github.com/StellarCommons/stellar-fee-tracker" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
              {/* contribution rows */}
              <div className="divide-y divide-border/50">
                {[
                  { what: "Built Horizon client trait methods", stack: ["Rust", "Stellar SDK"], type: "feat" },
                  { what: "Scaffolded devkit with harness & simulation modules", stack: ["Rust", "Cargo Workspaces"], type: "feat" },
                  { what: "Fixed FeeRepository ownership issues + hardened webhook delivery", stack: ["Rust", "Axum"], type: "fix" },
                  { what: "Refactored fee statistics domain model to idiomatic Rust", stack: ["Rust"], type: "refactor" },
                ].map((c, i) => (
                  <div key={i} className="flex items-start gap-3 px-4 py-3 hover:bg-amber-500/5 transition-colors">
                    <span className={`mt-0.5 shrink-0 rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide ${
                      c.type === "feat" ? "bg-green-500/15 text-green-500" :
                      c.type === "fix"  ? "bg-red-500/15 text-red-400" :
                                          "bg-blue-500/15 text-blue-400"
                    }`}>{c.type}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm leading-snug">{c.what}</p>
                      <div className="flex flex-wrap gap-1 mt-1.5">
                        {c.stack.map(s => (
                          <Badge key={s} variant="secondary" className="text-[10px] rounded-md px-1.5 py-0">{s}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── stellar-explain ── */}
            <div className="overflow-hidden rounded-2xl border border-sky-500/20">
              <div className="flex items-center gap-3 px-4 py-3 bg-sky-500/5 border-b border-sky-500/15">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-sky-500/15">
                  <SiRust className="h-3.5 w-3.5 text-sky-400" />
                </div>
                <div className="flex items-center gap-1.5 min-w-0 flex-1">
                  <span className="text-xs text-muted-foreground font-medium">StellarCommons</span>
                  <span className="text-muted-foreground/40">/</span>
                  <span className="text-sm font-bold truncate">stellar-explain</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="inline-flex items-center gap-1 rounded-full bg-sky-500/10 border border-sky-500/20 px-2.5 py-0.5 text-[10px] font-semibold text-sky-400">
                    <GitMerge className="h-2.5 w-2.5" /> 2 merged
                  </span>
                  <Link href="https://github.com/StellarCommons/stellar-explain" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
              <div className="divide-y divide-border/50">
                {[
                  { what: "Wired Horizon memo deserialization and network config into core startup", stack: ["Rust", "Serde", "Axum"], type: "feat" },
                  { what: "Integrated CORS middleware into the Rust core server", stack: ["Rust", "Axum", "CORS"], type: "feat" },
                ].map((c, i) => (
                  <div key={i} className="flex items-start gap-3 px-4 py-3 hover:bg-sky-500/5 transition-colors">
                    <span className="mt-0.5 shrink-0 rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide bg-green-500/15 text-green-500">{c.type}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm leading-snug">{c.what}</p>
                      <div className="flex flex-wrap gap-1 mt-1.5">
                        {c.stack.map(s => (
                          <Badge key={s} variant="secondary" className="text-[10px] rounded-md px-1.5 py-0">{s}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center sm:hidden">
            <Button asChild>
              <Link href="/projects?tab=oss" className="flex items-center">
                View all contributions <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer className="border-t">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © {new Date().getFullYear()} Benard Simon. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/BigBen-7" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/benard-simon-181413244" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:benardsimon7@gmail.com">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>

      {/* ── Slide Panels ────────────────────────────────────── */}
      <SlidePanel isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} title="About Me">
        <AboutContent />
      </SlidePanel>
      <SlidePanel isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} title="Contact Me">
        <ContactContent />
      </SlidePanel>
    </div>
  );
}

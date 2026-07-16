"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, GitMerge, Package, ShoppingCart, BarChart3, Clock, ChevronRight, Zap, Shield, Globe, Chrome, Music, Repeat } from "lucide-react";
import { SiRust } from "react-icons/si";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SlidePanel } from "@/components/slide-panel";

function ProjectsContent() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");
  const defaultTab = tab === "oss" ? "oss" : tab === "freelance" ? "freelance" : "projects";
  const [enechambsOpen, setEnechambsOpen] = useState(false);

  return (
    <div className="container py-12">
      {/* ── Page header ──────────────────────────────────── */}
      <div className="relative mb-10 overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-primary/5 via-transparent to-transparent p-6 md:p-8">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10
            bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)]
            bg-[size:2rem_2rem] opacity-20"
        />
        <Link
          href="/"
          className="mb-4 inline-flex items-center text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="mr-1.5 h-3.5 w-3.5" />
          Back to home
        </Link>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Projects
        </h1>
        <p className="mt-1 text-muted-foreground">
          A collection of my work, side projects, and open-source contributions.
        </p>
      </div>

      <Tabs defaultValue={defaultTab}>
        <TabsList className="mb-8 h-auto p-1 gap-1">
          <TabsTrigger value="projects" className="rounded-md px-4 py-2 text-sm">Projects</TabsTrigger>
          <TabsTrigger value="freelance" className="rounded-md px-4 py-2 text-sm">Freelance</TabsTrigger>
          <TabsTrigger value="oss" className="rounded-md px-4 py-2 text-sm">Open Source</TabsTrigger>
        </TabsList>

        {/* ── PROJECTS TAB ─────────────────────────────────── */}
        <TabsContent value="projects" className="space-y-6">

          {/* ── dormant — browser-window card ── */}
          <div className="group relative overflow-hidden rounded-2xl border border-border/60 liquid-glass transition-all duration-300 hover:shadow-2xl hover:border-primary/30">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/6 via-transparent to-transparent pointer-events-none" />

            {/* Browser chrome bar — card looks like a browser window */}
            <div className="relative flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border/50">
              <div className="flex gap-1.5 shrink-0">
                <div className="h-3 w-3 rounded-full bg-red-400/60" />
                <div className="h-3 w-3 rounded-full bg-yellow-400/60" />
                <div className="h-3 w-3 rounded-full bg-green-400/60" />
              </div>
              <div className="flex-1 mx-2 h-6 rounded-md bg-background/60 border border-border/50 flex items-center gap-2 px-3 min-w-0">
                <Chrome className="h-3 w-3 text-primary/50 shrink-0" />
                <span className="text-[11px] text-muted-foreground/50 truncate">chrome-extension://dormant/popup.html</span>
              </div>
              <span className="inline-flex items-center gap-1.5 shrink-0 rounded-full border border-green-500/25 bg-green-500/10 px-2.5 py-1 text-[10px] font-semibold text-green-500">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                </span>
                Live on Chrome Web Store
              </span>
            </div>

            {/* Body: popup mockup + info */}
            <div className="md:grid md:grid-cols-[1fr_1.2fr]">

              {/* Left — extension popup UI */}
              <div className="flex items-center justify-center p-8 bg-muted/20 border-r border-border/40 min-h-[280px]">
                <div className="w-full max-w-[230px] rounded-xl border border-border/50 bg-background/95 backdrop-blur-sm shadow-2xl overflow-hidden group-hover:ring-1 group-hover:ring-primary/20 transition-all duration-300">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-border/40 bg-muted/30">
                    <div className="flex items-center gap-2">
                      <Chrome className="h-3.5 w-3.5 text-primary" />
                      <span className="text-xs font-bold">dormant</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      <span className="text-[9px] text-green-500 font-semibold">active</span>
                    </div>
                  </div>
                  <div className="p-3.5 space-y-3">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="rounded-lg bg-primary/8 border border-primary/15 py-3 text-center">
                        <p className="text-2xl font-bold text-primary leading-none">3</p>
                        <p className="text-[8px] text-muted-foreground mt-1">tabs slept</p>
                      </div>
                      <div className="rounded-lg bg-green-500/8 border border-green-500/15 py-3 text-center">
                        <p className="text-2xl font-bold text-green-500 leading-none">214</p>
                        <p className="text-[8px] text-muted-foreground mt-1">MB freed</p>
                      </div>
                    </div>
                    <p className="text-[8px] text-muted-foreground font-semibold uppercase tracking-wider px-0.5">Suspended</p>
                    <div className="space-y-1.5">
                      {[
                        { d: "reddit.com", e: "🔴", t: "4h" },
                        { d: "youtube.com", e: "📺", t: "2h" },
                        { d: "twitter.com", e: "🐦", t: "1h" },
                      ].map(({ d, e, t }) => (
                        <div key={d} className="flex items-center gap-2 rounded-lg bg-muted/50 border border-border/40 px-2.5 py-1.5">
                          <span className="text-[9px] shrink-0">{e}</span>
                          <span className="text-[9px] text-muted-foreground flex-1 truncate">{d}</span>
                          <span className="text-[8px] text-muted-foreground/50 shrink-0">{t}</span>
                          <span className="text-[9px] shrink-0">💤</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right — project info */}
              <div className="flex flex-col p-7">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/20">
                    <Chrome className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">Chrome Extension</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">dormant</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  Auto-suspends inactive tabs to reclaim RAM. Features a live popup with suspended tab count and MB recovered, domain whitelisting, and fully local storage — no tracking, no telemetry.
                </p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-5">
                  {["Zero telemetry", "Domain whitelist", "Configurable idle", "Live MB counter"].map(f => (
                    <div key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {["TypeScript", "React", "Chrome MV3", "Vite"].map(t => <Badge key={t}>{t}</Badge>)}
                </div>
                <div className="flex gap-2 mt-auto">
                  <Button size="sm" asChild>
                    <Link href="https://chromewebstore.google.com/detail/dormant/pipmpmbmfbbfcfibbpdljkemldnnkike" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                      <ExternalLink className="h-3.5 w-3.5" /> Install Extension
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="https://github.com/BigBen-7/dormant" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                      <ExternalLink className="h-3.5 w-3.5" /> GitHub
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* ── fineTunes — immersive video card ── */}
          <div className="group relative overflow-hidden rounded-2xl border border-violet-500/20 transition-all duration-300 hover:shadow-2xl hover:border-violet-500/35">

            {/* Full-bleed video backdrop */}
            <div className="relative overflow-hidden min-h-[300px] md:min-h-[340px]">
              <video src="/FineTune.mov" autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover" />
              {/* Multi-directional overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-violet-900/15" />

              {/* Left — content overlay */}
              <div className="absolute inset-0 flex flex-col justify-end md:justify-center p-7 md:max-w-[54%]">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20 ring-1 ring-violet-500/30 backdrop-blur-sm">
                    <Music className="h-5 w-5 text-violet-400" />
                  </div>
                  <Badge variant="outline" className="border-violet-500/30 text-violet-400 backdrop-blur-sm text-[10px]">AI-powered</Badge>
                </div>
                <h3 className="text-2xl font-bold mb-2">fine-tunes</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Connects to the Spotify API to surface your listening habits, then uses Google Gemini to generate intelligent playlists from natural language prompts.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {["React", "Next.js", "Spotify API", "Gemini API"].map(t => <Badge key={t}>{t}</Badge>)}
                </div>
                <Button size="sm" className="bg-violet-600 hover:bg-violet-500 text-white border-0 w-fit" asChild>
                  <Link href="https://fine-tunes.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                    <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                  </Link>
                </Button>
              </div>

              {/* Right — vinyl record decoration */}
              <div className="absolute right-8 inset-y-0 hidden md:flex items-center justify-center w-[40%]">
                <div className="relative">
                  {/* Vinyl */}
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-violet-950 via-neutral-900 to-black border-2 border-violet-500/25 shadow-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-700 ease-out">
                    <div className="absolute inset-5 rounded-full border border-violet-500/10" />
                    <div className="absolute inset-9 rounded-full border border-violet-500/10" />
                    <div className="absolute inset-[3.25rem] rounded-full border border-violet-500/10" />
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-600 to-violet-900 ring-2 ring-violet-500/30 flex items-center justify-center shadow-inner">
                      <div className="w-3 h-3 rounded-full bg-violet-200/50" />
                    </div>
                  </div>
                  {/* Radial waveform bars */}
                  <div className="absolute -inset-6 flex items-center justify-center pointer-events-none opacity-35">
                    <svg viewBox="0 0 228 228" className="w-56 h-56">
                      {[6,10,14,8,16,11,18,13,7,15,19,9,12,17,8,14,11,18,7,15,9,16,12,8].map((h, i) => {
                        const angle = (i / 24) * Math.PI * 2 - Math.PI / 2;
                        const r1 = 92, r2 = r1 + h;
                        return (
                          <line
                            key={i}
                            x1={114 + r1 * Math.cos(angle)}
                            y1={114 + r1 * Math.sin(angle)}
                            x2={114 + r2 * Math.cos(angle)}
                            y2={114 + r2 * Math.sin(angle)}
                            stroke="#a78bfa"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          />
                        );
                      })}
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Regain+ — streak calendar card ── */}
          <div className="group relative overflow-hidden rounded-2xl border-2 border-dashed border-primary/25 transition-all duration-300 hover:shadow-xl hover:border-primary/40" style={{ background: "hsl(var(--primary)/0.025)" }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/6 via-transparent to-transparent pointer-events-none" />
            {/* Coming Soon ribbon */}
            <div className="absolute top-5 right-[-44px] z-20 rotate-45 bg-primary px-16 py-1.5 text-[10px] font-bold tracking-[0.15em] text-white shadow-md uppercase">Coming Soon</div>

            <div className="md:grid md:grid-cols-[1.1fr_1fr]">

              {/* Left — streak calendar + info */}
              <div className="flex flex-col justify-center p-7 border-r border-primary/10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/20">
                    <Repeat className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold leading-tight">Regain+</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">21-day habit replacement · Mobile</p>
                  </div>
                </div>

                {/* 21-day streak calendar */}
                <div className="mb-4">
                  <p className="text-[9px] text-muted-foreground font-semibold uppercase tracking-widest mb-2.5">Progress · Day 4 of 21</p>
                  <div className="grid grid-cols-7 gap-1.5">
                    {Array.from({ length: 21 }, (_, i) => (
                      <div
                        key={i}
                        title={`Day ${i + 1}`}
                        className={`h-7 rounded-md flex items-center justify-center text-[9px] font-bold transition-colors ${
                          i < 4
                            ? "bg-primary text-white shadow-sm"
                            : i === 4
                            ? "bg-primary/15 ring-1 ring-primary/50 text-primary"
                            : "bg-muted/40 text-muted-foreground/30"
                        }`}
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mb-5 space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                    <span>4 days in</span>
                    <span className="font-semibold text-primary">19% complete</span>
                    <span>21 days total</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-muted/50 overflow-hidden">
                    <div className="h-full rounded-full bg-primary transition-all" style={{ width: "19%" }} />
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  Helps you break addictive habits by replacing them with intentional daily actions. Track urges, visualize progress, and build a new identity — not just a streak.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["React Native", "TypeScript", "NestJS", "PostgreSQL", "Turborepo"].map(t => <Badge key={t}>{t}</Badge>)}
                </div>
              </div>

              {/* Right — phone mockup */}
              <div className="flex items-center justify-center p-8 bg-muted/10">
                <div className="relative w-32 rounded-[2.5rem] border-4 border-primary/20 bg-gradient-to-b from-primary/15 via-primary/5 to-transparent shadow-2xl overflow-hidden" style={{ aspectRatio: "9/19" }}>
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-10 h-1.5 rounded-full bg-primary/20" />
                  <div className="flex flex-col items-center justify-center h-full gap-3 pb-4 px-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20 ring-1 ring-primary/30">
                      <Repeat className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-[11px] font-bold text-primary tracking-tight">Regain+</span>
                    <div className="w-full space-y-1">
                      {[0,1,2].map(i => (
                        <div key={i} className="h-1.5 rounded-full bg-primary/20 overflow-hidden">
                          <div className="h-full rounded-full bg-primary" style={{ width: i === 0 ? "85%" : i === 1 ? "60%" : "40%" }} />
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-1.5">
                      {[0,1,2,3,4,5,6].map(i => (
                        <div key={i} className={`w-1.5 h-1.5 rounded-full ${i < 4 ? "bg-primary" : "bg-primary/20"}`} />
                      ))}
                    </div>
                    <span className="text-[8px] text-muted-foreground text-center">day 4 of 21</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* ── FREELANCE TAB ────────────────────────────────── */}
        <TabsContent value="freelance" className="space-y-6">

          {/* Section label */}
          <div>
            <h2 className="text-xl font-semibold">Freelance & Client Work</h2>
            <p className="text-sm text-muted-foreground mt-1">Full-stack systems built end-to-end for real businesses.</p>
          </div>

          {/* ── Enechambs — flagship ── */}
          <div className="group overflow-hidden rounded-2xl border border-green-500/20 transition-all duration-300 hover:shadow-2xl hover:border-green-500/35">

            {/* Full-bleed gradient header */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[#0d2e1a] to-[#061509] px-7 pt-7 pb-16">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 75% 40%, #1a9155 0%, transparent 65%)" }} />
              <div className="absolute inset-0 pointer-events-none opacity-[0.06]
                bg-[linear-gradient(to_right,rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.6)_1px,transparent_1px)]
                bg-[size:2.5rem_2.5rem]" />
              <div className="relative flex flex-col sm:flex-row sm:items-start justify-between gap-5">
                {/* Logo + title */}
                <div className="flex items-center gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none" width="56" height="56" className="shrink-0 drop-shadow-xl rounded-xl">
                    <defs><linearGradient id="enc-fl-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#1a9155"/><stop offset="1" stopColor="#0b3d22"/></linearGradient></defs>
                    <rect width="40" height="40" rx="9" fill="url(#enc-fl-bg)"/>
                    <rect x="9" y="7" width="3.5" height="27" rx="1.75" fill="white"/>
                    <path d="M9 7H22C25 7 27 8.6 27 10.5C27 12.4 25 14 22 14H9V7Z" fill="white"/>
                    <path d="M9 18H18C20.8 18 22.5 19.3 22.5 21C22.5 22.7 20.8 24 18 24H9V18Z" fill="white"/>
                    <path d="M9 27H22C25 27 27 28.6 27 30.5C27 32.4 25 34 22 34H9V27Z" fill="white"/>
                    <circle cx="27" cy="10.5" r="2.2" fill="#a3f0c0" fillOpacity="0.9"/>
                    <circle cx="22.5" cy="21" r="1.8" fill="#a3f0c0" fillOpacity="0.8"/>
                    <circle cx="27" cy="30.5" r="2.2" fill="#a3f0c0" fillOpacity="0.9"/>
                  </svg>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-green-400/70 mb-1">Freelance · Full-Stack</p>
                    <h3 className="text-2xl font-bold text-white leading-tight">Enechambs Food</h3>
                    <p className="text-xs text-green-300/60 mt-0.5">Kaduna, Nigeria · Sole technical maintainer</p>
                  </div>
                </div>
                {/* Live badge */}
                <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-green-500/20 border border-green-500/30 px-3 py-1.5 text-[10px] font-semibold text-green-400">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
                  </span>
                  Live · June 2026
                </span>
              </div>
            </div>

            {/* Floating stats strip — overlaps header */}
            <div className="-mt-8 mx-5 sm:mx-7 relative z-10">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 rounded-xl border border-green-500/15 bg-background/95 backdrop-blur-sm p-3 shadow-xl">
                {[
                  { value: "184", label: "SKUs migrated" },
                  { value: "~25", label: "sales / day" },
                  { value: "10", label: "team members" },
                  { value: "1→2", label: "locations" },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center py-1">
                    <p className="text-lg font-bold text-green-500 leading-none">{value}</p>
                    <p className="text-[9px] text-muted-foreground mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Body */}
            <div className="px-7 pb-7 pt-5 space-y-5">
              <p className="text-sm text-muted-foreground leading-relaxed">
                End-to-end platform replacing a paper-based system — real-time stock, daily sales recording, automated month-end P&amp;L, and role-based access for a 10-person team. I built and deployed the full system end-to-end and continue to serve as the sole technical maintainer.
              </p>

              {/* Feature highlights */}
              <div className="grid sm:grid-cols-2 gap-2">
                {[
                  { icon: <Package className="h-3.5 w-3.5 text-green-400 shrink-0" />, title: "Inventory", desc: "Live stock per SKU, low-stock alerts, cost + selling prices" },
                  { icon: <ShoppingCart className="h-3.5 w-3.5 text-green-400 shrink-0" />, title: "Sales", desc: "Multi-item carts, role-gated discounts, atomic stock deduction" },
                  { icon: <BarChart3 className="h-3.5 w-3.5 text-green-400 shrink-0" />, title: "Reporting", desc: "Daily/monthly P&L, COGS, gross + net profit, top products" },
                  { icon: <Clock className="h-3.5 w-3.5 text-green-400 shrink-0" />, title: "Month-end automation", desc: "Cron closes stock + emails PDF report — zero manual work" },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="flex gap-2.5 rounded-lg border border-green-500/10 bg-green-500/5 p-3">
                    <div className="mt-0.5 shrink-0">{icon}</div>
                    <div>
                      <p className="text-xs font-semibold mb-0.5">{title}</p>
                      <p className="text-[11px] text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {["NestJS", "Next.js", "PostgreSQL", "TypeScript", "Resend", "Zustand"].map(t => (
                    <Badge key={t} variant="secondary" className="text-[10px] rounded-md">{t}</Badge>
                  ))}
                </div>
                <Button
                  size="sm"
                  onClick={() => setEnechambsOpen(true)}
                  className="bg-green-700 hover:bg-green-600 text-white gap-1.5 shrink-0"
                >
                  View Case Study <ChevronRight className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          </div>

          {/* ── Lmart Electronics ── */}
          <div className="group overflow-hidden rounded-2xl border border-blue-500/20 transition-all duration-300 hover:shadow-xl hover:border-blue-500/30">

            {/* Full-bleed gradient header */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[#0f1e3d] to-[#060d1f] px-7 pt-7 pb-14">
              <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(circle at 70% 35%, #2563EB 0%, transparent 60%)" }} />
              <div className="absolute inset-0 pointer-events-none opacity-[0.06]
                bg-[linear-gradient(to_right,rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.6)_1px,transparent_1px)]
                bg-[size:2.5rem_2.5rem]" />
              <div className="relative flex flex-col sm:flex-row sm:items-start justify-between gap-5">
                <div className="flex items-center gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="56" height="56" className="shrink-0 drop-shadow-xl rounded-xl">
                    <rect width="32" height="32" rx="7" fill="#2563EB"/>
                    <text x="16" y="22" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif" fontSize="14" fontWeight="700" fill="white" letterSpacing="-0.5">Lp</text>
                  </svg>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-blue-400/70 mb-1">Freelance · Frontend</p>
                    <h3 className="text-2xl font-bold text-white leading-tight">Lmart Electronics</h3>
                    <p className="text-xs text-blue-300/60 mt-0.5">Kaduna, Nigeria · Inventory system</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-blue-500/20 border border-blue-500/30 px-3 py-1.5 text-[10px] font-semibold text-blue-400">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-400" />
                  </span>
                  Active · 2026
                </span>
              </div>
            </div>

            {/* Feature strip — overlaps header */}
            <div className="-mt-6 mx-5 sm:mx-7 relative z-10">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 rounded-xl border border-blue-500/15 bg-background/95 backdrop-blur-sm px-3 py-2.5 shadow-xl">
                {[
                  { label: "Stock tracking" },
                  { label: "BNPL credit" },
                  { label: "Consignments" },
                  { label: "Profit reports" },
                ].map(({ label }) => (
                  <div key={label} className="flex items-center gap-1.5 justify-center py-0.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400/70 shrink-0" />
                    <p className="text-[10px] text-muted-foreground">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Body */}
            <div className="px-7 pb-7 pt-5 space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Electronics inventory frontend for a local shop — per-unit stock tracking, buy-now-pay-later (BNPL) credit system, consignment tracking, and a profit reporting dashboard. Built to replace manual spreadsheet workflows.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"].map(t => (
                  <Badge key={t} variant="secondary" className="text-[10px] rounded-md">{t}</Badge>
                ))}
              </div>
            </div>
          </div>

        </TabsContent>

        {/* ── Enechambs Slide Panel ── */}
        <SlidePanel
          isOpen={enechambsOpen}
          onClose={() => setEnechambsOpen(false)}
          title="Enechambs Food — Case Study"
        >
          <div className="space-y-7 text-sm">

            {/* Header */}
            <div className="flex items-center gap-4 pb-5 border-b border-border">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none" width="52" height="52" className="shrink-0 rounded-xl shadow-md">
                <defs>
                  <linearGradient id="enc-panel-bg" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#1a9155"/><stop offset="1" stopColor="#0b3d22"/>
                  </linearGradient>
                </defs>
                <rect width="40" height="40" rx="9" fill="url(#enc-panel-bg)"/>
                <rect x="9" y="7" width="3.5" height="27" rx="1.75" fill="white"/>
                <path d="M9 7H22C25 7 27 8.6 27 10.5C27 12.4 25 14 22 14H9V7Z" fill="white"/>
                <path d="M9 18H18C20.8 18 22.5 19.3 22.5 21C22.5 22.7 20.8 24 18 24H9V18Z" fill="white"/>
                <path d="M9 27H22C25 27 27 28.6 27 30.5C27 32.4 25 34 22 34H9V27Z" fill="white"/>
                <circle cx="27" cy="10.5" r="2.2" fill="#a3f0c0" fillOpacity="0.9"/>
                <circle cx="22.5" cy="21" r="1.8" fill="#a3f0c0" fillOpacity="0.8"/>
                <circle cx="27" cy="30.5" r="2.2" fill="#a3f0c0" fillOpacity="0.9"/>
              </svg>
              <div>
                <h3 className="font-semibold text-base leading-tight">Enechambs Food</h3>
                <p className="text-xs text-muted-foreground mt-0.5 leading-snug">Full-stack business management system built end-to-end for a Nigerian foodstuff distribution company</p>
              </div>
            </div>

            {/* Overview */}
            <div>
              <p className="text-muted-foreground leading-relaxed">
                Enechambs Food needed to move from paper-based inventory tracking to a live digital system that could handle daily sales, real-time stock levels, and monthly financial reporting — without requiring technical knowledge from the business owner or staff. I built and deployed the full system end-to-end and continue to serve as the sole technical maintainer.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-2">
              {[
                { value: "184 SKUs", label: "Migrated from paper" },
                { value: "~25/day", label: "Sales recorded" },
                { value: "10 staff", label: "1 location (2nd in setup)" },
                { value: "June 2026", label: "Live in production" },
              ].map(({ value, label }) => (
                <div key={label} className="rounded-lg border border-green-500/15 bg-green-500/5 px-3 py-2.5">
                  <p className="font-bold text-green-400 text-sm">{value}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{label}</p>
                </div>
              ))}
            </div>

            {/* What it does */}
            <div>
              <h4 className="font-semibold text-xs uppercase tracking-widest text-muted-foreground mb-3">What the system does</h4>
              <div className="space-y-3">
                {[
                  {
                    icon: <Package className="h-4 w-4 text-green-400" />,
                    title: "Inventory Management",
                    desc: "Live stock quantities per product with variant and unit support (bags, packs, cartons). Stock decrements automatically on every sale. Low-stock alerts fire at configurable thresholds. Products carry both cost and selling price — the gap drives all profit calculations.",
                  },
                  {
                    icon: <ShoppingCart className="h-4 w-4 text-green-400" />,
                    title: "Sales Recording",
                    desc: "Multi-item carts with quantity selection and optional discounts. A role-based discount cap restricts staff to 5% max; higher discounts require admin approval. Every sale atomically decrements inventory at the DB level — concurrent sales cannot oversell.",
                  },
                  {
                    icon: <BarChart3 className="h-4 w-4 text-green-400" />,
                    title: "Financial Reporting",
                    desc: "Admin-only suite: daily/weekly/monthly revenue & profit, category breakdown, top products, staff performance, and full Monthly P&L — Opening Stock + Purchases − Closing Stock = COGS; Sales − Discounts − COGS = Gross Profit; Gross Profit − Expenses = Net Profit.",
                  },
                  {
                    icon: <Clock className="h-4 w-4 text-green-400" />,
                    title: "Automated Month-End",
                    desc: "A scheduled cron fires at 9PM WAT on the last day of every month. It carries closing stock forward as next month's opening stock and emails all active admins a branded PDF report via Resend. Zero manual month-end work.",
                  },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="flex gap-3 rounded-lg border border-border bg-muted/30 p-3">
                    <div className="mt-0.5 shrink-0">{icon}</div>
                    <div>
                      <p className="font-medium text-xs mb-1">{title}</p>
                      <p className="text-[11px] text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical highlights */}
            <div>
              <h4 className="font-semibold text-xs uppercase tracking-widest text-muted-foreground mb-3">Technical Highlights</h4>
              <ul className="space-y-2">
                {[
                  { icon: <Shield className="h-3.5 w-3.5 text-green-400 shrink-0 mt-0.5" />, text: "Atomic stock deduction via PostgreSQL UPDATE WHERE quantity >= :qty — eliminates race conditions, no overselling possible." },
                  { icon: <Zap className="h-3.5 w-3.5 text-green-400 shrink-0 mt-0.5" />, text: "Profit calculated as (finalPrice − costPrice) × quantity — caught a silent bug that was understating cost and overstating profit on multi-quantity sales." },
                  { icon: <Zap className="h-3.5 w-3.5 text-green-400 shrink-0 mt-0.5" />, text: "Closing stock valued at cost price × quantity in both on-demand P&L and month-end PDF — fixed a second bug that was using selling price, silently inflating COGS." },
                  { icon: <Zap className="h-3.5 w-3.5 text-green-400 shrink-0 mt-0.5" />, text: "TypeORM entities aligned to numeric(10,3) DB columns with pg driver coercion via transformers — permanently eliminated migration drift generating dangerous ALTER TABLE statements." },
                  { icon: <Globe className="h-3.5 w-3.5 text-green-400 shrink-0 mt-0.5" />, text: "WAT-timezone-aware date filtering (sale.date::date = :today) — UTC-only logic produces wrong daily totals for a Nigerian business." },
                  { icon: <Shield className="h-3.5 w-3.5 text-green-400 shrink-0 mt-0.5" />, text: "JWT auth, global rate limiting via ThrottlerGuard, exception logging, hardened env var handling, and Resend on custom domain (noreply@enechambs.com) with DKIM, SPF, MX, DMARC." },
                ].map(({ icon, text }, i) => (
                  <li key={i} className="flex gap-2 text-[11px] text-muted-foreground leading-relaxed">
                    {icon}
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Role & stack */}
            <div>
              <h4 className="font-semibold text-xs uppercase tracking-widest text-muted-foreground mb-3">Stack &amp; Infrastructure</h4>
              <div className="flex flex-wrap gap-1.5">
                {["NestJS", "TypeORM", "PostgreSQL (Neon)", "Next.js 14", "Tailwind CSS", "shadcn/ui", "Zustand", "TypeScript", "Resend", "Render", "Vercel", "Neon", "Hostinger"].map(t => (
                  <Badge key={t} variant="secondary" className="text-[10px] rounded-md">{t}</Badge>
                ))}
              </div>
            </div>
          </div>
        </SlidePanel>

        {/* ── OPEN SOURCE TAB ──────────────────────────────── */}
        <TabsContent value="oss" className="space-y-8">

          {/* Section header */}
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <h2 className="text-xl font-semibold">Open Source Contributions</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Selected backend contributions via the OnlyDust platform — Rust, Stellar ecosystem.
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary shrink-0">
              <GitMerge className="h-3.5 w-3.5" />
              6 merged contributions
            </div>
          </div>

          {/* ── stellar-fee-tracker group ── */}
          <div className="rounded-2xl border border-amber-500/20 overflow-hidden">
            {/* Repo header */}
            <div className="flex items-center justify-between gap-4 px-5 py-4 bg-amber-500/5 border-b border-amber-500/15">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/15 ring-1 ring-amber-500/25">
                  <SiRust className="h-4 w-4 text-amber-500" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-amber-500/80 mb-0.5">StellarCommons</p>
                  <p className="text-sm font-bold font-mono leading-none">stellar-fee-tracker</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 text-[10px] font-semibold text-amber-500">
                  <GitMerge className="h-3 w-3" /> 4 merged
                </span>
                <Button variant="ghost" size="sm" className="h-7 gap-1.5 text-[11px] text-muted-foreground hover:text-foreground" asChild>
                  <Link href="https://github.com/StellarCommons/stellar-fee-tracker" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-3 w-3" /> GitHub
                  </Link>
                </Button>
              </div>
            </div>
            {/* Contributions */}
            <div className="divide-y divide-border/60">
              {[
                { type: "feat", what: "Built Horizon client trait methods in Rust", detail: "Implemented fetch_latest_transaction and fetch_operations on HorizonClient, enabling the fee tracker to pull live transaction data directly from the Stellar Horizon API.", stack: ["Rust", "Stellar SDK", "Async/Await"] },
                { type: "feat", what: "Scaffolded the devkit package in the Rust workspace", detail: "Initialised the devkit crate, registered it in the Cargo workspace, and scaffolded harness and simulation modules to support integration testing for the fee-tracking logic.", stack: ["Rust", "Cargo Workspaces", "Turborepo"] },
                { type: "fix", what: "Fixed FeeRepository ownership issues and hardened webhook delivery", detail: "Corrected self-reference method signatures causing Rust borrow conflicts in FeeRepository, and made outbound webhook dispatch more resilient against transient failures.", stack: ["Rust", "Axum", "Webhooks"] },
                { type: "refactor", what: "Refactored fee statistics domain model", detail: "Restructured the FeeStatistics data types for clearer module boundaries, removed dead code, and brought the codebase in line with idiomatic Rust conventions.", stack: ["Rust"] },
              ].map((c, i) => (
                <div key={i} className="flex gap-4 px-5 py-4 hover:bg-muted/30 transition-colors">
                  <span className={`mt-0.5 shrink-0 inline-flex items-center rounded-md px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${
                    c.type === "feat" ? "bg-green-500/10 text-green-500 ring-1 ring-green-500/20" :
                    c.type === "fix" ? "bg-red-500/10 text-red-500 ring-1 ring-red-500/20" :
                    "bg-sky-500/10 text-sky-500 ring-1 ring-sky-500/20"
                  }`}>{c.type}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium leading-snug mb-1">{c.what}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-2">{c.detail}</p>
                    <div className="flex flex-wrap gap-1">
                      {c.stack.map(s => <Badge key={s} variant="secondary" className="text-[9px] rounded-md px-1.5 py-0">{s}</Badge>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── stellar-explain group ── */}
          <div className="rounded-2xl border border-sky-500/20 overflow-hidden">
            {/* Repo header */}
            <div className="flex items-center justify-between gap-4 px-5 py-4 bg-sky-500/5 border-b border-sky-500/15">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500/15 ring-1 ring-sky-500/25">
                  <SiRust className="h-4 w-4 text-sky-400" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-sky-500/80 mb-0.5">StellarCommons</p>
                  <p className="text-sm font-bold font-mono leading-none">stellar-explain</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 px-2.5 py-1 text-[10px] font-semibold text-sky-400">
                  <GitMerge className="h-3 w-3" /> 2 merged
                </span>
                <Button variant="ghost" size="sm" className="h-7 gap-1.5 text-[11px] text-muted-foreground hover:text-foreground" asChild>
                  <Link href="https://github.com/StellarCommons/stellar-explain" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-3 w-3" /> GitHub
                  </Link>
                </Button>
              </div>
            </div>
            {/* Contributions */}
            <div className="divide-y divide-border/60">
              {[
                { type: "feat", what: "Wired Horizon memo deserialization and network config into core startup", detail: "Hooked up Horizon memo field deserialization and bootstrapped network configuration at server startup, completing the Rust data layer needed to explain live Stellar transactions.", stack: ["Rust", "Serde", "Horizon API"] },
                { type: "feat", what: "Integrated CORS middleware into the Rust core server", detail: "Added CORS middleware to the Axum-based Rust backend, unblocking cross-origin requests from the Next.js frontend during development and staging.", stack: ["Rust", "Axum", "CORS"] },
              ].map((c, i) => (
                <div key={i} className="flex gap-4 px-5 py-4 hover:bg-muted/30 transition-colors">
                  <span className="mt-0.5 shrink-0 inline-flex items-center rounded-md px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-green-500/10 text-green-500 ring-1 ring-green-500/20">{c.type}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium leading-snug mb-1">{c.what}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-2">{c.detail}</p>
                    <div className="flex flex-wrap gap-1">
                      {c.stack.map(s => <Badge key={s} variant="secondary" className="text-[9px] rounded-md px-1.5 py-0">{s}</Badge>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </TabsContent>
      </Tabs>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense>
      <ProjectsContent />
    </Suspense>
  );
}

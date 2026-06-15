"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, GitMerge, Package, ShoppingCart, BarChart3, Clock, ChevronRight, Zap, Shield, Globe } from "lucide-react";

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SlidePanel } from "@/components/slide-panel";

const ossContributions = [
  {
    org: "StellarCommons",
    repo: "stellar-fee-tracker",
    repoUrl: "https://github.com/StellarCommons/stellar-fee-tracker",
    what: "Built Horizon client trait methods in Rust",
    detail:
      "Implemented fetch_latest_transaction and fetch_operations on HorizonClient, enabling the fee tracker to pull live transaction data directly from the Stellar Horizon API.",
    stack: ["Rust", "Stellar SDK", "Async/Await"],
  },
  {
    org: "StellarCommons",
    repo: "stellar-fee-tracker",
    repoUrl: "https://github.com/StellarCommons/stellar-fee-tracker",
    what: "Scaffolded the devkit package in the Rust workspace",
    detail:
      "Initialised the devkit crate, registered it in the Cargo workspace, and scaffolded harness and simulation modules to support integration testing for the fee-tracking logic.",
    stack: ["Rust", "Cargo Workspaces", "Turborepo"],
  },
  {
    org: "StellarCommons",
    repo: "stellar-fee-tracker",
    repoUrl: "https://github.com/StellarCommons/stellar-fee-tracker",
    what: "Fixed FeeRepository ownership issues and hardened webhook delivery",
    detail:
      "Corrected self-reference method signatures causing Rust borrow conflicts in FeeRepository, and made outbound webhook dispatch more resilient against transient failures.",
    stack: ["Rust", "Axum", "Webhooks"],
  },
  {
    org: "StellarCommons",
    repo: "stellar-fee-tracker",
    repoUrl: "https://github.com/StellarCommons/stellar-fee-tracker",
    what: "Refactored fee statistics domain model",
    detail:
      "Restructured the FeeStatistics data types for clearer module boundaries, removed dead code, and brought the codebase in line with idiomatic Rust conventions.",
    stack: ["Rust"],
  },
  {
    org: "StellarCommons",
    repo: "stellar-explain",
    repoUrl: "https://github.com/StellarCommons/stellar-explain",
    what: "Wired Horizon memo deserialization and network config into core startup",
    detail:
      "Hooked up Horizon memo field deserialization and bootstrapped network configuration at server startup, completing the Rust data layer needed to explain live Stellar transactions.",
    stack: ["Rust", "Serde", "Horizon API"],
  },
  {
    org: "StellarCommons",
    repo: "stellar-explain",
    repoUrl: "https://github.com/StellarCommons/stellar-explain",
    what: "Integrated CORS middleware into the Rust core server",
    detail:
      "Added CORS middleware to the Axum-based Rust backend, unblocking cross-origin requests from the Next.js frontend during development and staging.",
    stack: ["Rust", "Axum", "CORS"],
  },
];

function ProjectsContent() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");
  const defaultTab = tab === "oss" ? "oss" : tab === "freelance" ? "freelance" : "projects";
  const [enechambsOpen, setEnechambsOpen] = useState(false);

  return (
    <div className="container py-12">
      <div className="flex flex-col gap-2 mb-8">
        <Link
          href="/"
          className="flex items-center text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Projects
        </h1>
        <p className="text-muted-foreground">
          A collection of my work, side projects, and open-source contributions.
        </p>
      </div>

      <Tabs defaultValue={defaultTab}>
        <TabsList className="mb-8">
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="freelance">Freelance</TabsTrigger>
          <TabsTrigger value="oss">Open Source</TabsTrigger>
        </TabsList>

        {/* ── PROJECTS TAB ─────────────────────────────────── */}
        <TabsContent value="projects" className="space-y-6">
          <Card className="overflow-hidden liquid-glass">
            <div className="md:grid md:grid-cols-2">
              <div className="bg-muted/50 flex items-center justify-center p-4">
                <div className="relative w-full overflow-hidden rounded-md" style={{ height: '210px' }}>
                  <div
                    className="absolute top-0 left-0 pointer-events-none"
                    style={{ width: '1400px', height: '560px', transform: 'scale(0.375)', transformOrigin: 'top left' }}
                  >
                    <iframe
                      src="/promo-1400x560.html"
                      width="1400"
                      height="560"
                      style={{ border: 'none', display: 'block' }}
                    />
                  </div>
                </div>
              </div>
              <div>
                <CardHeader>
                  <CardTitle className="text-2xl">dormant</CardTitle>
                  <CardDescription>
                    Chrome extension that auto-suspends inactive tabs to reclaim RAM
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge>TypeScript</Badge>
                      <Badge>React</Badge>
                      <Badge>Chrome MV3</Badge>
                      <Badge>Vite</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Dormant automatically discards tabs that have been inactive
                      beyond a configurable threshold, freeing up RAM without
                      losing your browsing context. Features a live popup showing
                      suspended tab count and estimated MB recovered, domain
                      whitelisting, and fully local storage — no tracking, no
                      telemetry.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button size="sm" asChild>
                    <Link
                      href="https://chromewebstore.google.com/detail/dormant/pipmpmbmfbbfcfibbpdljkemldnnkike"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Install Extension
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link
                      href="https://github.com/BigBen-7/dormant"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden liquid-glass">
            <div className="md:grid md:grid-cols-2">
              <div className="bg-muted/50 flex items-center justify-center p-8">
                <div
                  className="relative w-36 flex-shrink-0 rounded-[2.5rem] border-4 border-primary/25 bg-gradient-to-b from-primary/20 via-primary/8 to-transparent shadow-xl overflow-hidden"
                  style={{ aspectRatio: "9/19" }}
                >
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-10 h-1.5 rounded-full bg-primary/20" />
                  <div className="flex flex-col items-center justify-center h-full gap-3 pb-4">
                    <span className="text-4xl">🔁</span>
                    <span className="text-sm font-bold text-primary tracking-tight">Regain+</span>
                    <div className="flex gap-1.5">
                      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                          key={i}
                          className={`w-1.5 h-1.5 rounded-full ${i < 4 ? "bg-primary" : "bg-primary/20"}`}
                        />
                      ))}
                    </div>
                    <span className="text-[9px] text-muted-foreground px-3 text-center leading-relaxed">
                      day 4 of 21
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden">
                <div className="absolute top-5 right-[-38px] z-10 rotate-45 bg-primary px-14 py-1.5 text-[10px] font-bold tracking-[0.2em] text-white shadow-md uppercase">
                  Coming Soon
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Regain+</CardTitle>
                  <CardDescription>21-day habit-replacement mobile app</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge>React Native</Badge>
                      <Badge>TypeScript</Badge>
                      <Badge>NestJS</Badge>
                      <Badge>PostgreSQL</Badge>
                      <Badge>Turborepo</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Regain+ helps you break addictive habits by replacing them
                      with intentional daily actions. Track urges and emotions,
                      visualize progress over 21 days, and build a new identity —
                      not just a streak.
                    </p>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden liquid-glass">
            <div className="md:grid md:grid-cols-2">
              <div className="bg-muted/50 flex items-center justify-center p-6">
                <div className="relative aspect-video w-full max-w-xl overflow-hidden rounded-md">
                  <video
                    src="/FineTune.mov"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/2 to-primary/40" />
                </div>
              </div>
              <div>
                <CardHeader>
                  <CardTitle className="text-2xl">fine-tunes</CardTitle>
                  <CardDescription>
                    A personalized music discovery dashboard with AI-powered
                    playlist generation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge>React</Badge>
                      <Badge>Next.js</Badge>
                      <Badge>Spotify API</Badge>
                      <Badge>Gemini API</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Fine-Tunes connects securely to the Spotify API to build a
                      dashboard of the user's listening habits and leverages the
                      Google Gemini API to generate intelligent, context-aware
                      playlists from natural language prompts.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="sm" asChild>
                    <Link
                      href="https://fine-tunes.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* ── FREELANCE TAB ────────────────────────────────── */}
        <TabsContent value="freelance" className="space-y-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold">Freelance Projects</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Client work — full-stack systems built end-to-end.
            </p>
          </div>

          {/* ── Enechambs Card ── */}
          <Card className="overflow-hidden liquid-glass group">
            <div className="md:grid md:grid-cols-[200px_1fr]">

              {/* Logo panel */}
              <div className="relative flex items-center justify-center p-8 overflow-hidden bg-gradient-to-br from-[#0d2e1a] to-[#061509]">
                <div className="absolute inset-0 opacity-20"
                  style={{ backgroundImage: "radial-gradient(circle at 60% 40%, #1a9155 0%, transparent 65%)" }} />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none" width="80" height="80" className="relative z-10 drop-shadow-xl">
                  <defs>
                    <linearGradient id="enc-logo-bg" x1="0" y1="0" x2="1" y2="1">
                      <stop stopColor="#1a9155"/><stop offset="1" stopColor="#0b3d22"/>
                    </linearGradient>
                  </defs>
                  <rect width="40" height="40" rx="9" fill="url(#enc-logo-bg)"/>
                  <rect x="9" y="7" width="3.5" height="27" rx="1.75" fill="white"/>
                  <path d="M9 7H22C25 7 27 8.6 27 10.5C27 12.4 25 14 22 14H9V7Z" fill="white"/>
                  <path d="M9 18H18C20.8 18 22.5 19.3 22.5 21C22.5 22.7 20.8 24 18 24H9V18Z" fill="white"/>
                  <path d="M9 27H22C25 27 27 28.6 27 30.5C27 32.4 25 34 22 34H9V27Z" fill="white"/>
                  <circle cx="27" cy="10.5" r="2.2" fill="#a3f0c0" fillOpacity="0.9"/>
                  <circle cx="22.5" cy="21" r="1.8" fill="#a3f0c0" fillOpacity="0.8"/>
                  <circle cx="27" cy="30.5" r="2.2" fill="#a3f0c0" fillOpacity="0.9"/>
                </svg>
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col gap-4">
                <div>
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight">Enechambs Food</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">Full-stack inventory &amp; sales system · Kaduna, Nigeria · Sole technical maintainer</p>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-500/10 border border-green-500/20 px-2.5 py-0.5 text-[10px] font-semibold text-green-500 shrink-0">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                      </span>
                      Live · June 2026
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    End-to-end platform replacing a paper-based system — real-time stock, daily sales recording, automated month-end P&amp;L, and role-based access for a 10-person team.
                  </p>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { value: "184", label: "SKUs migrated" },
                    { value: "~25", label: "sales / day" },
                    { value: "10", label: "team members" },
                    { value: "1→2", label: "locations" },
                  ].map(({ value, label }) => (
                    <div key={label} className="rounded-lg border border-green-500/15 bg-green-500/5 px-3 py-2 text-center">
                      <p className="text-base font-bold text-green-400 leading-none">{value}</p>
                      <p className="text-[10px] text-muted-foreground mt-1 leading-tight">{label}</p>
                    </div>
                  ))}
                </div>

                {/* Stack + action */}
                <div className="flex flex-wrap items-center justify-between gap-3 mt-auto">
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
                    View Case Study
                    <ChevronRight className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
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
        <TabsContent value="oss">
          <div className="mb-6">
            <h2 className="text-xl font-semibold">Open Source Contributions</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Selected backend contributions — more repos incoming.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {ossContributions.map((c, i) => (
              <Card key={i} className="liquid-glass flex flex-col">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-xs text-muted-foreground font-medium tracking-wide uppercase mb-1">
                        {c.org}
                      </p>
                      <CardTitle className="text-base leading-snug">{c.what}</CardTitle>
                    </div>
                    <GitMerge className="h-4 w-4 text-primary shrink-0 mt-1" />
                  </div>
                </CardHeader>
                <CardContent className="flex-1 pb-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {c.detail}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {c.stack.map((s) => (
                      <Badge key={s} variant="secondary" className="text-xs rounded-md">
                        {s}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="outline" size="sm" asChild>
                    <Link
                      href={c.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5"
                    >
                      <ExternalLink className="h-3 w-3" />
                      {c.repo}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
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

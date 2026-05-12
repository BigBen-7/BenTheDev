"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, GitMerge } from "lucide-react";

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

export default function ProjectsPage() {
  const searchParams = useSearchParams();
  const defaultTab = searchParams.get("tab") === "oss" ? "oss" : "projects";

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

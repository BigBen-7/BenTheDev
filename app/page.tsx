"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  FileText,
  ExternalLink,
} from "lucide-react";

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
import { ProjectCard } from "@/components/project-card";
import { SlidePanel } from "@/components/slide-panel";
import { AboutContent } from "@/components/about-content";
import { ContactContent } from "@/components/contact-content";

export default function Home() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 w-full nav-glass">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-xl font-bold tracking-tight">
              benard<span className="text-primary">.</span>dev
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
      <main className="container ">
        <section className="space-y-6 pb-12 md:pb-24 lg:py-14">
          <div className="flex flex-col items-start gap-8 md:flex-row md:justify-between">
            <div className="space-y-6 md:max-w-[60%]">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Benard Simon<span className="text-primary">.</span>
                </h1>
                <p className="text-xl font-semibold">
                  Software Engineer <span className="text-primary">|</span> Mobile & Web <span className="text-primary">|</span> OpenSource Contributor
                </p>
              </div>
              <p className="max-w-[600px] text-muted-foreground md:text-l">
                I build web and mobile apps that are a pleasure to use — crafting
                beautiful interfaces with meaningful transitions and thoughtful
                interactions. When I'm not shipping products, I contribute to
                open source.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => setIsAboutOpen(true)}
                  className="flex items-center"
                >
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
            <div className="w-full md:w-auto mt-8 md:mt-0">
              <Card className="flex flex-col gap-2 min-w-[240px] rounded-xl p-6 liquid-glass">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src="/Benard.png"
                      alt="Benard"
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">Available for work</h3>
                    <p className="text-sm text-muted-foreground">
                      Open to new opportunities
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex gap-4 justify-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                    className="h-8 w-8"
                  >
                    <Link
                      href="https://github.com/BigBen-7"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                    className="h-8 w-8"
                  >
                    <Link
                      href="https://www.linkedin.com/in/benard-simon-181413244"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                    className="h-8 w-8"
                  >
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

        {/* featured projects */}
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

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="relative overflow-hidden liquid-glass rounded-lg">
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-xl">dormant</CardTitle>
                <CardDescription>
                  Chrome extension that auto-suspends inactive tabs to reclaim RAM
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-2">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="rounded-md">
                    TypeScript
                  </Badge>
                  <Badge variant="secondary" className="rounded-md">
                    React
                  </Badge>
                  <Badge variant="secondary" className="rounded-md">
                    Chrome MV3
                  </Badge>
                  <Badge variant="secondary" className="rounded-md">
                    Vite
                  </Badge>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/projects" className="flex items-center gap-1">
                    View Project <ArrowRight className="h-3 w-3" />
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href="https://chromewebstore.google.com/detail/dormant/pipmpmbmfbbfcfibbpdljkemldnnkike" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    Install <ExternalLink className="h-3 w-3" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="relative overflow-hidden liquid-glass rounded-lg">
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-xl font-semibold">
                  fineTunes
                </CardTitle>
                <CardDescription className="text-sm sm:text-base leading-relaxed">
                  A personalized music discovery dashboard with AI-powered
                  playlist generation.
                </CardDescription>
              </CardHeader>

              <CardContent className="p-4 pt-2">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="rounded-md">
                    React
                  </Badge>
                  <Badge variant="secondary" className="rounded-md">
                    Next.js
                  </Badge>
                  <Badge variant="secondary" className="rounded-md">
                    Spotify API
                  </Badge>
                  <Badge variant="secondary" className="rounded-md">
                    Gemini API
                  </Badge>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/projects" className="flex items-center gap-1">
                    View Project <ArrowRight className="h-3 w-3" />
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link
                    href="https://fine-tunes.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    Live Demo <ExternalLink className="h-3 w-3" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="relative overflow-hidden liquid-glass rounded-lg">
              <CardHeader className="p-4 pb-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <CardTitle className="text-xl">Regain+</CardTitle>
                  <span className="inline-flex items-center gap-1 rounded-full border-2 border-dashed border-primary bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold tracking-widest text-primary uppercase animate-pulse">
                    🚧 Coming Soon
                  </span>
                </div>
                <CardDescription>
                  21-day habit-replacement mobile app
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-2">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="rounded-md">React Native</Badge>
                  <Badge variant="secondary" className="rounded-md">TypeScript</Badge>
                  <Badge variant="secondary" className="rounded-md">NestJS</Badge>
                  <Badge variant="secondary" className="rounded-md">PostgreSQL</Badge>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/projects" className="flex items-center gap-1">
                    View Project <ArrowRight className="h-3 w-3" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="flex justify-center sm:hidden mt-4">
            <Button asChild>
              <Link href="/projects" className="flex items-center">
                View all projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Open Source */}
        <section className="space-y-6 py-8 md:py-12">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Open Source
              </h2>
              <p className="text-muted-foreground">
                Selected contributions — Rust backend work in the Stellar ecosystem.
              </p>
            </div>
            <Button variant="ghost" asChild className="ml-auto hidden sm:flex">
              <Link href="/projects?tab=oss" className="flex items-center">
                View all <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                org: "StellarCommons",
                repo: "stellar-fee-tracker",
                repoUrl: "https://github.com/StellarCommons/stellar-fee-tracker",
                what: "Built Horizon client trait methods",
                detail: "Implemented fetch_latest_transaction and fetch_operations in Rust, enabling live transaction data retrieval from the Stellar network.",
                stack: ["Rust", "Stellar SDK"],
              },
              {
                org: "StellarCommons",
                repo: "stellar-fee-tracker",
                repoUrl: "https://github.com/StellarCommons/stellar-fee-tracker",
                what: "Scaffolded devkit with simulation modules",
                detail: "Initialised the devkit crate in the Cargo workspace and built harness & simulation modules for integration testing.",
                stack: ["Rust", "Cargo Workspaces"],
              },
              {
                org: "StellarCommons",
                repo: "stellar-explain",
                repoUrl: "https://github.com/StellarCommons/stellar-explain",
                what: "Wired Horizon data layer into core startup",
                detail: "Hooked up memo deserialization and network config at server startup, completing the Rust data layer for live transaction explanations.",
                stack: ["Rust", "Serde", "Axum"],
              },
            ].map((c, i) => (
              <Card key={i} className="liquid-glass flex flex-col">
                <CardHeader className="pb-2">
                  <p className="text-xs text-muted-foreground font-medium tracking-wide uppercase mb-1">
                    {c.org}
                  </p>
                  <CardTitle className="text-base leading-snug">{c.what}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 pb-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.detail}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {c.stack.map((s) => (
                      <Badge key={s} variant="secondary" className="text-xs rounded-md">{s}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={c.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                      <ExternalLink className="h-3 w-3" />
                      {c.repo}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
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
      <footer className="border-t">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © {new Date().getFullYear()} Benard. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://github.com/BigBen-7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://www.linkedin.com/in/benard-simon-181413244"
                target="_blank"
                rel="noopener noreferrer"
              >
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

      {/* About Me Slide Panel */}
      <SlidePanel
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        title="About Me"
      >
        <AboutContent />
      </SlidePanel>

      {/* Contact Slide Panel */}
      <SlidePanel
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        title="Contact Me"
      >
        <ContactContent />
      </SlidePanel>
    </div>
  );
}

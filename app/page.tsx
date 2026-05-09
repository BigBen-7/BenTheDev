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
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-xl font-bold tracking-tight">
              benard.dev
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
      <main className="container py-12 md:py-24">
        <section className="space-y-6 pb-12 md:pb-24 lg:py-32">
          <div className="flex flex-col items-start gap-8 md:flex-row md:justify-between">
            <div className="space-y-6 md:max-w-[60%]">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Benard Simon<span className="text-primary">.</span>
                </h1>
                <p className="text-xl font-semibold text-primary">
                  Frontend Engineer | OpenSource Contributor
                </p>
              </div>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                I create websites that are a pleasure to use. I design them with
                beautiful typography, meaningful transitions, and thoughtful
                interactions that delight people.
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
              <Card className="flex flex-col gap-2 min-w-[240px] rounded-xl border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <Image src="/Benard.png" alt="Benard" width={48} height={48} className="object-cover w-full h-full" />
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

          <div className="grid gap-6 sm:grid-cols-2">
            <Card className="relative overflow-hidden border rounded-lg border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-xl">that'swhatshesaid</CardTitle>
                <CardDescription>
                  Discord bot serving random quotes from the tv-show (The Office)
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-2">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="rounded-md">TypeScript</Badge>
                  <Badge variant="secondary" className="rounded-md">Discord.js</Badge>
                  <Badge variant="secondary" className="rounded-md">Node.js</Badge>
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

            <Card className="relative overflow-hidden border rounded-lg border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              {/* Soft glow background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-400/10 to-teal-400/10 opacity-0 blur-2xl transition-opacity duration-500 hover:opacity-100" />

              <CardHeader className="relative p-4 pb-2 z-10">
                <CardTitle className="text-xl font-semibold">
                  fineTunes
                </CardTitle>
                <CardDescription className="text-sm sm:text-base leading-relaxed">
                  A personalized music discovery dashboard with AI-powered
                  playlist generation.
                </CardDescription>
              </CardHeader>

              <CardContent className="relative p-4 pt-2 z-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="rounded-md">React</Badge>
                  <Badge variant="secondary" className="rounded-md">Next.js</Badge>
                  <Badge variant="secondary" className="rounded-md">Spotify API</Badge>
                  <Badge variant="secondary" className="rounded-md">Gemini API</Badge>
                </div>
              </CardContent>
              <CardFooter className="relative p-4 pt-0 z-10 flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/projects" className="flex items-center gap-1">
                    View Project <ArrowRight className="h-3 w-3" />
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href="https://fine-tunes.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    Live Demo <ExternalLink className="h-3 w-3" />
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
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-500 via-blue-400 to-teal-400 bg-clip-text text-transparent animate-gradient">
              Open Source
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto md:mx-0">
              My contributions to the open-source community — shaping tools,
              improving systems, and building for impact.
            </p>
          </div>

          <div className="grid gap-6">
            <Card className="border border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg md:text-xl">
                  <span className="relative inline-flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Active Contributor
                </CardTitle>
                <CardDescription className="text-sm sm:text-base md:text-lg leading-relaxed">
                  Projects in the blockchain space — Starknet, Stellar, and
                  WorldCoin ecosystems — built with JavaScript, TypeScript,
                  React, and Next.js.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4 text-sm sm:text-base md:text-lg leading-relaxed">
                <p>
                  I actively contribute to open-source projects, focusing on
                  frontend architecture, UI performance, and developer
                  experience. These collaborations have helped enhance ecosystem
                  tools and drive user-centered innovation.
                </p>

                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>
                    <strong>Veritix:</strong> Event ticketing platform (NestJS +
                    PostgreSQL).
                  </li>
                  <li>
                    <strong>Vestroll:</strong> Team Management.
                  </li>
                  <li>
                    <strong>Dewordle:</strong> Multi-game word platform with
                    leaderboards.
                  </li>
                  <li>
                    <strong>LyricsFlip:</strong> Music lyric remix API backend.
                  </li>
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  asChild
                  className="transition-all hover:scale-[1.03] hover:shadow-md hover:shadow-primary/30 text-sm sm:text-base"
                >
                  <Link
                    href="https://jealousgx.github.io/oss-tracker/?username=BigBen-7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    View My Contributions{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
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

"use client";

import { useState } from "react";
import Link from "next/link";
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
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link
              href="/"
              className="font-medium transition-colors hover:text-foreground/80"
            >
              Home
            </Link>
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
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full md:hidden"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
      <main className="container py-12 md:py-24">
        <section className="space-y-6 pb-12 md:pb-24 lg:py-32">
          <div className="flex flex-col items-start gap-8 md:flex-row md:justify-between">
            <div className="space-y-6 md:max-w-[60%]">
              <div className="space-y-2">
                <p className="text-lg text-muted-foreground">
                  Hello, My name is,
                </p>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Benard
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
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">B</span>
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
            <Card className="overflow-hidden border rounded-lg">
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-xl">that'swhatshesaid</CardTitle>
                <CardDescription>
                  Discord bot serving random quotes from the tv-show (The
                  Office)
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-2">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="rounded-md">
                    TypeScript
                  </Badge>
                  <Badge variant="secondary" className="rounded-md">
                    Discord.js
                  </Badge>
                  <Badge variant="secondary" className="rounded-md">
                    Node.js
                  </Badge>
                </div>
              </CardContent>
              <CardFooter className="flex gap-2 p-4 pt-0">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="rounded-md"
                >
                  <Link
                    href="https://github.com/username/thats-what-she-said-bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="rounded-md"
                >
                  <Link
                    href="https://discord.com/api/oauth2/authorize?client_id=123456789&permissions=0&scope=bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden border rounded-lg">
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-xl">find-tunes</CardTitle>
                <CardDescription>
                  An album finder that lets you find albums from your favorite
                  artists using Spotify's API
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
                </div>
              </CardContent>
              <CardFooter className="flex gap-2 p-4 pt-0">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="rounded-md"
                >
                  <Link
                    href="https://github.com/username/find-tunes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="rounded-md"
                >
                  <Link
                    href="https://find-tunes.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    Demo
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
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Open Source</h2>
            <p className="text-muted-foreground">My contributions to the open-source community.</p>
          </div>
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Active Contributor</CardTitle>
                <CardDescription>
                  Projects in the blockchain space, Starknet, Stellar and WorldCoin Ecosystems with codebase written in
                  JavaScript, TypeScript, React and Next.js
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  I actively contribute to various open-source projects, focusing on frontend development and UI
                  improvements. Check out my contribution history and the projects I'm involved with on OnlyDust.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="transition-all hover:scale-[1.02]">
                  <Link
                    href="https://app.onlydust.com/users/BigBen-7/projects"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    View My Contributions <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section className="space-y-6 py-8 md:py-12">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Get in Touch
            </h2>
            <p className="text-muted-foreground">
              Feel free to reach out for collaborations or just a chat.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Card className="flex-1">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <p>benardsimon7@gmail.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-muted-foreground" />
                  <Link
                    href="https://github.com/BigBen-7"
                    className="hover:underline"
                  >
                    github.com/BigBen-7
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-muted-foreground" />
                  <Link
                    href="https://www.linkedin.com/in/benard-simon-181413244"
                    className="hover:underline"
                  >
                    linkedin.com/in/benard-simon-181413244
                  </Link>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() => setIsContactOpen(true)}
                  className="w-full transition-all hover:scale-[1.02]"
                >
                  Send a Message
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex-1">
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="https://drive.google.com/file/d/1SkiND40IFebFTnB7j8bDYwotqMrf26tX/view?usp=drive_link"
                      className="flex items-center gap-2 hover:underline"
                    >
                      <ArrowRight className="h-4 w-4" /> View Resume
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects"
                      className="flex items-center gap-2 hover:underline"
                    >
                      <ArrowRight className="h-4 w-4" /> Browse Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://app.onlydust.com/users/BigBen-7/projects"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:underline"
                    >
                      <ArrowRight className="h-4 w-4" /> Open Source Work
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => setIsContactOpen(true)}
                      className="flex items-center gap-2 hover:underline text-left w-full"
                    >
                      <ArrowRight className="h-4 w-4" /> Contact Form
                    </button>
                  </li>
                </ul>
              </CardContent>
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

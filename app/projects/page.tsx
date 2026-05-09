import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

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

export default function ProjectsPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col gap-2">
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

      <div className="mt-8 space-y-6">
        <Card className="overflow-hidden liquid-glass">
          <div className="md:grid md:grid-cols-2">
            <div className="bg-muted/50 flex items-center justify-center p-6">
              <div className="aspect-video w-full max-w-sm rounded-md bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                <span className="text-xl font-bold text-primary">
                  that'swhatshesaid
                </span>
              </div>
            </div>
            <div>
              <CardHeader>
                <CardTitle className="text-2xl">that'swhatshesaid</CardTitle>
                <CardDescription>
                  Discord bot serving random quotes from the tv-show (The Office)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge>TypeScript</Badge>
                    <Badge>Discord.js</Badge>
                    <Badge>Node.js</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    A Discord bot that responds with random quotes from The
                    Office TV show. Built with Discord.js, it includes command
                    handling, quote categorization, and character-specific quotes.
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
      </div>
    </div>
  );
}

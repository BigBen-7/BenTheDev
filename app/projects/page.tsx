import Link from "next/link"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProjectsPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col gap-2">
        <Link href="/" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects</h1>
        <p className="text-muted-foreground">A collection of my work, side projects, and open-source contributions.</p>
      </div>

      <div className="mt-8">
        <Tabs defaultValue="all">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="web">Web Development</TabsTrigger>
            <TabsTrigger value="open-source">Open Source</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            <Card className="overflow-hidden">
              <div className="md:grid md:grid-cols-2">
                <div className="bg-muted/50 flex items-center justify-center p-6">
                  <div className="aspect-video w-full max-w-sm rounded-md bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">that'swhatshesaid</span>
                  </div>
                </div>
                <div>
                  <CardHeader>
                    <CardTitle className="text-2xl">that'swhatshesaid</CardTitle>
                    <CardDescription>Discord bot serving random quotes from the tv-show (The Office)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        <Badge>TypeScript</Badge>
                        <Badge>Discord.js</Badge>
                        <Badge>Node.js</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        A Discord bot that responds with random quotes from The Office TV show. The bot uses Discord.js
                        and includes features like command handling, quote categorization, and character-specific
                        quotes.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link
                        href="https://github.com/username/thats-what-she-said-bot"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link
                        href="https://discord.com/api/oauth2/authorize?client_id=123456789&permissions=0&scope=bot"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Add to Discord
                      </Link>
                    </Button>
                  </CardFooter>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="md:grid md:grid-cols-2">
                <div className="bg-muted/50 flex items-center justify-center p-6">
                  <div className="aspect-video w-full max-w-sm rounded-md bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">find-tunes</span>
                  </div>
                </div>
                <div>
                  <CardHeader>
                    <CardTitle className="text-2xl">find-tunes</CardTitle>
                    <CardDescription>
                      An album finder that lets you find albums from your favorite artists using Spotify's API
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        <Badge>React</Badge>
                        <Badge>Next.js</Badge>
                        <Badge>Spotify API</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        A web application that allows users to search for and discover albums from their favorite
                        artists using the Spotify API. Features include artist search, album browsing, and audio
                        previews.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://github.com/username/find-tunes" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href="https://find-tunes.vercel.app" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  </CardFooter>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Other tab contents would be similar */}
        </Tabs>
      </div>
    </div>
  )
}

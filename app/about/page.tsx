import Link from "next/link"
import { ArrowLeft, Calendar, Download, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col gap-2">
        <Link href="/" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h1>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <div className="mx-auto h-32 w-32 overflow-hidden rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary">YN</span>
              </div>
              <CardTitle className="text-center text-2xl mt-4">Your Name</CardTitle>
              <CardDescription className="text-center">Software Engineer</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-center gap-2">
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://github.com/username" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="mailto:email@example.com">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Link>
                </Button>
              </div>
              <div className="text-center">
                <Button variant="outline" asChild>
                  <Link href="/resume.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>About</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                I'm a software engineer specializing in web development, with a focus on building responsive and
                accessible web applications. I have experience working with modern JavaScript frameworks and libraries,
                including React, Next.js, and Node.js.
              </p>
              <p>
                My journey in software development began with a passion for creating things that live on the internet.
                Fast-forward to today, and I've had the privilege of working on a variety of projects, from small
                business websites to complex web applications.
              </p>
              <p>
                I'm particularly interested in the intersection of technology and user experience, and I strive to
                create software that is not only functional but also intuitive and enjoyable to use.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">JavaScript/TypeScript</span>
                  <span>90%</span>
                </div>
                <Progress value={90} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">React & Next.js</span>
                  <span>85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Node.js</span>
                  <span>80%</span>
                </div>
                <Progress value={80} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">HTML/CSS</span>
                  <span>95%</span>
                </div>
                <Progress value={95} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">UI/UX Design</span>
                  <span>75%</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="relative pl-6 border-l">
                <div className="absolute left-0 top-1 h-2 w-2 -translate-x-1/2 rounded-full bg-primary"></div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Senior Frontend Developer</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-1 h-3 w-3" />
                      <span>2022 - Present</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">Company Name</p>
                  <p className="text-sm">
                    Led the development of responsive web applications using React and Next.js. Implemented state
                    management solutions and optimized performance.
                  </p>
                </div>
              </div>

              <div className="relative pl-6 border-l">
                <div className="absolute left-0 top-1 h-2 w-2 -translate-x-1/2 rounded-full bg-primary"></div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Frontend Developer</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-1 h-3 w-3" />
                      <span>2020 - 2022</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">Previous Company</p>
                  <p className="text-sm">
                    Developed and maintained web applications using JavaScript, React, and related technologies.
                    Collaborated with designers to implement UI/UX improvements.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

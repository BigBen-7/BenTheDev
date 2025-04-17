"use client";

import {
  Github,
  Linkedin,
  Mail,
  FileText,
  MessageSquare,
  Clock,
  MapPin,
  ExternalLink,
  LinkIcon,
  Download,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function ContactContent() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Get In Touch</h2>
        <p className="text-muted-foreground">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Feel free to reach out
          through any of the channels below.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="overflow-hidden border-none shadow-md bg-gradient-to-br from-primary/5 to-primary/10">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/20">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle>Email</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground mt-1">
              For project inquiries and collaborations
            </p>
          </CardContent>
          <CardFooter className="mt-4">
            <Button variant="outline" asChild className="w-full">
              <a href="mailto:benardsimon7@gmail.com">
                <MessageSquare className="mr-2 h-4 w-4" />
                Send Email
              </a>
            </Button>
          </CardFooter>
        </Card>

        <Card className="overflow-hidden border-none shadow-md bg-gradient-to-br from-primary/5 to-primary/10">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/20">
                <Github className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle>GitHub</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground mt-1">
              See my open source contributions and personal projects
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" asChild className="w-full">
              <a
                href="https://github.com/BigBen-7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Profile
              </a>
            </Button>
          </CardFooter>
        </Card>

        <Card className="overflow-hidden border-none shadow-md bg-gradient-to-br from-primary/5 to-primary/10">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/20">
                <Linkedin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle>LinkedIn</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="font-medium"></p>
            <p className="text-sm text-muted-foreground mt-1">
              Let's connect and discuss opportunities
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" asChild className="w-full">
              <a
                href="https://www.linkedin.com/in/benard-simon-181413244"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Connect
              </a>
            </Button>
          </CardFooter>
        </Card>

        <Card className="overflow-hidden border-none shadow-md bg-gradient-to-br from-primary/5 to-primary/10">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/20">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle>Resume</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
              <p className="text-xs text-muted-foreground mt-1">
                Get a comprehensive overview of my skills and experience
              </p>
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <Button variant="outline" asChild className="w-full">
              <Link
                href="https://drive.google.com/file/d/1SkiND40IFebFTnB7j8bDYwotqMrf26tX/view?usp=drive_link"
                download
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Resume
              </Link>
            </Button>
            <Button variant="outline" asChild className="w-full">
                <a href="/Benard's-resume.pdf" download>
                  <Download  />
                  Download Resume
                </a>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Availability & Working Hours</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h3 className="font-medium">Working Hours</h3>
              <p className="text-sm text-muted-foreground">
                Monday - Friday: 9:00 AM - 6:00 PM (WAT)
              </p>
              <p className="text-sm text-muted-foreground">
                I'm flexible and can accommodate different time zones for
                meetings and collaborations.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h3 className="font-medium">Location</h3>
              <p className="text-sm text-muted-foreground">
                Based in Kaduna, Nigeria
              </p>
              <p className="text-sm text-muted-foreground">
                Available for remote work worldwide and open to relocation for
                the right opportunity.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>How I Can Help</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <div className="rounded-full bg-primary/20 p-1 mt-0.5">
                <span className="text-xs text-primary font-bold">✓</span>
              </div>
              <div>
                <p className="font-medium">Frontend Development</p>
                <p className="text-sm text-muted-foreground">
                  Building responsive, accessible, and performant web
                  applications
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="rounded-full bg-primary/20 p-1 mt-0.5">
                <span className="text-xs text-primary font-bold">✓</span>
              </div>
              <div>
                <p className="font-medium">React & Next.js Development</p>
                <p className="text-sm text-muted-foreground">
                  Creating modern web applications with React and Next.js
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="rounded-full bg-primary/20 p-1 mt-0.5">
                <span className="text-xs text-primary font-bold">✓</span>
              </div>
              <div>
                <p className="font-medium">Open Source Contributions</p>
                <p className="text-sm text-muted-foreground">
                  Collaborating on open source projects and contributing to the
                  community
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="rounded-full bg-primary/20 p-1 mt-0.5">
                <span className="text-xs text-primary font-bold">✓</span>
              </div>
              <div>
                <p className="font-medium">UI/UX Implementation</p>
                <p className="text-sm text-muted-foreground">
                  Turning designs into functional, beautiful interfaces
                </p>
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

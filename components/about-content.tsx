import {
  Calendar,
  Download,
  Github,
  FileCode,
  Linkedin,
  Mail,
} from "lucide-react";
import { TbBrandNextjs, TbBrandTypescript, TbBrandReactNative } from "react-icons/tb";
import Link from "next/link";
import { FaGithub, FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { SiNestjs, SiPostgresql } from "react-icons/si";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export function AboutContent() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <div className="mx-auto h-32 w-32 overflow-hidden rounded-full bg-primary/10 flex items-center justify-center">
            <Image
              src="/IMG-20240623-WA0012-removebg-preview.png"
              alt="Ben"
              width={200}
              height={200}
              className="object-cover"
            />
          </div>
          <CardTitle className="text-center text-2xl mt-4">Benard</CardTitle>
          <CardDescription className="text-center">
            Frontend Engineer{" "}
            <span className="font-extrabold text-white">|</span> OpenSource
            Contributor
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-center gap-2">
            <Button variant="outline" size="icon" asChild>
              <Link
                href="https://github.com/BigBen-7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link
                href="https://www.linkedin.com/in/benard-simon-181413244"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="mailto:benardsimon7@gmail.com">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
          <div className="text-center">
            <Button variant="outline" asChild>
              <a href="/Benard's-resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>About Benard</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            <em>
              A creative professional with a strong portfolio in digital design,
              including experience with front-end dev. Experienced working from
              concept to production, and with stakeholders from multiple
              disciplines.
            </em>
          </p>
          <p>
            <em>
              I create websites that are a pleasure to use. I design them with
              beautiful typography, meaningful transitions, and thoughtful
              interactions that delight people.
            </em>
          </p>
        </CardContent>
      </Card>

      {/* Technologies */}
      <Card>
        <CardHeader>
          <CardTitle>Technologies</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-sm font-medium mb-2">Languages</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>
                <FileCode className="w-3 h-3" /> JavaScript
              </Badge>
              <Badge>
                <TbBrandTypescript /> TypeScript
              </Badge>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>
                <FaReact />
                React
              </Badge>
              <Badge>
                <TbBrandNextjs />
                Next.js
              </Badge>
              <Badge>
                <SiNestjs />
                NestJs
              </Badge>
              <Badge>
              <TbBrandReactNative />
                React Native
              </Badge>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Databases</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>
                <SiPostgresql />
                PostgreSQL
              </Badge>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Version Control</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>
                <FaGitAlt />
                Git
              </Badge>
              <Badge>
                <FaGithub />
                GitHub
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Experience */}
      <Card>
        <CardHeader>
          <CardTitle>Experience</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="relative pl-6 border-l">
            <div className="absolute left-0 top-1 h-2 w-2 -translate-x-1/2 rounded-full bg-primary"></div>
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Open Source Contributor</h3>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-1 h-3 w-3" />
                  <span>12/2024 - Current</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                OnlyDust Platform & Ecosystem | Remote
              </p>
              <p className="text-sm">
                Contributed to 15+ open-source projects across blockchain,
                infrastructure, and dev tooling ecosystems. Led frontend and
                backend efforts on Veritix using NestJS and Next.js. Enhanced
                UI/UX in the OnlyDust platform.
              </p>
            </div>
          </div>

          <div className="relative pl-6 border-l">
            <div className="absolute left-0 top-1 h-2 w-2 -translate-x-1/2 rounded-full bg-primary"></div>
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Frontend Training Program</h3>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-1 h-3 w-3" />
                  <span>04/2024 - 10/2024</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Leadway Insurance Company Ltd. | Kaduna, Nigeria
              </p>
              <p className="text-sm">
                Completed a 6-month frontend development training program. Built
                dynamic applications including Feedback App and GitHub Finder.
                Led a team of 7 on projects including Shepherd and a referral
                app management system.
              </p>
            </div>
          </div>

          <div className="relative pl-6 border-l">
            <div className="absolute left-0 top-1 h-2 w-2 -translate-x-1/2 rounded-full bg-primary"></div>
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Volunteer Frontend Mentor</h3>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-1 h-3 w-3" />
                  <span>03/2023 - 11/2023</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Code for Africa | Remote
              </p>
              <p className="text-sm">
                Mentored aspiring developers in frontend technologies through
                weekly virtual sessions. Guided 5+ students through building
                their first React applications. Created learning resources and
                code reviews to help participants improve their skills.
              </p>
            </div>
          </div>

          <div className="relative pl-6 border-l">
            <div className="absolute left-0 top-1 h-2 w-2 -translate-x-1/2 rounded-full bg-primary"></div>
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Intern</h3>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-1 h-3 w-3" />
                  <span>02/2022 - 12/2022</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Ihifix Digital Academy | Kaduna, Nigeria
              </p>
              <p className="text-sm">
                Contributed to UI design and web application development.
                Created responsive web layouts using HTML, CSS, and JavaScript.
                Debugged code, collaborated with designers, and optimized web
                performance.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

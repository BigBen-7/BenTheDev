"use client";

import { Linkedin, Mail, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ContactContent() {
  return (
    <div className="space-y-7">
      <div className="space-y-1.5">
        <h2 className="text-2xl font-bold">Get In Touch</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          I&apos;m always open to new projects, collaborations, and opportunities.
          Reach out through any of the channels below.
        </p>
      </div>

      {/* Quick channels */}
      <div className="flex gap-3">
        <a
          href="mailto:benardsimon7@gmail.com"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border px-4 py-3 transition-colors hover:bg-accent hover:border-primary/30"
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
            <Mail className="h-4 w-4 text-primary" />
          </div>
          <p className="text-sm font-medium">Email</p>
        </a>
        <a
          href="https://www.linkedin.com/in/benard-simon-181413244"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border px-4 py-3 transition-colors hover:bg-accent hover:border-primary/30"
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
            <Linkedin className="h-4 w-4 text-primary" />
          </div>
          <p className="text-sm font-medium">LinkedIn</p>
        </a>
      </div>

      {/* Availability */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-primary text-base">Availability</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <p className="text-sm font-medium">Open to work · Remote · WAT (UTC+1)</p>
          </div>
          <div className="flex items-start gap-3 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
            <span>Based in Kaduna, Nigeria · Available worldwide · Open to relocation</span>
          </div>
        </CardContent>
      </Card>

      {/* How I Can Help */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-primary text-base">How I Can Help</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {[
              { title: "Web Development", desc: "Responsive, accessible, and performant web apps with React & Next.js" },
              { title: "Mobile Development", desc: "Cross-platform mobile apps with React Native and TypeScript" },
              { title: "UI/UX Implementation", desc: "Turning designs into polished, delightful interfaces" },
              { title: "Open Source", desc: "Contributing to projects across blockchain, infrastructure, and dev tooling" },
            ].map(({ title, desc }) => (
              <li key={title} className="flex items-start gap-3">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15">
                  <span className="text-[10px] text-green-500 font-bold">✓</span>
                </div>
                <div>
                  <p className="text-sm font-medium">{title}</p>
                  <p className="text-xs text-muted-foreground">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

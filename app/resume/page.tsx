import Link from "next/link";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResumePage() {
  return (
    <div className="flex flex-col h-screen bg-background">

      {/* ── Header ──────────────────────────────────────── */}
      <header className="shrink-0 nav-glass z-10">
        <div className="flex h-14 items-center justify-between px-4 md:px-6">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>

          <p className="text-sm font-semibold absolute left-1/2 -translate-x-1/2">
            Benard Simon — Resume
          </p>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Open
              </a>
            </Button>
            <Button size="sm" asChild>
              <a
                href="/resume.pdf"
                download="Benard-Simon-Resume.pdf"
                className="flex items-center gap-1.5"
              >
                <Download className="h-3.5 w-3.5" />
                Download
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* ── PDF viewer ──────────────────────────────────── */}
      <div className="flex-1 overflow-hidden p-4 md:p-6">
        <div className="h-full w-full overflow-hidden rounded-xl border border-border/60 shadow-sm">
          <iframe
            src="/resume.pdf"
            className="h-full w-full"
            title="Benard Simon Resume"
          />
        </div>
      </div>
    </div>
  );
}

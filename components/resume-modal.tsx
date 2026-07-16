"use client";

import { useState } from "react";
import { FileText, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

interface ResumeModalProps {
  variant?: "outline" | "default" | "ghost" | "link";
  className?: string;
  label?: string;
}

export function ResumeModal({
  variant = "outline",
  className,
  label = "View Resume",
}: ResumeModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant={variant} className={className} onClick={() => setOpen(true)}>
        <FileText className="mr-2 h-4 w-4" />
        {label}
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl w-[90vw] h-[90vh] flex flex-col gap-0 p-0 overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3.5 border-b shrink-0">
            <DialogTitle className="text-sm font-semibold">Benard Simon — Resume</DialogTitle>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" asChild className="h-8 gap-1.5 text-xs">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3.5 w-3.5" />
                  Open in tab
                </a>
              </Button>
              <Button size="sm" asChild className="h-8 gap-1.5 text-xs">
                <a href="/resume.pdf" download="Benard-Simon-Resume.pdf">
                  <Download className="h-3.5 w-3.5" />
                  Download
                </a>
              </Button>
            </div>
          </div>
          <iframe
            src="/resume.pdf"
            className="flex-1 w-full"
            title="Benard Simon Resume"
          />
        </DialogContent>
      </Dialog>
    </>
  );
}

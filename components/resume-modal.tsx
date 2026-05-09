"use client"

import { useState } from "react"
import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"

interface ResumeModalProps {
  variant?: "outline" | "default" | "ghost" | "link"
  className?: string
  label?: string
}

export function ResumeModal({
  variant = "outline",
  className,
  label = "View Resume",
}: ResumeModalProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button variant={variant} className={className} onClick={() => setOpen(true)}>
        <FileText className="mr-2 h-4 w-4" />
        {label}
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl w-[90vw] h-[90vh] flex flex-col gap-0 p-0">
          <div className="px-6 py-4 border-b shrink-0">
            <DialogTitle className="text-base font-semibold">Resume</DialogTitle>
          </div>
          <iframe
            src="/resume.pdf"
            className="flex-1 w-full rounded-b-lg"
            title="Benard Simon Resume"
          />
        </DialogContent>
      </Dialog>
    </>
  )
}

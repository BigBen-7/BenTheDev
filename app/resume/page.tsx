import Link from "next/link"
import { ArrowLeft, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ResumePage() {
  return (
    <div className="flex flex-col h-screen">
      <div className="border-b px-4 py-3 flex items-center gap-4 shrink-0">
        <Link
          href="/"
          className="flex items-center text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Link>
        <Button size="sm" variant="outline" asChild className="ml-auto">
          <a href="/Benard's-resume.pdf" download>
            <Download className="mr-2 h-4 w-4" />
            Download
          </a>
        </Button>
      </div>
      <iframe
        src="/Benard's-resume.pdf"
        className="flex-1 w-full"
        title="Benard Simon Resume"
      />
    </div>
  )
}

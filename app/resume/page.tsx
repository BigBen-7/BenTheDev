import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ResumePage() {
  return (
    <div className="flex flex-col h-screen">
      <div className="border-b px-4 py-3 flex items-center shrink-0">
        <Link
          href="/"
          className="flex items-center text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Link>
      </div>
      <iframe
        src="/resume.pdf"
        className="flex-1 w-full"
        title="Benard Simon Resume"
      />
    </div>
  )
}

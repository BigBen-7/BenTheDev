"use client"

import type React from "react"

import { useState } from "react"
import { Github, Linkedin, Mail, Send, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export function ContactContent() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      })
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Send a Message</CardTitle>
          <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="focus-visible:ring-primary"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your email address"
                value={formData.email}
                onChange={handleChange}
                required
                className="focus-visible:ring-primary"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={handleChange}
                required
                className="focus-visible:ring-primary"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                required
                className="min-h-[150px] focus-visible:ring-primary"
              />
            </div>
            <Button
              type="submit"
              className="w-full transition-all hover:bg-primary/90 hover:scale-[1.02]"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
          <CardDescription>Here are the ways you can reach me directly.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="group flex items-center gap-4 p-3 transition-colors hover:bg-muted/50 rounded-lg">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Email</h3>
              <p className="text-sm text-muted-foreground">
                <a href="mailto:benardsimon7@gmail.com" className="hover:text-primary transition-colors">
                  benardsimon7@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="group flex items-center gap-4 p-3 transition-colors hover:bg-muted/50 rounded-lg">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Github className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">GitHub</h3>
              <p className="text-sm text-muted-foreground">
                <a
                  href="https://github.com/BigBen-7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  github.com/BigBen-7
                </a>
              </p>
            </div>
          </div>

          <div className="group flex items-center gap-4 p-3 transition-colors hover:bg-muted/50 rounded-lg">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Linkedin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">LinkedIn</h3>
              <p className="text-sm text-muted-foreground">
                <a
                  href="https://www.linkedin.com/in/benard-simon-181413244"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  linkedin.com/in/benard-simon-181413244
                </a>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

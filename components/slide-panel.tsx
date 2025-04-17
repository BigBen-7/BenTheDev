"use client";

import type React from "react";

import { useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SlidePanelProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
  side?: "right" | "left";
}

export function SlidePanel({
  isOpen,
  onClose,
  children,
  title,
  side = "right",
}: SlidePanelProps) {
  // Prevent scrolling when panel is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={cn(
          "fixed inset-y-0 z-50 w-full sm:max-w-lg bg-background shadow-lg transition-transform duration-300 ease-in-out",
          side === "right" ? "right-0" : "left-0",
          isOpen
            ? "translate-x-0"
            : side === "right"
            ? "translate-x-full"
            : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col overflow-auto">
          <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <h2 className="text-lg font-semibold">{title}</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <div className="flex-1 overflow-auto p-4 sm:p-6">{children}</div>
        </div>
      </div>
    </>
  );
}

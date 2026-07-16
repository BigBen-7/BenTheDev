"use client";

import { useState, useEffect } from "react";

const roles = [
  "Software Engineer",
  "Mobile Developer",
  "Backend Engineer",
  "OSS Contributor",
  "Full Stack Builder",
];

export function AnimatedRole() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[index];
    const typingSpeed = isDeleting ? 40 : 95;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText((prev) => prev.slice(0, -1));
      } else {
        setDisplayText((prev) => fullText.slice(0, prev.length + 1));
      }

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
    <span className="text-primary font-semibold">
      {displayText}
      <span className="ml-0.5 animate-pulse text-primary/50">|</span>
    </span>
  );
}

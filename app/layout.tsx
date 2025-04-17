import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Benard Simon | Frontend Engineer",
  description: "Frontend Engineer and OpenSource Contributor portfolio",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    title: "Benard Simon | Frontend Engineer",
    description:
      "Explore my portfolio, open-source contributions, and frontend projects.",
    url: "https://ben-the-dev.vercel.app/",
    siteName: "Benard Simon Portfolio",
    images: [
      {
        url: "/Benard.png",
        width: 1200,
        height: 630,
        alt: "Benard Simon Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Benard Simon | Frontend Engineer",
    description: "Frontend Engineer and OpenSource Contributor portfolio",
    images: ["/Benard.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";

import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"

import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Arpit Kukreti - Full Stack Developer",
  description:
    "Portfolio of Arpit Kukreti - Smart India Hackathon 2024 Winner & Full Stack Developer specializing in MERN stack",
 
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
      
      </body>
    </html>
  )
}

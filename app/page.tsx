"use client";

import { GradientBackground } from "@/components/gradient-background";
import { TranscriptFetcher } from "@/components/transcript-fetcher";
import { Features } from "@/components/features";
import { Toaster } from "@/components/ui/sonner";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <GradientBackground />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
            YouTube Transcript Fetcher
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Extract and manage YouTube video transcripts with ease. Support for multiple languages,
            instant copying, and download functionality.
          </p>
        </div>
        <TranscriptFetcher />
        <Features />
      </div>
      <Toaster />
    </main>
  );
}
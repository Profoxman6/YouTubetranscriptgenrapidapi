"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Loader2 } from "lucide-react";

interface TranscriptViewProps {
  transcript: string | null;
  isLoading: boolean;
  error: string | null;
}

export function TranscriptView({ transcript, isLoading, error }: TranscriptViewProps) {
  if (isLoading) {
    return (
      <div className="h-[400px] flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-[400px] flex items-center justify-center text-destructive">
        {error}
      </div>
    );
  }

  if (!transcript) {
    return (
      <div className="h-[400px] flex items-center justify-center text-muted-foreground">
        Enter a YouTube URL or video ID to fetch the transcript
      </div>
    );
  }

  return (
    <ScrollArea className="h-[400px] rounded-md border p-4">
      <div className="whitespace-pre-wrap">{transcript}</div>
    </ScrollArea>
  );
}
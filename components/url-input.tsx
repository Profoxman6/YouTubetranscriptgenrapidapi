"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Youtube } from "lucide-react";
import { toast } from "sonner";

interface URLInputProps {
  onVideoIdSubmit: (videoId: string) => void;
}

export function URLInput({ onVideoIdSubmit }: URLInputProps) {
  const [input, setInput] = useState("");

  const extractVideoId = (url: string) => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /^[a-zA-Z0-9_-]{11}$/
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const videoId = extractVideoId(input.trim());
    
    if (!videoId) {
      toast.error("Please enter a valid YouTube URL or video ID");
      return;
    }

    onVideoIdSubmit(videoId);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-6">
      <div className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter YouTube URL or video ID"
          className="flex-1"
        />
        <Button type="submit">
          <Youtube className="mr-2 h-4 w-4" />
          Fetch
        </Button>
      </div>
    </form>
  );
}
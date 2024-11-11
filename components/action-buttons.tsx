"use client";

import { Button } from "@/components/ui/button";
import { Copy, Download } from "lucide-react";
import { toast } from "sonner";

interface ActionButtonsProps {
  transcript: string;
  videoId: string;
}

export function ActionButtons({ transcript, videoId }: ActionButtonsProps) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(transcript);
      toast.success("Transcript copied to clipboard");
    } catch (error) {
      toast.error("Failed to copy transcript");
    }
  };

  const handleDownload = () => {
    const blob = new Blob([transcript], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `transcript-${videoId}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("Transcript downloaded");
  };

  return (
    <div className="flex gap-2 mt-4">
      <Button variant="outline" onClick={handleCopy}>
        <Copy className="mr-2 h-4 w-4" />
        Copy
      </Button>
      <Button variant="outline" onClick={handleDownload}>
        <Download className="mr-2 h-4 w-4" />
        Download
      </Button>
    </div>
  );
}
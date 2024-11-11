"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { URLInput } from "@/components/url-input";
import { LanguageSelector } from "@/components/language-selector";
import { TranscriptView } from "@/components/transcript-view";
import { ActionButtons } from "@/components/action-buttons";
import { useTranscript } from "@/hooks/use-transcript";

export function TranscriptFetcher() {
  const [videoId, setVideoId] = useState("");
  const { transcript, languages, selectedLanguage, setSelectedLanguage, isLoading, error } = 
    useTranscript(videoId);

  return (
    <Card className="backdrop-blur-sm bg-white/50 dark:bg-gray-950/50 p-6 rounded-xl shadow-xl max-w-4xl mx-auto mb-16">
      <URLInput onVideoIdSubmit={setVideoId} />
      
      {languages.length > 0 && (
        <LanguageSelector
          languages={languages}
          selectedLanguage={selectedLanguage}
          onLanguageSelect={setSelectedLanguage}
        />
      )}
      
      <TranscriptView
        transcript={transcript}
        isLoading={isLoading}
        error={error}
      />
      
      {transcript && (
        <ActionButtons transcript={transcript} videoId={videoId} />
      )}
    </Card>
  );
}
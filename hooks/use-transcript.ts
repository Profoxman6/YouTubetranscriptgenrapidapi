"use client";

import { useState, useEffect } from "react";

interface Language {
  code: string;
  name: string;
}

export function useTranscript(videoId: string) {
  const [transcript, setTranscript] = useState<string | null>(null);
  const [languages, setLanguages] = useState<Language[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!videoId) return;

    const fetchTranscript = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/transcript?video_id=${videoId}`);

        if (!response.ok) {
          throw new Error("Failed to fetch transcript");
        }

        const data = await response.json();
        
        if (!data.length) {
          throw new Error("No transcript available for this video");
        }

        const availableLanguages = data.map((item: any) => ({
          code: item.language_code,
          name: item.language,
        }));

        setLanguages(availableLanguages);
        setSelectedLanguage(availableLanguages[0].code);

        // Format transcript text from the first language
        const transcriptText = data[0].transcription
          .map((item: any) => item.text)
          .join("\n");

        setTranscript(transcriptText);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setTranscript(null);
        setLanguages([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTranscript();
  }, [videoId]);

  useEffect(() => {
    if (!selectedLanguage || !videoId || languages.length === 0) return;

    const fetchLanguageTranscript = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `/api/transcript?video_id=${videoId}&lang=${selectedLanguage}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch transcript");
        }

        const data = await response.json();
        
        if (!data.length) {
          throw new Error("No transcript available for this language");
        }

        // Format transcript text
        const transcriptText = data[0].transcription
          .map((item: any) => item.text)
          .join("\n");

        setTranscript(transcriptText);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setTranscript(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLanguageTranscript();
  }, [selectedLanguage, videoId, languages.length]);

  return {
    transcript,
    languages,
    selectedLanguage,
    setSelectedLanguage,
    isLoading,
    error,
  };
}
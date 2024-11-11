"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Language {
  code: string;
  name: string;
}

interface LanguageSelectorProps {
  languages: Language[];
  selectedLanguage: string;
  onLanguageSelect: (code: string) => void;
}

export function LanguageSelector({
  languages,
  selectedLanguage,
  onLanguageSelect,
}: LanguageSelectorProps) {
  if (languages.length === 0) return null;

  return (
    <div className="mb-6">
      <Select value={selectedLanguage} onValueChange={onLanguageSelect}>
        <SelectTrigger className="w-full md:w-[200px]">
          <SelectValue placeholder="Select language" />
        </SelectTrigger>
        <SelectContent>
          {languages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code}>
              {lang.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
import {
  BookOpen,
  Globe2,
  Copy,
  Download,
  Laptop,
  Moon,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Instant Transcripts",
    description: "Get video transcripts instantly from any YouTube URL or video ID",
  },
  {
    icon: Globe2,
    title: "Multiple Languages",
    description: "Support for transcripts in various languages when available",
  },
  {
    icon: Copy,
    title: "Easy Copying",
    description: "Copy transcripts to clipboard with a single click",
  },
  {
    icon: Download,
    title: "Download Support",
    description: "Save transcripts as text files for offline access",
  },
  {
    icon: Laptop,
    title: "Responsive Design",
    description: "Works seamlessly across all devices and screen sizes",
  },
  {
    icon: Moon,
    title: "Dark Mode",
    description: "Comfortable viewing experience in any lighting condition",
  },
];

export function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="backdrop-blur-sm bg-white/50 dark:bg-gray-950/50 p-6 rounded-xl shadow-lg"
        >
          <feature.icon className="h-12 w-12 text-purple-600 dark:text-purple-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-muted-foreground">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
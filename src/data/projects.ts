export type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imagePath?: string;
  githubLink: string;
  appStoreLink?: string;
  category: "Work" | "Side Project";
  visualType: "screenshot" | "code" | "diagram";
};

export const projects: Project[] = [
  {
    id: "aurora-notes",
    title: "Aurora Notes",
    description:
      "A minimal note app with on-device sync, haptics, and rich text for quick capture.",
    techStack: ["SwiftUI", "Combine", "Core Data", "WidgetKit"],
    imagePath: "/projects/default-project.png",
    githubLink: "https://github.com/",
    appStoreLink: "https://apps.apple.com/",
    category: "Side Project",
    visualType: "screenshot",
  },
  {
    id: "pulse-tracker",
    title: "Pulse Tracker",
    description:
      "Health insights with smooth charts, offline-first caching, and privacy-first analytics.",
    techStack: ["Swift", "HealthKit", "Charts", "CloudKit"],
    imagePath: "/projects/default-project.png",
    githubLink: "https://github.com/",
    appStoreLink: "https://apps.apple.com/",
    category: "Work",
    visualType: "screenshot",
  },
  {
    id: "waypoint",
    title: "Waypoint",
    description:
      "Location-aware to-dos that trigger subtle notifications when you arrive at places.",
    techStack: ["SwiftUI", "MapKit", "Background Tasks", "Push Notifications"],
    imagePath: "/projects/default-project.png",
    githubLink: "https://github.com/",
    appStoreLink: "https://apps.apple.com/",
    category: "Side Project",
    visualType: "screenshot",
  },
];






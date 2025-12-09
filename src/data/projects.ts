export type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imagePath: string;
  githubLink: string;
  appStoreLink: string;
};

export const projects: Project[] = [
  {
    id: "aurora-notes",
    title: "Aurora Notes",
    description:
      "A minimal note app with on-device sync, haptics, and rich text for quick capture.",
    techStack: ["SwiftUI", "Combine", "Core Data", "WidgetKit"],
    imagePath: "/projects/aurora-notes.png",
    githubLink: "https://github.com/",
    appStoreLink: "https://apps.apple.com/",
  },
  {
    id: "pulse-tracker",
    title: "Pulse Tracker",
    description:
      "Health insights with smooth charts, offline-first caching, and privacy-first analytics.",
    techStack: ["Swift", "HealthKit", "Charts", "CloudKit"],
    imagePath: "/projects/pulse-tracker.png",
    githubLink: "https://github.com/",
    appStoreLink: "https://apps.apple.com/",
  },
  {
    id: "waypoint",
    title: "Waypoint",
    description:
      "Location-aware to-dos that trigger subtle notifications when you arrive at places.",
    techStack: ["SwiftUI", "MapKit", "Background Tasks", "Push Notifications"],
    imagePath: "/projects/waypoint.png",
    githubLink: "https://github.com/",
    appStoreLink: "https://apps.apple.com/",
  },
];


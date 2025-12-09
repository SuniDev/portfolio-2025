type ExperienceItem = {
  period: string;
  company: string;
  role: string;
  achievements: string[];
  techStack: string[];
};

const experience: ExperienceItem[] = [
  {
    period: "2022 — Present",
    company: "Nebula Labs",
    role: "Senior iOS Engineer",
    achievements: [
      "Shipped a redesign that increased retention by 18% through smoother onboarding and haptic feedback.",
      "Led migration from UIKit to SwiftUI for core flows with a 35% reduction in UI regressions.",
      "Introduced modular architecture with feature flags to ship faster without blocking QA.",
    ],
    techStack: ["Swift", "SwiftUI", "Combine", "WidgetKit", "Feature Flags"],
  },
  {
    period: "2020 — 2022",
    company: "Photon Studio",
    role: "iOS Engineer",
    achievements: [
      "Built offline-first sync for activity logs using background tasks and CloudKit.",
      "Implemented live charts with accessibility-friendly interactions for VO users.",
      "Reduced cold start by 25% via asset slimming and lazy dependency loading.",
    ],
    techStack: ["Swift", "UIKit", "RxSwift", "HealthKit", "Charts"],
  },
  {
    period: "2018 — 2020",
    company: "Indie Apps",
    role: "iOS Developer",
    achievements: [
      "Launched and maintained two consumer apps with 100k+ downloads and 4.7+ ratings.",
      "Implemented in-app purchase flows with receipt validation and server-side checks.",
      "Set up CI pipelines for automated UI testing on multiple device sizes.",
    ],
    techStack: ["Swift", "UIKit", "RxSwift", "Core Data", "Fastlane"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.25em] text-electric-blue/70">
          Timeline
        </p>
        <h2 className="bg-gradient-to-r from-electric-blue via-white to-electric-blue bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
          Experience
        </h2>
      </div>
      <div className="relative space-y-10">
        <div className="absolute left-24 top-0 hidden h-full w-px bg-white/10 sm:block" />
        {experience.map((item, index) => (
          <div
            key={item.company + item.period}
            className="grid gap-4 sm:grid-cols-[140px_1fr] sm:gap-8"
          >
            <div className="sm:text-right">
              <p className="text-sm font-semibold text-electric-blue">
                {item.period}
              </p>
            </div>
            <div className="relative rounded-2xl border border-white/5 bg-white/5 p-6 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.7)]">
              <div className="absolute -left-4 top-6 hidden h-3 w-3 rounded-full border border-electric-blue bg-background sm:block" />
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-semibold text-white">
                    {item.company}
                  </h3>
                  <span className="rounded-full border border-electric-blue/40 px-3 py-1 text-xs font-semibold text-electric-blue">
                    {item.role}
                  </span>
                </div>
                <ul className="mt-2 space-y-2 text-sm text-foreground/85">
                  {item.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-electric-blue/80" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-foreground/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


"use client";

import type { Project } from "@/data/projects";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProjectCard({ project }: { project: Project }) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/projects/${project.id}`);
  };

  const renderVisual = () => {
    switch (project.visualType) {
      case "screenshot":
        return project.imagePath ? (
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src={project.imagePath}
              alt={project.title}
              fill
              unoptimized
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          </div>
        ) : null;

      case "code":
        return (
          <div className="flex h-full w-full flex-col bg-[#0d1117] p-6 font-mono">
            <div className="mb-4 flex gap-2">
              <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="flex-1 space-y-4">
              <div className="space-y-2">
                <div className="text-xs text-[#8b949e]">// Tech Stack</div>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={tech}
                      className="text-lg font-semibold text-electric-blue"
                      style={{
                        animationDelay: `${idx * 0.1}s`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-1.5 pt-4">
                <div className="text-xs text-[#8b949e]">// Key Features</div>
                <div className="space-y-1 text-sm text-[#c9d1d9]">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <div key={tech} className="flex items-center gap-2">
                      <span className="text-electric-blue">→</span>
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case "diagram":
        return (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-background via-background/50 to-background/30 p-8">
            <div className="relative w-full max-w-xs">
              <svg
                viewBox="0 0 200 200"
                className="h-full w-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="diagramGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      stopColor="rgba(125, 249, 255, 0.3)"
                    />
                    <stop
                      offset="100%"
                      stopColor="rgba(125, 249, 255, 0.1)"
                    />
                  </linearGradient>
                </defs>
                <rect
                  x="20"
                  y="20"
                  width="60"
                  height="60"
                  rx="4"
                  fill="url(#diagramGradient)"
                  stroke="rgba(125, 249, 255, 0.4)"
                  strokeWidth="2"
                />
                <rect
                  x="120"
                  y="20"
                  width="60"
                  height="60"
                  rx="4"
                  fill="url(#diagramGradient)"
                  stroke="rgba(125, 249, 255, 0.4)"
                  strokeWidth="2"
                />
                <rect
                  x="70"
                  y="120"
                  width="60"
                  height="60"
                  rx="4"
                  fill="url(#diagramGradient)"
                  stroke="rgba(125, 249, 255, 0.4)"
                  strokeWidth="2"
                />
                <path
                  d="M 50 50 L 120 50"
                  stroke="rgba(125, 249, 255, 0.5)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M 150 50 L 100 120"
                  stroke="rgba(125, 249, 255, 0.5)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M 50 50 L 100 120"
                  stroke="rgba(125, 249, 255, 0.5)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="3"
                  fill="rgba(125, 249, 255, 0.8)"
                />
                <circle
                  cx="150"
                  cy="50"
                  r="3"
                  fill="rgba(125, 249, 255, 0.8)"
                />
                <circle
                  cx="100"
                  cy="150"
                  r="3"
                  fill="rgba(125, 249, 255, 0.8)"
                />
              </svg>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <article
      onClick={handleCardClick}
      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-40px_rgba(125,249,255,0.45)] cursor-pointer"
    >
      <div className="relative aspect-[4/5] min-h-[500px] overflow-hidden sm:min-h-[600px]">
        {renderVisual()}
        {project.visualType === "screenshot" && (
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        )}
      </div>
      <div className="absolute inset-0 flex flex-col justify-end gap-3 p-6">
        <div className="flex items-center gap-3">
          <span className="rounded-full border border-electric-blue/30 bg-electric-blue/10 px-3 py-1 text-xs font-medium text-electric-blue">
            {project.category}
          </span>
          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.18em] text-electric-blue/80">
            {project.techStack.slice(0, 3).map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <div className="space-y-1.5">
            <div className="text-xs font-semibold uppercase tracking-wider text-electric-blue/60">
              핵심 기여
            </div>
            <p className="text-sm leading-relaxed text-foreground/90">
              {project.description}
            </p>
          </div>
        </div>
        <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
          {project.appStoreLink && (
            <a
              href={project.appStoreLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-electric-blue px-4 py-2 text-xs font-semibold text-background transition hover:-translate-y-0.5 hover:shadow-[0_15px_45px_-20px_rgba(125,249,255,0.8)]"
            >
              App Store
            </a>
          )}
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-electric-blue/40 px-4 py-2 text-xs font-semibold text-electric-blue transition hover:-translate-y-0.5 hover:border-electric-blue hover:bg-electric-blue/10"
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}






import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-40px_rgba(125,249,255,0.45)]">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={project.imagePath}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>
      <div className="absolute inset-0 flex flex-col justify-end gap-3 p-6">
        <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.18em] text-electric-blue/80">
          {project.techStack.slice(0, 3).map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <p className="text-sm text-foreground/80">{project.description}</p>
        </div>
        <div className="flex gap-3">
          <a
            href={project.appStoreLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-electric-blue px-4 py-2 text-xs font-semibold text-background transition hover:-translate-y-0.5 hover:shadow-[0_15px_45px_-20px_rgba(125,249,255,0.8)]"
          >
            App Store
          </a>
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


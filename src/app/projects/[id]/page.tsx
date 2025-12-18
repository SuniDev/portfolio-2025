import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto min-h-screen max-w-4xl px-6 py-24">
      <Link
        href="/#projects"
        className="mb-8 inline-flex items-center gap-2 text-sm text-electric-blue/80 transition hover:text-electric-blue"
      >
        <span>←</span> Back to Projects
      </Link>

      <div className="space-y-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-electric-blue/30 bg-electric-blue/10 px-3 py-1 text-xs font-medium text-electric-blue">
              {project.category}
            </span>
          </div>
          <h1 className="bg-gradient-to-r from-electric-blue via-white to-electric-blue bg-clip-text text-4xl font-semibold text-transparent sm:text-5xl">
            {project.title}
          </h1>
          <p className="text-lg leading-relaxed text-foreground/90">
            {project.description}
          </p>
        </div>

        {project.imagePath && (
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/5">
            <Image
              src={project.imagePath}
              alt={project.title}
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        )}

        <div className="space-y-6">
          <div>
            <h2 className="mb-4 text-xl font-semibold text-white">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-electric-blue/30 bg-electric-blue/10 px-4 py-2 text-sm font-medium text-electric-blue"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            {project.appStoreLink && (
              <a
                href={project.appStoreLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-electric-blue px-6 py-3 font-semibold text-background transition hover:-translate-y-0.5 hover:shadow-[0_15px_45px_-20px_rgba(125,249,255,0.8)]"
              >
                App Store
              </a>
            )}
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-electric-blue/40 px-6 py-3 font-semibold text-electric-blue transition hover:-translate-y-0.5 hover:border-electric-blue hover:bg-electric-blue/10"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


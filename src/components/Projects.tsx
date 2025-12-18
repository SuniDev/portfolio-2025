import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <div className="mb-10 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-electric-blue/70">
            Selected Work
          </p>
          <h2 className="bg-gradient-to-r from-electric-blue via-white to-electric-blue bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
            Projects
          </h2>
        </div>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}






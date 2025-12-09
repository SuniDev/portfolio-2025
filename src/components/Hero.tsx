export default function Hero() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-6">
      <div className="fade-up flex max-w-3xl flex-col items-center gap-6 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-foreground/60">
          Welcome
        </p>
        <h1 className="bg-gradient-to-r from-electric-blue via-white to-electric-blue bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl">
          Hello, I&apos;m [Name].
        </h1>
        <p className="text-lg text-foreground/80 sm:text-xl">
          iOS Engineer focused on User Experience
        </p>
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-full bg-electric-blue px-6 py-3 text-sm font-semibold text-background shadow-[0_10px_40px_-15px_rgba(125,249,255,0.6)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-20px_rgba(125,249,255,0.75)]"
        >
          View Projects
        </a>
      </div>
    </section>
  );
}


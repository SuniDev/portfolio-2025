const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-foreground/80 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-electric-blue"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-electric-blue"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-foreground/60">
          © {currentYear} Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}


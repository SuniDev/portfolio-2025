import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col gap-12 pb-16 pt-8 sm:gap-16 sm:pt-12">
      <Hero />
      <Projects />
      <Experience />
    </main>
  );
}

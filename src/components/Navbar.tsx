"use client";

import { useRouter, usePathname } from "next/navigation";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (pathname !== "/") {
      // Navigate to home page with hash, then scroll
      window.location.href = `/${href}`;
    } else {
      const element = document.querySelector(href);
      if (element) {
        const navHeight = 60; // approximate navbar height
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-background/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="/"
          onClick={(e) => {
            if (pathname !== "/") {
              e.preventDefault();
              router.push("/");
            }
          }}
          className="text-lg font-semibold text-electric-blue transition hover:opacity-80"
        >
          Portfolio
        </a>
        <div className="flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="transition hover:text-electric-blue"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}






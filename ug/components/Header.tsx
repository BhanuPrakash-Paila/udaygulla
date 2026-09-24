"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      const visibleSection = navItems.reduce((current, item) => {
        const section = document.getElementById(item.id);
        if (!section) return current;
        if (section.offsetTop <= scrollPosition) {
          return item.id;
        }
        return current;
      }, navItems[0].id);
      setActiveSection(visibleSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/90 bg-white/95 shadow-lg shadow-slate-300/30 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
        <div className="flex items-center gap-3 text-lg font-semibold tracking-tight text-slate-900">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-100 text-sky-700 shadow-lg shadow-sky-200/60">
            UD
          </div>
          <span>Uday Portfolio</span>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
              className={`transition ${
                activeSection === item.id
                  ? "text-slate-900 underline decoration-sky-500/50 underline-offset-8"
                  : "hover:text-slate-900"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:text-slate-900 md:hidden"
        >
          <span className="relative block h-5 w-5">
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-full bg-current transition-transform ${
                menuOpen ? "-translate-y-1.5 rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-full bg-current transition-opacity ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-full bg-current transition-transform ${
                menuOpen ? "translate-y-1.5 -rotate-45" : "translate-y-1.5"
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`${menuOpen ? "block" : "hidden"} border-t border-slate-200 bg-white/95 md:hidden`}
      >
        <nav className="space-y-1 px-6 py-4 text-sm font-medium text-slate-600">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
              className={`block rounded-3xl px-4 py-3 transition ${
                activeSection === item.id
                  ? "bg-white text-slate-900 shadow-sm"
                  : "hover:bg-white hover:text-slate-900"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

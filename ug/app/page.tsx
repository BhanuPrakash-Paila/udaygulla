import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="portfolio-canvas min-h-screen text-slate-100">
      <Header />
      <main className="mx-auto w-full max-w-7xl px-6 pb-20 pt-28 sm:px-8">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-white/15 px-6 py-7 text-center text-sm leading-6 text-white/75 sm:py-8">
        <p>
          © 2026 Uday Gulla. All rights reserved. Designed &amp; developed with{" "}
          <span
            aria-label="love"
            className="text-(--portfolio-mauve)"
            role="img"
          >
            ♥
          </span>{" "}
          by Bhanu Prakash.
        </p>
      </footer>
    </div>
  );
}

"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

const projects = [
  {
    title: "The Quiet Current",
    category: "Film / Patagonia",
    image: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?w=1200&q=85",
    className: "md:col-span-7",
  },
  {
    title: "Form & Function",
    category: "Editorial / New York",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1000&q=85",
    className: "md:col-span-5 md:mt-24",
  },
  {
    title: "A Sunday in June",
    category: "Wedding / Tuscany",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=85",
    className: "md:col-span-5",
  },
  {
    title: "After Light",
    category: "Portrait / London",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=1000&q=85",
    className: "md:col-span-7 md:mt-24",
  },
];

const services = [
  [
    "01",
    "Photography",
    "Weddings, portraits, campaigns, and the in-between moments that make a story feel like yours.",
  ],
  [
    "02",
    "Moving image",
    "Short films and social cuts with a tactile, cinematic point of view from first frame to final grade.",
  ],
  [
    "03",
    "Art direction",
    "A considered visual language for launches, places, and people ready to be seen differently.",
  ],
];

function ThemeToggle({ light, onToggle }: { light: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={onToggle}
      className="theme-toggle"
    >
      <span>{light ? "Dark" : "Light"}</span>
      <i aria-hidden="true" />
    </button>
  );
}

function Header({ light, onToggle }: { light: boolean; onToggle: () => void }) {
  return (
    <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-6 text-white md:px-10">
      <a href="#top" className="text-[11px] font-semibold tracking-[.26em]">
        ATELIER / NOIR
      </a>
      <nav
        className="hidden items-center gap-8 text-[10px] uppercase tracking-[.18em] md:flex"
        aria-label="Primary"
      >
        <a href="#work">Selected work</a>
        <a href="#about">About</a>
        <a href="#contact">Inquire</a>
      </nav>
      <div className="flex items-center gap-5">
        <ThemeToggle light={light} onToggle={onToggle} />
        <a
          href="#contact"
          className="border border-white/50 px-4 py-2 text-[10px] uppercase tracking-[.16em] transition hover:bg-white hover:text-[var(--ink)]"
        >
          Start a project
        </a>
      </div>
    </header>
  );
}

export default function Home() {
  const [light, setLight] = useState(false);
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [formError, setFormError] = useState(false);
  async function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setFormError(false);
    const form = new FormData(event.currentTarget);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000"}/api/inquiries`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          message: form.get("brief"),
          consent: true,
        }),
      },
    ).catch(() => null);
    setSending(false);
    if (response?.ok) setSent(true);
    else setFormError(true);
  }
  return (
    <div id="top" className={light ? "theme-light" : ""}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <section className="relative flex min-h-[720px] items-end overflow-hidden bg-[var(--night)] text-white md:min-h-screen">
        <Image
          src="https://images.unsplash.com/photo-1531058020387-3be344556be6?w=2200&q=90"
          alt="A quiet gallery space filled with afternoon light"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/20" />
        <Header light={light} onToggle={() => setLight((value) => !value)} />
        <div className="relative z-10 w-full px-6 pb-14 md:px-10 md:pb-20">
          <div className="flex max-w-6xl items-end justify-between gap-8">
            <div className="max-w-3xl reveal">
              <p className="eyebrow mb-5 text-white/70">Photography / Moving image</p>
              <h1 className="serif text-[clamp(4rem,10vw,9.5rem)] leading-[.82] tracking-[-.04em]">
                The world,
                <br />
                <em>in its light.</em>
              </h1>
            </div>
            <p className="hidden max-w-[180px] pb-1 text-xs leading-5 text-white/70 md:block reveal reveal-delay">
              An independent image-maker for people, places, and brands with something to say.
            </p>
          </div>
        </div>
        <div className="absolute bottom-7 right-6 z-10 text-[10px] uppercase tracking-[.16em] text-white/60 md:right-10">
          Scroll to explore ↓
        </div>
      </section>
      <main id="main">
        <section id="work" className="px-6 py-24 md:px-10 md:py-36">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 flex items-end justify-between border-b border-black/15 pb-5">
              <div>
                <p className="eyebrow mb-3">01 / Selected work</p>
                <h2 className="serif text-5xl leading-none md:text-7xl">Recent stories</h2>
              </div>
              <span className="hidden text-[10px] uppercase tracking-[.16em] md:block">
                Click a story to enter ↗
              </span>
            </div>
            <div className="grid gap-x-6 gap-y-16 md:grid-cols-12 md:gap-y-28">
              {projects.map((project) => (
                <button
                  type="button"
                  key={project.title}
                  onClick={() => setSelected(project)}
                  className={`group text-left ${project.className}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-black/10">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 60vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 flex justify-between border-b border-black/15 pb-3">
                    <span className="serif text-2xl">{project.title}</span>
                    <span className="eyebrow pt-2">{project.category}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
        <section
          id="about"
          className="bg-[var(--night)] px-6 py-24 text-[var(--paper)] md:px-10 md:py-36"
        >
          <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-12 md:items-center">
            <div className="md:col-span-5">
              <p className="eyebrow mb-5 text-white/50">02 / The approach</p>
              <h2 className="serif text-5xl leading-[.92] md:text-7xl">
                Images with
                <br />
                <em>a pulse.</em>
              </h2>
            </div>
            <div className="md:col-span-5 md:col-start-8">
              <p className="text-lg leading-8 text-white/75">
                We make photographs and films that feel lived-in. Observant, quietly cinematic, and
                never over-directed. From first light to final grade, every frame is shaped by a
                sense of place.
              </p>
              <a
                href="#services"
                className="mt-10 inline-block border-b border-white/40 pb-2 text-[10px] uppercase tracking-[.16em]"
              >
                Explore the services ↗
              </a>
            </div>
          </div>
        </section>
        <section id="services" className="px-6 py-24 md:px-10 md:py-36">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow mb-10">03 / What we do</p>
            <div className="divide-y divide-black/15 border-y border-black/15">
              {services.map(([number, title, copy]) => (
                <article key={number} className="grid gap-5 py-8 md:grid-cols-12 md:items-center">
                  <span className="eyebrow md:col-span-1">{number}</span>
                  <h3 className="serif text-4xl md:col-span-4 md:text-5xl">{title}</h3>
                  <p className="max-w-md text-sm leading-6 text-[var(--muted)] md:col-span-5 md:col-start-8">
                    {copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="px-6 py-24 md:px-10 md:py-36">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow mb-10">04 / Kind words</p>
            <blockquote className="serif max-w-4xl text-4xl leading-[1.05] md:text-6xl">
              “There is a stillness in the work that lets you feel the moment, even years later.”
            </blockquote>
            <div className="mt-10 text-[10px] uppercase tracking-[.16em] text-[var(--muted)]">
              — Cora & James, A Sunday in June
            </div>
          </div>
        </section>
        <section id="contact" className="bg-[var(--rust)] px-6 py-24 text-white md:px-10 md:py-32">
          <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:items-end">
            <div>
              <p className="eyebrow mb-5 text-white/70">05 / Start a conversation</p>
              <h2 className="serif max-w-2xl text-6xl leading-[.9] md:text-8xl">
                Have a story
                <br />
                <em>in mind?</em>
              </h2>
            </div>
            <form onSubmit={submitInquiry} className="grid gap-4" aria-label="Project inquiry form">
              {sent ? (
                <p className="border border-white/50 p-5 text-sm">
                  Thank you. Your note is in the studio inbox.
                </p>
              ) : (
                <>
                  <label className="sr-only" htmlFor="name">
                    Your name
                  </label>
                  <input id="name" name="name" required placeholder="Your name" className="field" />
                  <label className="sr-only" htmlFor="email">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Email address"
                    className="field"
                  />
                  <label className="sr-only" htmlFor="brief">
                    Tell us about the project
                  </label>
                  <textarea
                    id="brief"
                    name="brief"
                    required
                    placeholder="A little about the project"
                    rows={4}
                    className="field resize-none"
                  />
                  {formError && (
                    <p className="text-sm text-white">
                      The studio inbox is offline. Please email hello@ateliernoir.studio.
                    </p>
                  )}
                  <button
                    className="mt-2 min-h-12 border border-white px-5 text-left text-[10px] uppercase tracking-[.16em] transition hover:bg-white hover:text-[var(--rust)] disabled:opacity-60"
                    type="submit"
                    disabled={sending}
                  >
                    {sending ? "Sending..." : "Send inquiry ↗"}
                  </button>
                </>
              )}
            </form>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-8 bg-[var(--ink)] px-6 py-10 text-white md:flex-row md:items-center md:justify-between md:px-10">
        <span className="text-[11px] font-semibold tracking-[.26em]">ATELIER / NOIR</span>
        <div className="flex gap-6 text-[10px] uppercase tracking-[.16em] text-white/60">
          <a href="mailto:hello@ateliernoir.studio">Email</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
      {selected && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            aria-label="Close image"
            onClick={() => setSelected(null)}
            className="absolute right-6 top-6 text-2xl text-white"
          >
            ×
          </button>
          <div
            className="relative h-[70vh] w-[90vw] max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selected.image}
              alt={selected.title}
              fill
              sizes="90vw"
              className="object-contain"
            />
            <p className="absolute -bottom-8 left-0 text-xs uppercase tracking-[.16em] text-white/70">
              {selected.title} / {selected.category}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

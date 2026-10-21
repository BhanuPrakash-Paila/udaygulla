import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    number: "01",
    title: "Photography",
    description:
      "Capture genuine emotions, meaningful details, and beautiful moments through expressive photography.",
    examples: "Portraits · Candid · Lifestyle · Product",
  },
  {
    number: "02",
    title: "Wedding & Event Films",
    description:
      "Document the atmosphere and details of weddings, engagements, birthdays, and celebrations.",
    examples: "Wedding highlights · Engagements · Events · Reels",
  },
  {
    number: "03",
    title: "Videography",
    description:
      "Create visual stories for events, personal projects, businesses, and social platforms.",
    examples: "Event films · Promotions · Lifestyle · Short-form",
  },
  {
    number: "04",
    title: "Photo & Video Editing",
    description:
      "Shape photographs and footage into polished visuals with thoughtful colour, pacing, and detail.",
    examples: "Retouching · Colour · Cinematic edits · Highlights",
  },
  {
    number: "05",
    title: "Brand & Product Content",
    description:
      "Help businesses present their products, services, and identity through considered visuals.",
    examples: "Product shoots · Promotions · Campaigns · Brand films",
  },
  {
    number: "06",
    title: "Social Media Content",
    description:
      "Create visual content designed to capture attention and communicate a story across digital platforms.",
    examples: "Instagram Reels · Content shoots · Social creatives",
  },
];

export default function Services() {
  return (
    <section id="services" className="mt-24 scroll-mt-28">
      <ScrollReveal className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--portfolio-violet)] sm:text-sm">
          What I do
        </p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight text-[var(--portfolio-plum)] sm:text-4xl">
          Creative services, crafted with purpose.
        </h2>
        <p className="mt-4 text-sm leading-7 text-[#665d66] sm:text-base">
          From capturing once-in-a-lifetime moments to creating visual content for brands, I bring
          ideas to life through photography, film, and thoughtful editing.
        </p>
      </ScrollReveal>

      <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <ScrollReveal key={service.number} delay={(index % 3) * 90} className="h-full">
            <article className="service-card group flex h-full flex-col rounded-2xl border border-[#d8cbd2] bg-white/75 p-5 shadow-[0_16px_40px_-32px_rgba(41,35,43,0.42)] transition duration-300 hover:-translate-y-1 hover:border-[var(--portfolio-mauve)] hover:bg-white hover:shadow-[0_24px_50px_-32px_rgba(41,35,43,0.5)] sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-full border border-[#d8cbd2] bg-[#f8f5f2] px-2 text-xs font-semibold text-[var(--portfolio-violet)]">
                  {service.number}
                </span>
                <span
                  aria-hidden="true"
                  className="service-accent h-px w-12 bg-[#c7a9b8] transition-all duration-300 group-hover:w-16 group-hover:bg-[var(--portfolio-violet)]"
                />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[var(--portfolio-plum)]">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#665d66]">{service.description}</p>
              <p className="mt-4 text-xs leading-5 text-[#807580]">{service.examples}</p>
              <a
                href="#contact"
                className="mt-auto inline-flex min-h-10 items-center gap-2 pt-5 text-sm font-semibold text-[var(--portfolio-violet)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--portfolio-violet)]"
              >
                Discuss this service
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  ↗
                </span>
              </a>
            </article>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-[#c7a9b8]/60 pt-6 sm:flex-row sm:items-center">
        <div>
          <h3 className="text-lg font-semibold text-[var(--portfolio-plum)]">
            Have a project in mind?
          </h3>
          <p className="mt-1 text-sm text-[#665d66]">
            Let&apos;s create something worth remembering.
          </p>
        </div>
        <a
          href="#contact"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[var(--portfolio-violet)] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#5743c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--portfolio-violet)] motion-reduce:transform-none"
        >
          Discuss your project <span aria-hidden="true">↗</span>
        </a>
      </ScrollReveal>
    </section>
  );
}

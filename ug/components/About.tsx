export default function About() {
  return (
    <section
      id="about"
      className="mt-20 scroll-mt-28 rounded-[2rem] border border-slate-200/80 bg-white/90 p-7 shadow-[0_20px_60px_-30px_rgba(17,24,39,0.2)] backdrop-blur-xl sm:p-10 lg:p-12"
    >
      <div className="grid gap-9 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="about-reveal space-y-6">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-indigo-700 sm:text-sm">
            <span aria-hidden="true" className="h-px w-8 bg-indigo-500" />A little about me
          </p>
          <h2 className="max-w-lg text-4xl font-semibold leading-[1.12] text-slate-950 sm:text-5xl">
            I look for the feeling behind the frame.
          </h2>
          <p className="max-w-md text-sm font-medium leading-7 text-slate-500 sm:text-base">
            Photography <span className="px-1.5 text-teal-600">/</span> Film{" "}
            <span className="px-1.5 text-teal-600">/</span> Editing{" "}
            <span className="px-1.5 text-teal-600">/</span> Words
          </p>
        </div>

        <div className="about-reveal space-y-5 text-slate-700" style={{ animationDelay: "120ms" }}>
          <p className="text-base leading-7 sm:text-lg sm:leading-8">
            I’m a freelance creative working across photography, video, and content. From weddings
            and private celebrations to corporate events and product shoots, I help people and
            brands tell their stories with care.
          </p>
          <p className="text-sm leading-7 sm:text-base sm:leading-8">
            Photography and film capture the moment; thoughtful editing, retouching, and writing
            shape how it stays with you. I bring those pieces together for social content and brand
            stories that still feel human.
          </p>
          <p className="text-sm leading-7 sm:text-base sm:leading-8">
            Every project starts with listening. I learn what matters to you, shape an idea, capture
            the moments or details that tell it best, then refine the images, film, and words into a
            finished piece ready to share.
          </p>

          <div className="flex flex-col items-start gap-4 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-medium text-slate-600">
              Have a story in mind? Let’s make it together.
            </p>
            <a
              href="#contact"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600 motion-reduce:transform-none"
            >
              Let’s talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

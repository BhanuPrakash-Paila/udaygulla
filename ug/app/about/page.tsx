import Link from "next/link";
export const metadata = {
  title: "About",
  description: "Meet Atelier Noir, an independent photography and film studio.",
};
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--night)] px-6 py-10 text-[var(--paper)] md:px-10 md:py-16">
      <Link href="/" className="text-[11px] font-semibold tracking-[.26em]">
        ATELIER / NOIR
      </Link>
      <div className="mx-auto max-w-6xl py-28 md:py-44">
        <p className="eyebrow mb-6 text-white/50">The studio</p>
        <h1 className="serif max-w-4xl text-6xl leading-[.88] md:text-9xl">
          Good work starts
          <br />
          with <em>attention.</em>
        </h1>
        <div className="mt-20 grid gap-10 md:grid-cols-2 md:gap-24">
          <p className="text-xl leading-8 text-white/80">
            Atelier Noir is an independent photography and moving image studio working between
            London, New York, and wherever the story takes us.
          </p>
          <p className="text-sm leading-7 text-white/60">
            We partner with thoughtful people and teams across editorial, hospitality, fashion,
            weddings, and culture. Our process is collaborative, calm, and built around finding the
            honest frame.
          </p>
        </div>
        <Link
          href="/contact"
          className="mt-16 inline-block border-b border-white/40 pb-2 text-[10px] uppercase tracking-[.16em]"
        >
          Work with us ↗
        </Link>
      </div>
    </main>
  );
}

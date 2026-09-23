import Image from "next/image";
import Link from "next/link";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <main className="bg-[var(--paper)]">
      <div className="px-6 py-8 md:px-10">
        <Link href="/work" className="text-[11px] font-semibold tracking-[.26em]">
          ← Back to work
        </Link>
      </div>
      <section className="relative mt-8 h-[65vh] min-h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1464278533981-50106e6176b1?w=2200&q=90"
          alt="Landscape from The Quiet Current"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </section>
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-12 md:px-10 md:py-32">
        <div className="md:col-span-7">
          <p className="eyebrow mb-5">Film / Patagonia</p>
          <h1 className="serif text-6xl leading-[.9] md:text-8xl">
            The Quiet
            <br />
            <em>Current</em>
          </h1>
        </div>
        <div className="md:col-span-4 md:col-start-9">
          <p className="text-lg leading-8">
            A short film about the places we go to find a slower rhythm. Shot over six days along
            the southern edge of the world.
          </p>
          <p className="mt-8 text-xs leading-6 text-[var(--muted)]">
            Director / Alex Noir
            <br />
            Production / Northline
            <br />
            Year / 2025
          </p>
        </div>
      </div>
      <p className="sr-only">Project slug: {slug}</p>
    </main>
  );
}

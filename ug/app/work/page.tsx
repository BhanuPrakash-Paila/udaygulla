import Image from "next/image";
import Link from "next/link";

const work = [
  [
    "The Quiet Current",
    "Film",
    "https://images.unsplash.com/photo-1464278533981-50106e6176b1?w=1200&q=85",
  ],
  [
    "Form & Function",
    "Editorial",
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=85",
  ],
  [
    "A Sunday in June",
    "Weddings",
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=85",
  ],
  [
    "After Light",
    "Portraits",
    "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=1200&q=85",
  ],
  [
    "Common Ground",
    "Commercial",
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=85",
  ],
  [
    "Salt / Stone",
    "Travel",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=85",
  ],
];

export const metadata = {
  title: "Selected Work",
  description: "A selection of photography and film by Atelier Noir.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[var(--paper)] px-6 py-10 md:px-10 md:py-16">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="text-[11px] font-semibold tracking-[.26em]">
          ATELIER / NOIR
        </Link>
        <div className="mb-16 mt-28 flex items-end justify-between border-b border-black/15 pb-5">
          <div>
            <p className="eyebrow mb-3">Archive / 2020—2026</p>
            <h1 className="serif text-6xl leading-none md:text-8xl">Selected work</h1>
          </div>
          <Link
            href="/contact"
            className="hidden text-[10px] uppercase tracking-[.16em] underline md:block"
          >
            Start a project ↗
          </Link>
        </div>
        <div className="grid gap-x-6 gap-y-14 md:grid-cols-2">
          {work.map(([title, category, image]) => (
            <Link href="/work/the-quiet-current" key={title} className="group">
              <div className="relative aspect-[4/3] overflow-hidden bg-black/10">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-3 flex justify-between border-b border-black/15 pb-3">
                <span className="serif text-2xl">{title}</span>
                <span className="eyebrow pt-2">{category}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

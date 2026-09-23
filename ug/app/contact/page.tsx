import InquiryForm from "../../components/inquiry-form";
import Link from "next/link";
export const metadata = {
  title: "Inquire",
  description: "Start a photography or film project with Atelier Noir.",
};
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--paper)] px-6 py-10 md:px-10 md:py-16">
      <Link href="/" className="text-[11px] font-semibold tracking-[.26em]">
        ATELIER / NOIR
      </Link>
      <div className="mx-auto grid max-w-6xl gap-16 py-28 md:grid-cols-2 md:py-40">
        <div>
          <p className="eyebrow mb-5">The first frame</p>
          <h1 className="serif text-7xl leading-[.86] md:text-9xl">
            Let&apos;s make
            <br />
            <em>something.</em>
          </h1>
          <p className="mt-10 max-w-sm text-sm leading-7 text-[var(--muted)]">
            For availability, commissions, or just to say hello, send a note and we&apos;ll reply
            within two working days.
          </p>
        </div>
        <InquiryForm />
      </div>
    </main>
  );
}

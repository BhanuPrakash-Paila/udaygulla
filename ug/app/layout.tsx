import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://atelier-noir.example"),
  title: {
    default: "Atelier Noir | Photography & Film",
    template: "%s | Atelier Noir",
  },
  description:
    "Cinematic photography and moving image for people, places, and brands with something to say.",
  openGraph: {
    title: "Atelier Noir | Photography & Film",
    description:
      "Cinematic photography and moving image for people, places, and brands with something to say.",
    type: "website",
    images: ["https://images.unsplash.com/photo-1531058020387-3be344556be6?w=1600&q=85"],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}

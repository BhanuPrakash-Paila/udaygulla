"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const PROFILE_IMAGE = "/uday-profile.webp";
const HEADLINES = [
  "I turn moments into stories.",
  "I capture emotions, not just images.",
  "I create films that make you feel.",
  "I bring brands and ideas to life.",
];
const AVAILABILITY_NOTE = "Independent Creative · Available for Projects";

export default function Hero() {
  const [headline, setHeadline] = useState(HEADLINES[0]);

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timerId: number | undefined;
    let phraseIndex = 0;
    let characterIndex = 0;
    let isDeleting = false;
    let isRunning = false;

    const tick = () => {
      if (!isRunning) return;

      const phrase = HEADLINES[phraseIndex];
      if (!isDeleting) {
        characterIndex += 1;
        setHeadline(phrase.slice(0, characterIndex));
        if (characterIndex === phrase.length) {
          isDeleting = true;
          timerId = window.setTimeout(tick, 1800);
        } else {
          timerId = window.setTimeout(tick, 62);
        }
        return;
      }

      characterIndex -= 1;
      setHeadline(phrase.slice(0, characterIndex));
      if (characterIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % HEADLINES.length;
        timerId = window.setTimeout(tick, 260);
      } else {
        timerId = window.setTimeout(tick, 34);
      }
    };

    const startTyping = () => {
      window.clearTimeout(timerId);
      phraseIndex = 0;
      characterIndex = 0;
      isDeleting = false;
      isRunning = true;
      setHeadline("");
      timerId = window.setTimeout(tick, 220);
    };

    const handleMotionPreference = () => {
      if (motionPreference.matches) {
        isRunning = false;
        window.clearTimeout(timerId);
        setHeadline(HEADLINES[0]);
      } else {
        startTyping();
      }
    };

    if (motionPreference.matches) {
      isRunning = false;
    } else {
      startTyping();
    }

    motionPreference.addEventListener("change", handleMotionPreference);
    return () => {
      isRunning = false;
      window.clearTimeout(timerId);
      motionPreference.removeEventListener("change", handleMotionPreference);
    };
  }, []);

  return (
    <section
      id="home"
      className="hero-surface relative isolate overflow-hidden rounded-4xl border border-white/75 px-6 py-12 shadow-[0_30px_90px_-54px_rgba(41,35,43,0.48)] sm:px-8 sm:py-14 lg:px-12 lg:py-16"
    >
      <div aria-hidden="true" className="hero-ambience absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 text-center text-(--portfolio-plum) md:grid-cols-[1.04fr_0.96fr] md:gap-10 md:text-left lg:gap-16">
        <div className="hero-copy-reveal space-y-6 md:max-w-xl">
          <p
            className="hero-copy-item inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-(--portfolio-violet) sm:text-xs"
            style={{ animationDelay: "80ms" }}
          >
            PHOTOGRAPHY <span aria-hidden="true">·</span> FILMMAKING{" "}
            <span aria-hidden="true">·</span> CREATIVE EDITING
          </p>
          <div className="space-y-3">
            <h1
              className="hero-copy-item text-xl font-semibold leading-tight text-(--portfolio-plum) sm:text-2xl"
              style={{ animationDelay: "180ms" }}
            >
              Uday Gulla
            </h1>
            <h2
              aria-label={HEADLINES[0]}
              className="hero-copy-item min-h-[4.2em] max-w-[15ch] text-[2.15rem] font-semibold leading-[1.08] tracking-tight text-(--portfolio-plum) sm:min-h-[3.35em] sm:text-5xl lg:min-h-[3.2em] lg:text-[3.55rem]"
              style={{ animationDelay: "280ms" }}
            >
              <span aria-hidden="true">{headline}</span>
              <span aria-hidden="true" className="hero-type-cursor" />
            </h2>
          </div>
          <p
            className="hero-copy-item max-w-xl text-base leading-7 text-[#5e5660] sm:text-lg sm:leading-8"
            style={{ animationDelay: "380ms" }}
          >
            Capturing genuine emotions, creating cinematic visuals, and crafting stories that leave
            a lasting impression.
          </p>
          <p
            className="hero-copy-item max-w-xl text-sm leading-7 text-[#746a74] sm:text-base"
            style={{ animationDelay: "460ms" }}
          >
            From weddings and celebrations to brands, events, and social content — every frame has a
            story worth telling.
          </p>
          <div
            className="hero-copy-item flex flex-col gap-3 pt-1 sm:flex-row sm:justify-center md:justify-start"
            style={{ animationDelay: "560ms" }}
          >
            <a
              href="#contact"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-(--portfolio-violet) px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_-14px_rgba(101,81,216,0.75)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#5843c8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--portfolio-violet) motion-reduce:transform-none"
            >
              Let&apos;s Create Together
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                ↗
              </span>
            </a>
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#c7a9b8] bg-white/45 px-6 py-3 text-sm font-semibold text-(--portfolio-plum) transition duration-300 hover:-translate-y-0.5 hover:border-(--portfolio-violet) hover:bg-white/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--portfolio-violet) motion-reduce:transform-none"
            >
              Explore My Work
            </a>
          </div>
          <p
            className="hero-copy-item inline-flex items-center gap-2 pt-1 text-xs font-medium text-[#746a74]"
            style={{ animationDelay: "640ms" }}
          >
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
            {AVAILABILITY_NOTE}
          </p>
        </div>

        <div className="hero-portrait-reveal relative mx-auto w-full max-w-105 md:max-w-none">
          <div className="hero-portrait-glow absolute -inset-6 z-0 rounded-[3rem]" />
          <div className="hero-portrait-frame relative z-10 rounded-[1.8rem] p-px shadow-[0_30px_70px_-40px_rgba(41,35,43,0.65)]">
            <div className="overflow-hidden rounded-[1.75rem] bg-[#eee7eb]">
              <Image
                src={PROFILE_IMAGE}
                alt="Uday Gulla in a black shirt, photographed in monochrome"
                width={1440}
                height={1920}
                sizes="(max-width: 767px) 84vw, (max-width: 1200px) 42vw, 420px"
                loading="eager"
                className="hero-image-reveal aspect-3/4 h-auto w-full object-cover object-[50%_35%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

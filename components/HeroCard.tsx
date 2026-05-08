"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export type HeroCardProps = {
  headlineLead: string;
  headlineAccent: string;
  body: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export function HeroCard({
  headlineLead,
  headlineAccent,
  body,
  primaryCta,
  secondaryCta,
}: HeroCardProps) {
  const handleScrollToNextSection = () => {
    const nextSection = document.getElementById("about");
    nextSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.div
      className={[
        "relative mx-auto box-border h-auto max-w-[min(var(--hero-card-w-max),calc(100%-1.5rem))]",
        "w-[calc(100%-2rem)]",
        "max-md:min-[668px]:w-[min(var(--hero-card-w-max),max(18.75rem,calc((100%*444)/1140),calc(100%-2rem)))]",
        "md:mx-0",
        "md:w-[min(var(--hero-card-w-max),max(18.75rem,calc(100vw*444/1140),calc(100vw-2rem)))]",
      ].join(" ")}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.65,
        delay: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="flex flex-col overflow-x-hidden bg-white px-6 py-8 shadow-[0_24px_48px_-24px_rgba(26,26,24,0.18)] box-border md:px-10 md:py-10">
        <h1
          id="hero-heading"
          className="font-serif text-[clamp(1.6875rem,3.8vw+1.125rem,2.625rem)] font-light leading-[clamp(2.125rem,3.8vw+1.35rem,2.8125rem)] tracking-[0.02em] text-[#343434] [overflow-wrap:anywhere]"
        >
          {headlineLead}
          <span className="text-sage">{headlineAccent}</span>
        </h1>
        <p className="mt-[3.125rem] font-sans text-[1rem] font-normal leading-normal tracking-[0.02em] text-[#707070]">
          {body}
        </p>
        <div className="flex flex-col items-center gap-0">
          <Link
            href={primaryCta.href}
            className="relative inline-block mt-[4.125rem] pb-3 text-center font-sans text-[1rem] font-light uppercase tracking-[0.16em] text-[#707070] transition-opacity hover:opacity-80"
          >
            {primaryCta.label}
            <span
              className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[min(20.625rem,calc(100vw-3rem))] max-w-[100vw] -translate-x-1/2 bg-[#707070]/30 md:w-[20.625rem] md:max-w-none"
              aria-hidden
            />
          </Link>
          <Link
            href={secondaryCta.href}
            className="relative inline-block mt-[1.25rem] pb-3 text-center font-sans text-[1rem] font-light uppercase tracking-[0.16em] text-[#707070] transition-opacity hover:opacity-80"
          >
            {secondaryCta.label}
            <span
              className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[min(20.625rem,calc(100vw-3rem))] max-w-[100vw] -translate-x-1/2 bg-[#707070]/30 md:w-[20.625rem] md:max-w-none"
              aria-hidden
            />
          </Link>
        </div>
      </div>
      <div
        className="pointer-events-auto absolute inset-x-0 top-full z-20 -translate-y-1/2"
      >
        <button
          type="button"
          onClick={handleScrollToNextSection}
          aria-label="Scroll to next section"
          className="animate-hero-sink mx-auto flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/60 bg-white/0 text-[#707070] shadow-[0_8px_24px_rgba(34,34,34,0.14)] transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#707070] md:h-10 md:w-10"
        >
          <svg
            className="h-4 w-4 md:h-[1.125rem] md:w-[1.125rem]"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}

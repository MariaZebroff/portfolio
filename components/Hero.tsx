"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useId, type CSSProperties } from "react";
import { heroContent } from "@/lib/hero";
import { heroCardRem } from "@/lib/heroCardLayout";
import { heroImageClipPathD } from "@/lib/heroClip";

export function Hero() {
  const {
    headline: { lead: headlineLead, accent: headlineAccent },
    body,
    primaryCta,
    secondaryCta,
    image,
  } = heroContent;
  const clipPathId = `hero-media-clip-${useId().replace(/:/g, "")}`;

  return (
    <section
      id="hero"
      className="scroll-mt-[3.75rem] relative bg-cream pb-12 pt-0 md:pb-16"
      aria-labelledby="hero-heading"
    >
      <div className="relative w-full ">
        <svg
          className="pointer-events-none absolute h-0 w-0 overflow-hidden"
          aria-hidden
        >
          <defs>
            <clipPath id={clipPathId} clipPathUnits="objectBoundingBox">
              <path d={heroImageClipPathD} />
            </clipPath>
          </defs>
        </svg>
        <div
          className="relative isolate min-h-[min(50vh,28rem)] w-full max-w-none overflow-hidden rounded-none md:min-h-[min(70vh,820px)]"
          style={{
            clipPath: `url(#${clipPathId})`,
            WebkitClipPath: `url(#${clipPathId})`,
          }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10"
            aria-hidden
          />
        </div>

        <div
          className={[
            "absolute z-10 inset-x-0 top-[6.25rem]",
            "md:inset-x-auto md:block md:w-auto",
            "md:left-[min(var(--hero-card-left-max),calc(100vw*140/1140))]",
            "md:right-auto",
            "md:top-[min(var(--hero-card-top-max),calc(100vh*240/1024))]",
          ].join(" ")}
          style={
            {
              "--hero-card-w-max": heroCardRem.w,
              "--hero-card-left-max": heroCardRem.left,
              "--hero-card-top-max": heroCardRem.top,
            } as CSSProperties
          }
        >
          <motion.div
            className={[
              "mx-auto box-border h-auto max-w-[min(var(--hero-card-w-max),calc(100%-1.5rem))]",
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}

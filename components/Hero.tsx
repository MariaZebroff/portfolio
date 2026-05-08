import type { CSSProperties } from "react";
import Image from "next/image";
import { HeroCard } from "@/components/HeroCard";
import { heroContent } from "@/lib/hero";
import { heroCardRem } from "@/lib/heroCardLayout";
import { heroImageClipPathD } from "@/lib/heroClip";

const heroCardInlineVars = {
  "--hero-card-w-max": heroCardRem.w,
  "--hero-card-left-max": heroCardRem.left,
  "--hero-card-top-max": heroCardRem.top,
} as CSSProperties;

/** Stable id: single hero on the homepage (no useId — keeps image in the server tree). */
const HERO_CLIP_PATH_ID = "hero-media-clip";

export function Hero() {
  const {
    headline: { lead: headlineLead, accent: headlineAccent },
    body,
    primaryCta,
    secondaryCta,
    image,
  } = heroContent;

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
            <clipPath id={HERO_CLIP_PATH_ID} clipPathUnits="objectBoundingBox">
              <path d={heroImageClipPathD} />
            </clipPath>
          </defs>
        </svg>
        <div
          className="relative isolate min-h-[min(50vh,28rem)] w-full max-w-none overflow-hidden rounded-none md:min-h-[min(70vh,820px)]"
          style={{
            clipPath: `url(#${HERO_CLIP_PATH_ID})`,
            WebkitClipPath: `url(#${HERO_CLIP_PATH_ID})`,
          }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            fetchPriority="high"
            quality={95}
            sizes="100vw"
            className="object-cover object-center"
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
          style={heroCardInlineVars}
        >
          <HeroCard
            headlineLead={headlineLead}
            headlineAccent={headlineAccent}
            body={body}
            primaryCta={primaryCta}
            secondaryCta={secondaryCta}
          />
        </div>
      </div>
    </section>
  );
}

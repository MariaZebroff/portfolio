"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { aboutContent } from "@/lib/about";

export function About() {
  const { image, lead: leadParts, body, quote } = aboutContent;

  return (
    <section
      id="about"
      className="scroll-mt-[3.75rem] box-border border-b border-[#707070]/20 bg-cream px-4 py-[6.25rem] md:px-8 lg:px-10"
      aria-labelledby="about-lead"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 min-[1050px]:grid-cols-2 min-[1050px]:items-start min-[1050px]:gap-x-12 min-[1050px]:gap-y-10 lg:gap-x-16 lg:gap-y-12">
        <motion.div
          className="relative row-start-1 mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-sm bg-border min-[768px]:max-w-2xl min-[1050px]:col-start-1 min-[1050px]:row-span-2 min-[1050px]:row-start-1 min-[1050px]:mx-0 min-[1050px]:max-w-none min-[1050px]:self-start"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-64px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="h-full w-full object-cover object-center"
            sizes="(max-width: 767px) min(100vw - 2rem, 28rem), (max-width: 1049px) min(100vw - 4rem, 42rem), (max-width: 1279px) 45vw, 560px"
          />
        </motion.div>

        <motion.div
          className="row-start-2 flex flex-col justify-center pt-0 min-[1050px]:col-start-2 min-[1050px]:row-start-1 min-[1050px]:pt-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-64px" }}
          transition={{
            duration: 0.55,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p
            id="about-lead"
            className="text-pretty font-serif text-[2.25rem] font-light italic leading-[2.8125rem] tracking-[0.02em] text-[#343434]"
          >
            {leadParts.before}
            <span className="text-[#81917D]">{leadParts.accent}</span>
            {leadParts.after}
            <span className="whitespace-nowrap">{leadParts.afterNoBreak}</span>
          </p>
          <p className="mt-8 font-sans text-[1.125rem] font-normal leading-[1.65] tracking-[0.02em] text-[#707070]">
            {body}
          </p>
        </motion.div>

        <motion.blockquote
          className="row-start-3 border-l-2 border-[#81917D] pl-6 min-[1050px]:col-start-2 min-[1050px]:row-start-2"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-64px" }}
          transition={{
            duration: 0.55,
            delay: 0.06,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="font-serif text-[1.75rem] font-light italic leading-[2.3125rem] tracking-[0.02em] text-[#707070]">
            {quote.text}
          </p>
          <footer className="mt-4 font-sans text-[1rem] font-light uppercase leading-[2.3125rem] tracking-[0.18em] text-[#81917D]">
            - {quote.attribution}
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}

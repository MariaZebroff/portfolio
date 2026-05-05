"use client";

import { motion } from "framer-motion";
import { servicesContent } from "@/lib/services";

const cellBorder =
  "border-b border-[rgba(249,247,239,0.2)] last:border-b-0 md:border-b md:border-r md:border-[rgba(249,247,239,0.2)] md:[&:nth-child(2n)]:border-r-0 md:[&:nth-child(n+3)]:border-b-0";

export function Services() {
  const { kicker, subheading, cards, cta } = servicesContent;

  return (
    <section
      id="services"
      className="scroll-mt-[3.75rem] box-border border-b border-[#707070]/20 bg-[#3D473B] px-4 py-[6.25rem] md:px-8 md:py-[6.25rem] lg:px-10"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl">
        <motion.header
          className="mb-[3rem] text-center md:mb-[4.5rem]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-64px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            id="services-heading"
            className="font-serif text-[2.25rem] font-light not-italic leading-[2.8125rem] tracking-[7%] text-[#F9F7EF]"
          >
            {kicker}
          </h2>
          <p className="mx-auto mt-[1rem] max-w-3xl font-serif text-[24px] font-medium italic leading-[2rem] tracking-[2%] text-white md:mt-[1.25rem]">
            {subheading}
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {cards.map((card, index) => (
            <motion.article
              key={card.title}
              className={`flex flex-col items-center px-6 py-10 text-center md:px-10 md:py-12 lg:px-12 lg:py-14 ${cellBorder}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-48px" }}
              transition={{
                duration: 0.55,
                delay: 0.05 * index,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h3 className="max-w-md font-serif text-[1.5rem] font-semibold not-italic leading-[31px] tracking-[5%] text-[#F9F7EF]">
                {card.title}
              </h3>
              <p className="mt-4 max-w-md font-sans text-[1.25rem] font-light leading-[31px] tracking-[5%] text-[#F9F7EF]/85">
                {card.description}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mt-[3rem] flex justify-center md:mt-[4rem]"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-64px" }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href={cta.href}
            className="inline-flex items-center justify-center bg-cream px-8 py-3 font-sans text-[1rem] font-normal uppercase leading-none tracking-[0.16em] text-[#3D473B] no-underline transition-[background-color,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#ebe8e0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F9F7EF]"
          >
            {cta.label}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

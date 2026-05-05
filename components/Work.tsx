"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { workSecondProjectUpperCreamPath } from "@/lib/workSecondProjectBg";
import { workContent, type WorkProject } from "@/lib/work";

function WorkIntroAside({
  label,
  text,
  className,
  delay = 0.05,
}: {
  label: string;
  text: string;
  className: string;
  delay?: number;
}) {
  return (
    <motion.aside
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="flex flex-col gap-4">
        <h3 className="block font-sans text-[0.9375rem] font-light uppercase tracking-[32%] text-[#81917D]">
          {label}
        </h3>
        <p className="block w-full max-w-none font-sans text-[0.875rem] font-normal leading-[1.65] tracking-[2%] text-[#707070]">
          {text}
        </p>
      </div>
    </motion.aside>
  );
}

function WorkProjectCard({
  project,
  reversed,
}: {
  project: WorkProject;
  reversed: boolean;
}) {
  const link = project.link;
  const isExternal = link?.href.startsWith("http") ?? false;

  const imageWrapOrder = reversed
    ? "order-1 justify-self-start md:justify-self-end md:order-none md:col-start-2 md:row-start-1"
    : "order-1 justify-self-start md:order-none md:col-start-1 md:row-start-1";

  const textWrapOrder = reversed
    ? "order-2 md:order-none md:col-start-1 md:row-start-1"
    : "order-2 md:order-none md:col-start-2 md:row-start-1";

  const isWide496Frame =
    project.image.width === 565 && project.image.height === 496;
  const imageFrameClass = isWide496Frame
    ? "relative aspect-[565/496] w-full overflow-hidden bg-border min-[1440px]:aspect-auto min-[1440px]:h-[calc(35.3125rem*496/565)] min-[1440px]:w-[35.3125rem]"
    : "relative aspect-[565/632] w-full overflow-hidden bg-border min-[1440px]:aspect-auto min-[1440px]:h-[39.5rem] min-[1440px]:w-[35.3125rem]";

  return (
    <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:items-center md:gap-8">
      <div className={`${imageFrameClass} ${imageWrapOrder}`}>
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1439px) min(565px, calc((100vw - 8rem) / 2)), 565px"
        />
      </div>

      <div className={textWrapOrder}>
        <p className="mb-[1.5625rem] inline-flex items-center gap-[1rem] font-sans text-[0.9375rem] font-light text-[#81917D]">
          <span className="select-none font-light" aria-hidden>
            —
          </span>
          <span className="tracking-[32%]">{project.number}</span>
        </p>
        <h3 className="mt-3 mb-[1rem] font-sans text-[1.125rem] font-light uppercase leading-[1.35] tracking-[10%] text-[#343434] md:mb-[1.25rem]">
          {project.title}
        </h3>
        <p className="mt-0 font-sans text-[1.125rem] font-normal leading-[1.65] tracking-[2%] text-[#707070]">
          {project.description}
        </p>
        {link ? (
          <Link
            href={link.href}
            {...(isExternal
              ? { target: "_blank" as const, rel: "noopener noreferrer" }
              : {})}
            className="group mt-[2rem] inline-flex items-center border-b border-[#343434] pb-[0.1875rem] font-sans text-[1rem] font-normal uppercase tracking-[16%] text-[#343434] transition-[opacity,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[#81917D] hover:opacity-90 md:mt-[2.5rem]"
          >
            <span className="relative inline-flex items-center gap-2 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:translate-x-1">
              <span className="leading-none">{link.label}</span>
              <Image
                src={link.iconSrc}
                alt={link.iconAlt}
                width={9}
                height={9}
                className="relative top-[1px] shrink-0"
                aria-hidden
              />
            </span>
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export function Work() {
  const { heading, subheading, leftIntro, professionalIntro, projects } =
    workContent;
  const [firstProject, ...restProjects] = projects;
  const secondProject = restProjects[0];

  return (
    <section
      id="work"
      className={`scroll-mt-[3.75rem] relative box-border border-b border-[#707070]/20 bg-cream px-4 pt-[6.25rem] md:px-8 md:pt-[6.25rem] lg:px-10 ${secondProject ? "pb-0" : "pb-[6.25rem]"}`}
      aria-labelledby="work-heading"
    >
      <div className="relative z-20 mx-auto max-w-7xl">
        <motion.header
          className="mb-[3rem] text-center md:mb-[5.625rem]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-64px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            id="work-heading"
            className="font-serif text-[2.25rem] font-light not-italic leading-[2.8125rem] tracking-[7%] text-[#343434]"
          >
            {heading}
          </h2>
          <p className="mx-auto mt-[0.9375rem] max-w-3xl font-serif text-[1.5rem] font-light italic leading-[2rem] tracking-[2%] text-[#707070]">
            {subheading}
          </p>
        </motion.header>

        <div className="flex flex-col">
          <WorkIntroAside
            label={leftIntro.label}
            text={leftIntro.text}
            className="mb-[2.5rem] w-full md:mb-[5rem]"
            delay={0.05}
          />

          {firstProject ? (
            <motion.article
              key={firstProject.id}
              className="w-full"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-64px" }}
              transition={{
                duration: 0.55,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <WorkProjectCard project={firstProject} reversed={false} />
            </motion.article>
          ) : null}
        </div>
      </div>

      {secondProject ? (
        <>
          <motion.article
            key={secondProject.id}
            className="relative left-1/2 z-0 mt-[3.75rem] w-screen max-w-none -translate-x-1/2 overflow-visible md:mt-[5rem]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-64px" }}
            transition={{
              duration: 0.55,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="relative isolate min-h-0 overflow-visible bg-white pb-[6.25rem]">
              {/* Cream→white fill sits under wave SVGs (same stops as body gradient). */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(180deg,var(--color-cream)_0%,var(--color-cream)_var(--gradient-cream-end-pct),#ffffff_var(--gradient-white-start-pct),#ffffff_100%)]"
              />
              {/* Mobile: cream band fills transparent gap above transformed path; path transform per design */}
              <svg
                className="pointer-events-none absolute inset-0 z-[1] block h-full w-full min-w-full -translate-y-[clamp(0.75rem,2.5vw,2rem)] md:hidden"
                viewBox="0 0 1440 764"
                preserveAspectRatio="none"
                aria-hidden
              >
                <rect
                  x="0"
                  y="0"
                  width="1440"
                  height="520"
                  fill="#f7f4ef"
                />
                <g transform="translate(0,-8)">
                  <g transform="translate(1440,0) scale(-1,1)">
                    <g transform="translate(720,680) scale(1,0.5) translate(-720,-720)">
                      <path
                        d={workSecondProjectUpperCreamPath}
                        fill="#f7f4ef"
                        shapeRendering="geometricPrecision"
                      />
                    </g>
                  </g>
                </g>
              </svg>
              <svg
                className="pointer-events-none absolute inset-0 z-[1] hidden h-full w-full min-w-full md:block md:-translate-y-[calc(9.375rem+clamp(3rem,9vw,5.5rem))]"
                viewBox="0 0 1440 764"
                preserveAspectRatio="none"
                aria-hidden
              >
                <g transform="translate(1440,0) scale(-1,1)">
                  <path
                    d={workSecondProjectUpperCreamPath}
                    fill="#f7f4ef"
                  />
                </g>
              </svg>
              <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 lg:px-10">
                <WorkProjectCard project={secondProject} reversed />
              </div>
            </div>
          </motion.article>

          <div className="relative left-1/2 z-20 w-screen max-w-none -translate-x-1/2 bg-white pt-[1.5rem] pb-[6.25rem] md:pt-[1.5rem]">
            {/* Same max-w-7xl + inner padding as second project so columns line up on large screens */}
            <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-10">
              <WorkIntroAside
                label={professionalIntro.label}
                text={professionalIntro.text}
                className="mb-[2.5rem] w-full md:mb-[5rem]"
                delay={0.05}
              />

            {restProjects.length > 1
              ? restProjects.slice(1).map((project, sliceIndex) => {
                  const index = sliceIndex + 2;
                  return (
                    <div
                      key={project.id}
                      className={`w-full ${sliceIndex > 0 ? "mt-[3.75rem] md:mt-[5rem]" : ""}`}
                    >
                      <motion.article
                        className="w-full"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-64px" }}
                        transition={{
                          duration: 0.55,
                          delay: 0.1,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <WorkProjectCard
                          project={project}
                          reversed={index % 2 === 1}
                        />
                      </motion.article>
                    </div>
                  );
                })
              : null}
            </div>
          </div>
        </>
      ) : restProjects.length > 1 ? (
        restProjects.slice(1).map((project, sliceIndex) => {
          const index = sliceIndex + 2;
          return (
            <div
              key={project.id}
              className="mx-auto mt-[3.75rem] w-full max-w-7xl px-4 md:mt-[5rem] md:px-8 lg:px-10"
            >
              <motion.article
                className="w-full"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-64px" }}
                transition={{
                  duration: 0.55,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <WorkProjectCard
                  project={project}
                  reversed={index % 2 === 1}
                />
              </motion.article>
            </div>
          );
        })
      ) : null}
    </section>
  );
}

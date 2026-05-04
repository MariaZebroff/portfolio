"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { workSecondProjectUpperCreamPath } from "@/lib/workSecondProjectBg";
import { workContent, type WorkProject } from "@/lib/work";

function WorkProjectCard({
  project,
  reversed,
}: {
  project: WorkProject;
  reversed: boolean;
}) {
  const isExternal = project.link.href.startsWith("http");

  const imageWrapOrder = reversed
    ? "order-1 justify-self-start md:justify-self-end md:order-none md:col-start-2 md:row-start-1"
    : "order-1 justify-self-start md:order-none md:col-start-1 md:row-start-1";

  const textWrapOrder = reversed
    ? "order-2 md:order-none md:col-start-1 md:row-start-1"
    : "order-2 md:order-none md:col-start-2 md:row-start-1";

  return (
    <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:items-center md:gap-8">
      <div
        className={`relative aspect-[565/632] w-full overflow-hidden bg-border min-[1440px]:aspect-auto min-[1440px]:h-[39.5rem] min-[1440px]:w-[35.3125rem] ${imageWrapOrder}`}
      >
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
        <Link
          href={project.link.href}
          {...(isExternal
            ? { target: "_blank" as const, rel: "noopener noreferrer" }
            : {})}
          className="group mt-[2rem] inline-flex items-center border-b border-[#343434] pb-[0.1875rem] font-sans text-[1rem] font-normal uppercase tracking-[16%] text-[#343434] transition-[opacity,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[#81917D] hover:opacity-90 md:mt-[2.5rem]"
        >
          <span className="relative inline-flex items-center gap-2 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:translate-x-1">
            <span className="leading-none">{project.link.label}</span>
            <Image
              src={project.link.iconSrc}
              alt={project.link.iconAlt}
              width={9}
              height={9}
              className="relative top-[1px] shrink-0"
              aria-hidden
            />
          </span>
        </Link>
      </div>
    </div>
  );
}

export function Work() {
  const { heading, subheading, leftIntro, projects } = workContent;
  const [firstProject, ...restProjects] = projects;
  const secondProject = restProjects[0];

  return (
    <section
      id="work"
      className="relative box-border border-b border-[#707070]/20 bg-cream px-4 pt-[6.25rem] pb-0 md:px-8 md:pt-[6.25rem] lg:px-10"
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
          <motion.aside
            className="mb-[2.5rem] w-full md:mb-[5rem]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-64px" }}
            transition={{
              duration: 0.55,
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex flex-col gap-4">
              <h3 className="block font-sans text-[0.9375rem] font-light uppercase tracking-[32%] text-[#81917D]">
                {leftIntro.label}
              </h3>
              <p className="block w-full max-w-none font-sans text-[0.875rem] font-normal leading-[1.65] tracking-[2%] text-[#707070]">
                {leftIntro.text}
              </p>
            </div>
          </motion.aside>

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
            <svg
              className="pointer-events-none absolute inset-0 z-0 h-full w-full min-w-full -translate-y-[clamp(0.75rem,2.5vw,2rem)] md:-translate-y-[calc(9.375rem+clamp(3rem,9vw,5.5rem))]"
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
      ) : null}

      {restProjects.length > 1
        ? restProjects.slice(1).map((project, sliceIndex) => {
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
        : null}
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { contactContent } from "@/lib/contact";

const fieldClass =
  "w-full border-0 border-b border-[#707070]/40 bg-transparent py-2 font-sans text-[1rem] font-normal tracking-[0.02em] text-[#343434] outline-none transition-colors placeholder:text-[#707070]/60 focus:border-[#81917D]";

const labelClass =
  "mb-1 block font-sans text-[0.75rem] font-normal uppercase tracking-[0.16em] text-[#81917D]";

export function Contact() {
  const { heading, subheading, aside, form } = contactContent;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-[3.75rem] box-border bg-white px-4 py-[6.25rem] md:px-8 md:py-[6.25rem] lg:px-10"
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
            id="contact-heading"
            className="font-serif text-[2.25rem] font-light not-italic leading-[2.8125rem] tracking-[7%] text-[#707070]"
          >
            {heading}
          </h2>
          <p className="mx-auto mt-[1rem] max-w-3xl font-serif text-[24px] font-light italic leading-[2rem] tracking-[2%] text-[#707070] md:mt-[1.25rem]">
            {subheading}
          </p>
        </motion.header>

        <div className="grid grid-cols-1 gap-10 min-[900px]:grid-cols-2 min-[900px]:items-start min-[900px]:gap-x-12 lg:gap-x-16">
          <motion.form
            className="w-full max-w-xl min-[900px]:max-w-none"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-48px" }}
            transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col gap-8">
              <div>
                <label htmlFor="contact-name" className={labelClass}>
                  {form.nameLabel}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className={fieldClass}
                  placeholder=" "
                />
              </div>
              <div>
                <label htmlFor="contact-email" className={labelClass}>
                  {form.emailLabel}
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={fieldClass}
                  placeholder=" "
                />
              </div>
              <div>
                <label htmlFor="contact-message" className={labelClass}>
                  {form.messageLabel}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  className={`${fieldClass} resize-y min-h-[7.5rem]`}
                  placeholder=" "
                />
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex min-h-[2.75rem] items-center justify-center bg-sage px-8 py-2 font-sans text-[0.875rem] font-normal uppercase tracking-[0.16em] text-[#F9F7EF] transition-[background-color,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#6f7d6a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3D473B]"
                >
                  {form.submitLabel}
                </button>
              </div>
            </div>
          </motion.form>

          <motion.aside
            className="w-full max-w-xl min-[900px]:max-w-none"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-48px" }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-sans text-[1.125rem] font-normal leading-[1.65] tracking-[0.02em] text-[#707070]">
              {aside.body}
            </p>
            <dl className="mt-10 space-y-8">
              <div>
                <dt className={labelClass}>{aside.email.label}</dt>
                <dd className="mt-1">
                  <a
                    href={aside.email.href}
                    className="font-sans text-[1.125rem] font-normal tracking-[0.02em] text-[#343434] underline decoration-[#707070]/40 underline-offset-4 transition-colors hover:decoration-[#81917D]"
                  >
                    {aside.email.address}
                  </a>
                </dd>
              </div>
              <div>
                <dt className={labelClass}>{aside.phone.label}</dt>
                <dd className="mt-1">
                  <a
                    href={aside.phone.href}
                    className="font-sans text-[1.125rem] font-normal tracking-[0.02em] text-[#343434] underline decoration-[#707070]/40 underline-offset-4 transition-colors hover:decoration-[#81917D]"
                  >
                    {aside.phone.display}
                  </a>
                </dd>
              </div>
            </dl>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

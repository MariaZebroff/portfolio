import Image from "next/image";
import Link from "next/link";
import { footerContent, footerNavLinks } from "@/lib/footer";
import { siteLogo } from "@/lib/nav";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative z-20 w-full overflow-x-hidden overflow-y-visible bg-nav-menu"
      role="contentinfo"
    >
      {/* Wave SVG: transparent pixels must sit on white (same as Contact) or the curve reads as cream-on-cream and disappears. */}
      <div className="relative z-10 -mb-px w-full bg-white leading-[0]">
        <img
          src="/images/footer.svg"
          alt=""
          width={1440}
          height={377}
          decoding="async"
          className="m-0 block h-auto w-full max-w-none p-0 align-top"
        />
      </div>

      {/* Logo/tagline, nav, divider, copyright — one cream band. */}
      <div
        className="relative z-0 w-full bg-nav-menu min-[930px]:max-[1199px]:z-10 min-[930px]:max-[1199px]:-mt-40 min-[1200px]:z-10 min-[1200px]:-mt-52"
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-6 min-[520px]:flex-row min-[520px]:items-start min-[520px]:justify-between min-[520px]:gap-6 min-[520px]:py-8 md:px-8 lg:px-10">
          <div className="flex min-w-0 max-w-[300px] flex-col items-start gap-2 min-[520px]:gap-2.5">
            <Link
              href="/#hero"
              className="shrink-0 outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#81917D]"
            >
              <Image
                src={siteLogo.src}
                alt={siteLogo.alt}
                width={siteLogo.width}
                height={siteLogo.height}
                className="block h-14 w-auto object-contain object-left md:h-16"
              />
            </Link>
            <p className="w-full min-w-0 font-sans text-[14px] font-light leading-[21px] tracking-[0.02em] text-[#707070] not-italic">
              {footerContent.tagline}
            </p>
          </div>
          <nav
            aria-label={footerContent.navHeading}
            className="flex shrink-0 flex-col items-start text-left min-[520px]:ml-auto"
          >
            <p className="mb-1.5 min-[520px]:mb-2 font-sans text-[14px] font-semibold leading-[27px] tracking-[0.02em] text-[#81917D]">
              {footerContent.navHeading}
            </p>
            <ul className="flex flex-col items-start gap-0.5 min-[520px]:gap-1">
              {footerNavLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="nav-link-underline block text-left font-sans text-[14px] font-light leading-[27px] tracking-[0.02em] text-[#707070] transition-colors hover:text-[#343434]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="w-full border-t border-[#707070]/20" />
        <div className="mx-auto flex w-full max-w-7xl items-center px-4 py-10 md:px-8 md:py-12 lg:px-10">
          <p className="text-left font-sans text-[14px] font-normal leading-[21px] tracking-[0.02em] text-[#707070]">
            © {year} {footerContent.copyrightHolder} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

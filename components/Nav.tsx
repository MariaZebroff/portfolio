"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, siteLogo } from "@/lib/nav";

const navLinkTypography =
  "nav-link-underline font-sans text-[0.875rem] font-normal uppercase leading-[2.8125rem] tracking-[0.16em]";

const navLinkClassName = `${navLinkTypography} text-[#707070]`;

/** Darker copy on mobile drawer where blur reduces contrast */
const mobileNavLinkClassName = `${navLinkTypography} text-[#2a2a2a]`;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const barClasses = scrolled
    ? "border-b border-border bg-nav-menu backdrop-blur-md"
    : "border-b border-transparent bg-transparent";

  return (
    <header
      className={`sticky top-0 z-50 w-full h-[3.75rem] transition-colors duration-300 ${barClasses}`}
    >
      <nav
        className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 md:px-8 lg:px-10"
        aria-label="Primary"
      >
        <Link
          href="#hero"
          className="relative flex h-full max-w-[min(100%,12.5rem)] shrink-0 items-center leading-none"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src={siteLogo.src}
            alt={siteLogo.alt}
            width={siteLogo.width}
            height={siteLogo.height}
            className="block h-[3.125rem] w-auto max-h-full object-contain object-left"
            priority
          />
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={navLinkClassName}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-ink md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          {menuOpen ? <X className="size-6" strokeWidth={1.25} /> : <Menu className="size-6" strokeWidth={1.25} />}
        </button>
      </nav>

      <div
        id="mobile-nav"
        className={`fixed inset-0 top-[3.75rem] z-40 bg-transparent backdrop-blur-2xl transition-[opacity,visibility] duration-300 md:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        }`}
      >
        <ul className="relative z-10 flex flex-col px-6 py-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block border-b border-border border-black/[0.08] ${mobileNavLinkClassName}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export type FooterNavLink = {
  label: string;
  href: string;
};

/** In-page anchors — same pattern as `lib/nav.ts`. */
export const footerNavLinks: FooterNavLink[] = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
];

export const footerContent = {
  /** Between © {year} and “All rights reserved.” */
  copyrightHolder: "Maria's Design Studio",

  /** Column heading above `footerNavLinks`. */
  navHeading: "Navigate",

  tagline:
    "Front-end development & WordPress for small businesses doing good work.",
};

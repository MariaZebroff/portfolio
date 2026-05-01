export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const siteLogo = {
  src: "/images/Logo.svg",
  alt: "Marian — home",
  width: 179,
  height: 45,
};

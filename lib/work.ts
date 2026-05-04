export type WorkProject = {
  id: string;
  number: string;
  title: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  description: string;
  link: {
    label: string;
    href: string;
    iconSrc: string;
    iconAlt: string;
  };
};

export const workContent = {
  heading: "Selected Work.",
  subheading:
    "A look at what I've built — on my own and as part of talented teams.",
  leftIntro: {
    label: "- Independent Work",
    text: "Projects I've carried from first conversation to final launch.",
  },
  projects: [
    {
      id: "beauty-hub",
      number: "01",
      title: "Beaty Hub - Vernon, B.C.",
      image: {
        src: "/images/BeautyHub-project.png",
        alt: "Beaty Hub project screenshot",
        width: 1600,
        height: 1000,
      },
      description:
        "Every salon is different — so this website was built to fit exactly how this team works. A fully custom WordPress theme with a purpose-built Gutenberg block, blog, and team section. Staff log in with their own simplified dashboard, while the owner keeps full control. And when it's time to start selling online, the groundwork is already there.",
      link: {
        label: "VIZIT WEBSITE",
        href: "https://beautyhubca.com/",
        iconSrc: "/images/Arrow.svg",
        iconAlt: "",
      },
    },
    {
      id: "beauty-you",
      number: "02",
      title: "Beaty You - Vernon, B.C.",
      image: {
        src: "/images/BeutyYou-project.png",
        alt: "Beaty You project screenshot",
        width: 1600,
        height: 1000,
      },
      description:
        "Designed and developed a full custom WordPress website for an independent beauty stylist in Vernon, BC. Built a unique theme from scratch using Bootstrap, with Advanced Custom Fields for easy content management and custom JavaScript for an elevated user experience.",
      link: {
        label: "VIZIT WEBSITE",
        href: "#work",
        iconSrc: "/images/Arrow.svg",
        iconAlt: "",
      },
    },
  ] satisfies WorkProject[],
};

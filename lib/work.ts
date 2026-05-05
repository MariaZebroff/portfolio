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
  /** Omit or set `null` to hide the visit link row. */
  link?: {
    label: string;
    href: string;
    iconSrc: string;
    iconAlt: string;
  } | null;
};

export const workContent = {
  heading: "Selected Work.",
  subheading:
    "A look at what I've built — on my own and as part of talented teams.",
  leftIntro: {
    label: "- Independent Work",
    text: "Projects I've carried from first conversation to final launch.",
  },
  professionalIntro: {
    label: "- Professional Experience",
    text:
      "Selected work from my time at NGX Creative and Sproing Creative, where I contributed as a front-end developer on cross-functional teams.",
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
        href: "https://beautyyou.ca/",
        iconSrc: "/images/Arrow.svg",
        iconAlt: "",
      },
    },
    {
      id: "seaworld-abu-dhabi",
      number: "03",
      title: "Sea World - Abu Dhabi, UAE",
      image: {
        src: "/images/seaworld-project.png",
        alt: "SeaWorld Abu Dhabi immersive digital exhibit",
        width: 565,
        height: 496,
      },
      description:
        "Contributed to a cross-functional team delivering an interactive exhibit management system for SeaWorld Abu Dhabi. Hands-on across the full cycle — prototyping, development, QA, and post-launch support — working with advanced WordPress, PHP, WebSockets, and custom server architecture.",
    },
    {
      id: "ubc-footprints-in-time",
      number: "04",
      title: "UBC - Vancouver, CA",
      image: {
        src: "/images/UBC-project.png",
        alt: "UBC Footprints in Time interactive exhibit",
        width: 565,
        height: 496,
      },
      description:
        "Not every project starts at the beginning — and this one was already in motion when I joined the team. Working on UBC's Footprints in Time interactive exhibit, I picked up an existing codebase and helped bring it across the finish line. The work included panoramic views, 3D JavaScript interactions, and a strong focus on accessibility — making sure the experience worked beautifully for every visitor, including those using screen readers and assistive technologies.",
      link: {
        label: "VIZIT WEBSITE",
        href: "https://footprintsintime.ca/",
        iconSrc: "/images/Arrow.svg",
        iconAlt: "",
      },
    },
  ] satisfies WorkProject[],
};

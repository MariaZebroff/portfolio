export type ServiceCard = {
  title: string;
  description: string;
};

export const servicesContent = {
  kicker: "Services",
  subheading: "Here's how I can help your business grow online.",
  cards: [
    {
      title: "Custom Website Design & Development",
      description:
        "Get a website that looks great, loads fast, and actually represents your business. Built from scratch to fit your brand.",
    },
    {
      title: "WordPress Websites",
      description:
        "Custom WordPress sites that are easy for you to manage yourself — blogs, services, full marketing sites.",
    },
    {
      title: "Website Maintenance & Support",
      description:
        "Already have a site? I can fix what's broken, speed it up, and bring it up to modern standards.",
    },
    {
      title: "WooCommerce & Online Stores",
      description:
        "Ready to sell online? I'll set up and customize your shop so it's smooth to run and easy to buy from.",
    },
  ] satisfies ServiceCard[],
  cta: {
    label: "Let's talk about your project",
    href: "/#contact",
  },
};

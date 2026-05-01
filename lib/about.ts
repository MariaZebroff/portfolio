export const aboutContent = {
  image: {
    src: "/images/placeholder.png",
    alt: "Portrait — Marian, front-end developer based in Vernon, BC",
    /** Intrinsic dimensions — update when replacing placeholder asset */
    width: 800,
    height: 1000,
  },
  /** Italic serif lead — Newsreader Light Italic; accent segment uses sage #81917D */
  lead: {
    before: "A front-end developer based ",
    accent: "in Vernon, BC —",
    /** Split so final phrase can stay on one line (avoids a lone “job.”) */
    after: " building websites that actually ",
    afterNoBreak: "do their job.",
  },
  body:
    "I work with small businesses who take what they do seriously and want a website that reflects that. More than six years in — custom WordPress builds, React, JavaScript, responsive design, WooCommerce — but more than the technical, I bring genuine care about getting it right for you.",
  quote: {
    text:
      "I believe that if your business is honest, professional, and doing good things for people — it deserves to be represented that way online. A great website isn't a luxury. It's how people find you, trust you, and choose you over someone else...",
    /** Rendered as “- MARIA Z.” with uppercase */
    attribution: "Maria Z.",
  },
};

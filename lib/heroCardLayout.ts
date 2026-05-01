/**
 * Hero white card — Figma desktop frame 1140×1024 (px → rem at 16px root).
 * Horizontal values scale with viewport width; vertical offset/height scale with vh.
 */
export const HERO_FIGMA_FRAME = { w: 1140, h: 1024 } as const;

export const heroCardPx = {
  width: 444,
  height: 556,
  marginLeft: 140,
  marginTop: 240,
} as const;

/** Exact rem at reference zoom */
export const heroCardRem = {
  w: `${heroCardPx.width / 16}rem`,
  h: `${heroCardPx.height / 16}rem`,
  left: `${heroCardPx.marginLeft / 16}rem`,
  top: `${heroCardPx.marginTop / 16}rem`,
} as const;

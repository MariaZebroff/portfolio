/**
 * Hero image clip shape from Figma export “Mask group.svg”
 * (1440×764 artboard). Stored as objectBoundingBox path (0–1) for CSS clip-path.
 *
 * Source path (user space):
 * M0 -2H1440V668.638C1440 668.638 584 760.678 379.5 763.922C175 767.165 0 668.638 0 668.638V-2Z
 */
const MASK_W = 1440;
const MASK_H = 764;

function nx(x: number) {
  return x / MASK_W;
}

function ny(y: number) {
  return y / MASK_H;
}

/** clipPathUnits="objectBoundingBox" — scales with any hero size */
export const heroImageClipPathD = [
  `M ${nx(0)} ${ny(-2)}`,
  `L ${nx(1440)} ${ny(-2)}`,
  `L ${nx(1440)} ${ny(668.638)}`,
  `C ${nx(1440)} ${ny(668.638)} ${nx(584)} ${ny(760.678)} ${nx(379.5)} ${ny(763.922)}`,
  `C ${nx(175)} ${ny(767.165)} ${nx(0)} ${ny(668.638)} ${nx(0)} ${ny(668.638)}`,
  `L ${nx(0)} ${ny(-2)}`,
  "Z",
].join(" ");

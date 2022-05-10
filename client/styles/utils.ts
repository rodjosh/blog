type Unit = "px" | "%" | "rem" | "em";
export type Size = number | [number, Unit];

export type Spacing =
  | number
  | [number, number]
  | [number, number, number, number];

export const getSize = (size?: Size) => {
  if (!size) return "auto";

  if (Array.isArray(size)) {
    return `${size[0]}${size[1]}`;
  }

  return `${size}px`;
};

export const getSpacing = (spacing?: Spacing) => {
  if (!spacing) return "0";

  if (Array.isArray(spacing)) {
    const pixelSpacing = spacing.map((space) => `${space}px`);
    return pixelSpacing.join(" ");
  }

  return `${spacing}px`;
};

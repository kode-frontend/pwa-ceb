import { generateMaskSvgDataUrl } from "@shared/utils/generateMaskSvgDataUrl";


export const overlayThemes: Record<string, string> = {
  "calm-blue": generateMaskSvgDataUrl("#316dcc"),
  "deep-turquoise": generateMaskSvgDataUrl("#008080"),
  "standard": generateMaskSvgDataUrl("#333333"),
  "sea-blue": generateMaskSvgDataUrl("#1e90ff"),
};

export type ThemeId = keyof typeof overlayThemes;

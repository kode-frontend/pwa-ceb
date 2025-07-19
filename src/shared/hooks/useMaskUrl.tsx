import { ThemeId } from "@context/overlayThemes";
import { colorOptions } from "@pages/ColorSelectionScreen";
import { generateMaskSvgDataUrl } from "@shared/utils/generateMaskSvgDataUrl";
import { useMemo } from "react";


export function useMaskUrl(themeId: ThemeId): string | null {
  return useMemo(() => {
    const found = colorOptions.find((option) => option.id === themeId);
    if (!found) return null;
    return generateMaskSvgDataUrl(found.value);
  }, [themeId]);
}

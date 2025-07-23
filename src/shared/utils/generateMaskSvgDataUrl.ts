export function generateMaskSvgDataUrl(color: string): string {
  const svg = `
<svg preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 375 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="375" height="400" fill="url(#paint0_linear)"/>
  <defs>
    <linearGradient id="paint0_linear" gradientUnits="objectBoundingBox" x1="0.5" y1="0" x2="0.5" y2="1">
      <stop offset="0%" stop-color="${color}"/>
      <stop offset="20%" stop-color="${color}"/>
      <stop offset="100%" stop-color="${color}" stop-opacity="0"/>
    </linearGradient>
  </defs>
</svg>
  `;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

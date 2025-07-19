export function generateMaskSvgDataUrl(color: string): string {
  const svg = `
<svg preserveAspectRatio="none" width="100%" height="100%" overflow="visible" style="display: block;" viewBox="0 0 375 456" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 0H375V456H0V0Z" fill="url(#paint0_linear)" />
  <defs>
    <linearGradient id="paint0_linear" x1="187.5" y1="0" x2="187.5" y2="456" gradientUnits="userSpaceOnUse">
      <stop offset="0.340427" stop-color="${color}" />
      <stop offset="1" stop-color="${color}" stop-opacity="0" />
    </linearGradient>
  </defs>
</svg>
  `;
  return `data:image/svg+xml,${encodeURIComponent(svg)}#${color}`; // добавь #color, чтобы сбить кеш
}
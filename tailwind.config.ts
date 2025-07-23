import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", ".dark"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-background": "var(--background)",
        "custom-foreground": "var(--foreground)",
        "custom-border": "var(--border)",
        "custom-ring": "var(--ring)",
        DEFAULT: 'var(--color-primary)',
      },
      spacing: {
        "safe-bottom": "env(safe-area-inset-bottom)",
      },
      fontFamily: {
        sans: ['"SF Pro Display"', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};

export default config;

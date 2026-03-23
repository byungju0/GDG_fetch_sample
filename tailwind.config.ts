import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gdg-crimson': 'linear-gradient(135deg, #7f1d2e 0%, #9b1c31 50%, #6b1527 100%)',
      },
    },
  },
  plugins: [],
};

export default config;

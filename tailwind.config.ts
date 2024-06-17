import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
	container: {
		center: true,
		padding: '2rem',
		screens: {
			'2xl': '1400px',
		},
	},
    extend: {
	fontFamily: {
		sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
		title: ['var(--font-title)', ...defaultTheme.fontFamily.sans],
		},

    },
  },
  plugins: [        forms,
	typography,],
};
export default config;

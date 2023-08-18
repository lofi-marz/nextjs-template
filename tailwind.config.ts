import type { Config } from 'tailwindcss';

import colors from 'tailwindcss/colors';

import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

const t: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
                body: ['var(--font-body)', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: colors.emerald,
                secondary: colors.red,
                grey: colors.slate,
                light: colors.slate[50],
                dark: colors.slate[950],
            },
        },
    },
    plugins: [forms, typography],
} satisfies Config;

export default t;

export const themeColors = t.theme?.extend?.colors!;

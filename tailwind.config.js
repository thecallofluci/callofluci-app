import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}', // added src directory
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-overpass)', 'sans-serif'],
                mono: ['var(--font-overpass-mono)', 'monospace'],
            },
        },
    },

    // Customizations applied within NextUI 'nextui' plugin
    // Consider importing a colors.js here to keep things clean
    darkMode: 'class',
    plugins: [
        nextui({
        //    addCommonColors: true,
            themes: {
                dark: {
                    colors: {
                        primary: '#b4682c',
                        focus: '#b4682c',
                        luci: {
                            DEFAULT: '#b4682c',
                            50: '#f4e9d6',
                            100: '#efddbe',
                            200: '#e5c68f',
                            300: '#d9ac67',
                            400: '#c98c45',
                            500: '#b4682c',
                            600: '#99411c',
                            700: '#7a1e12',
                            800: '#570c13',
                            900: '#310716',
                        },
                    },
                },
                light: {
                    colors: {
                        primary: '#b4682c',
                        focus: '#b4682c',
                        luci: {
                            DEFAULT: '#b4682c',
                            50: '#f4e9d6',
                            100: '#efddbe',
                            200: '#e5c68f',
                            300: '#d9ac67',
                            400: '#c98c45',
                            500: '#b4682c',
                            600: '#99411c',
                            700: '#7a1e12',
                            800: '#570c13',
                            900: '#310716',
                        },
                    },
                },
            },
        }),
    ],
}

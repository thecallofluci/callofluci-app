// tailwind.config.js
import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
export default {
    // The 'content' property specifies the paths to all files that will use Tailwind CSS class names.
    // Tailwind will purge unused styles from these files in the production build.
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}', // All files in the 'src' directory
        './pages/**/*.{js,ts,jsx,tsx,mdx}', // All files in the 'pages' directory
        './components/**/*.{js,ts,jsx,tsx,mdx}', // All files in the 'components' directory
        './app/**/*.{js,ts,jsx,tsx,mdx}', // All files in the 'app' directory
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}', // All files in the 'node_modules/@nextui-org/theme/dist' directory
    ],
    // The 'theme' property allows you to customize Tailwind's default configuration.
    theme: {
        colors: {
            luci: {
                DEFAULT: '#DEB23E',
                50: '#F9EDD9',
                100: '#FAE6C3',
                200: '#FBDA97',
                300: '#F8CF6F',
                400: '#EFC251',
                500: '#DEB23E',
                600: '#C49D38',
                700: '#A38437',
                800: '#7C6636',
                900: '#51452D',
            },
        },
        extend: {
            // The 'fontFamily' property allows you to specify custom font families.
            fontFamily: {
                sans: ['var(--font-overpass)', 'sans-serif'], // The 'sans' font family
                mono: ['var(--font-overpass-mono)', 'monospace'], // The 'mono' font family
            },
        },
    },
    // The 'darkMode' property enables dark mode in Tailwind.
    // The value 'class' means that dark mode styles will be applied when the 'dark' class is present on the root element.
    // darkMode: "class",
    // The 'plugins' property allows you to add custom plugins to Tailwind.
    // Here, we're adding the NextUI theme as a plugin.
    plugins: [
        nextui({
            addCommonColors: true,
            themes: {
                dark: {
                    colors: {
                        background: {
                            DEFAULT: '#000000',
                        },
                        foreground: {
                            DEFAULT: '#ECEDEE',
                        },
                        focus: {
                            DEFAULT: 'green',
                        },
                        overlay: {
                            DEFAULT: '#000000',
                        },
                        divider: {
                            DEFAULT: 'rgba(255, 255, 255, 0.15)',
                        },
                        content1: {
                            DEFAULT: '#18181B',
                            foreground: '#FAFAFA',
                        },
                        content2: {
                            DEFAULT: '#27272A',
                            foreground: '#F4F4F5',
                        },
                        content3: {
                            DEFAULT: '#3F3F46',
                            foreground: '#E4E4E7',
                        },
                        content4: {
                            DEFAULT: '#52525B',
                            foreground: '#D4D4D8',
                        },
                        primary: {
                            DEFAULT: '#DEB23E',

                            50: '#F9EDD9',
                            100: '#FAE6C3',
                            200: '#FBDA97',
                            300: '#F8CF6F',
                            400: '#EFC251',
                            500: '#DEB23E',
                            600: '#C49D38',
                            700: '#A38437',
                            800: '#7C6636',
                            900: '#51452D',
                        },
                        secondary: {
                            foreground: '#FFFFFF',
                            DEFAULT: '#9353D3',
                        },
                        success: {
                            foreground: '#FFFFFF',
                            DEFAULT: '#17C964',
                        },
                        warning: {
                            foreground: '#FFFFFF',
                            DEFAULT: '#F5A524',
                        },
                        danger: {
                            foreground: '#FFFFFF',
                            DEFAULT: '#F31260',
                        },
                    },
                },
                light: {
                    colors: {
                        background: {
                            DEFAULT: '#FFFFFF',
                        },
                        foreground: {
                            DEFAULT: '#11181C',
                        },
                        divider: {
                            DEFAULT: 'rgba(17, 17, 17, 0.15)',
                        },
                        focus: {
                            DEFAULT: '#006FEE',
                        },
                        overlay: {
                            DEFAULT: '#000000',
                        },
                        content1: {
                            DEFAULT: '#FFFFFF',
                            foreground: '#11181C',
                        },
                        content2: {
                            DEFAULT: '#F4F4F5',
                            foreground: '#27272A',
                        },
                        content3: {
                            DEFAULT: '#E4E4E7',
                            foreground: '#3F3F46',
                        },
                        content4: {
                            DEFAULT: '#D4D4D8',
                            foreground: '#52525B',
                        },
                        primary: {
                            DEFAULT: 'yellow',
                        },
                        secondary: {
                            foreground: '#7828C8',
                            DEFAULT: '#7828C8',
                        },
                        success: {
                            foreground: '#17C964',
                            DEFAULT: '#17C964',
                        },
                        warning: {
                            foreground: '#F5A524',
                            DEFAULT: '#F5A524',
                        },
                        danger: {
                            foreground: '#FFFFFF',
                            DEFAULT: '#F31260',
                        },
                    },
                },
            },
        }),
    ],
}

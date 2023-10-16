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
            colors: {
                white: '#FFFFFF',
                black: '#000000',
                luci: {
                    // custom orange colorset
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
                // .. rest of the colors
            },
        },
    },
    darkMode: 'class',
    plugins: [
        nextui({
            themes: {
                dark: {
                    colors: {
                        // background: '#000000', // or DEFAULT
                        // foreground: '#ECEDEE', // or 50 to 900 DEFAULT
                        primary: {
                            //... 50 to 900
                            DEFAULT: '#b4682c',
                            foreground: '#000000',
                        },
                        focus: '#b4682c', //... 50 to 900
                    },
                },
                light: {
                    colors: {
                        // background: '#FFFFFF', // or DEFAULT
                        // foreground: '#11181C', // or 50 to 900 DEFAULT
                        primary: {
                            //... 50 to 900
                            DEFAULT: '#b4682c',
                            foreground: '#FFFFFF',
                        },
                        focus: '#b4682c', //... 50 to 900
                    },
                },
            },
        }),
    ],
}

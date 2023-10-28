// tailwind.config.js
import {nextui} from '@nextui-org/theme'

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
        themes: {
          dark: {
            colors: {
              background: "#FAAD14",
              primary: {
                DEFAULT: "#BEF264",
                foreground: "#000000",
              },
              focus: "#FAAD14",
              secondary: {
                DEFAULT: "#52C41A",
                foreground: "#000000",
              },
              success: {
                DEFAULT: "#52C41A",
                foreground: "#000000",
              },
              warning: {
                DEFAULT: "#F5A524",
                foreground: "#000000",
              },
              danger: {
                DEFAULT: "#006FEE",
                foreground: "#000000",
              },
              content1: "#1A1A1A",
              content2: "#333333",
              content3: "#4D4D4D",
              content4: "#666666",
            },
          },
        },
      }),
    ],
  };
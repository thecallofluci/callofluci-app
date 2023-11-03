/// tailwind.config.js
// Import the nextui theme plugin and the theme configurations
import { nextui } from '@nextui-org/theme'
import { luciDarkTheme } from './src/app/_styles/colors/luciDarkTheme';
import { luciLightTheme } from './src/app/_styles/colors/luciLightTheme';
import { purpleDarkTheme } from './src/app/_styles/colors/purpleDarkTheme';

/** @type {import('tailwindcss').Config} */
const config = {
    // Specify the paths to all files that will use Tailwind CSS class names.
    // Unused styles will be purged from these files in the production build.
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}', // All files in the 'src' directory
        './pages/**/*.{js,ts,jsx,tsx,mdx}', // All files in the 'pages' directory
        './components/**/*.{js,ts,jsx,tsx,mdx}', // All files in the 'components' directory
        './app/**/*.{js,ts,jsx,tsx,mdx}', // All files in the 'app' directory
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}', // All files in the 'node_modules/@nextui-org/theme/dist' directory
    ],
    // Customize Tailwind's default configuration.
    theme: {
        extend: {
            // Specify custom font families.
            fontFamily: {
                sans: ['var(--font-overpass)', 'sans-serif'], // The 'sans' font family
                mono: ['var(--font-overpass-mono)', 'monospace'], // The 'mono' font family
            },
        },
    },
    // Enable dark mode in Tailwind.
    // The value 'class' means that dark mode styles will be applied when the 'dark' class is present on the root element.
    // darkMode: "class",
    // Add custom plugins to Tailwind.
    // Here, we're adding the NextUI theme as a plugin and specifying our custom themes.
    plugins: [
        nextui({
            themes: {
              
                    'luci-dark': luciDarkTheme,
                    'luci-light': luciLightTheme,
                    // 'purple-dark': purpleDarkTheme // Use the 'purple-dark' theme configuration imported from 'purpleDarkTheme.js'

            //    'dark': luciDarkTheme, // Use the 'luci-dark' theme configuration imported from 'luciDarkTheme.ts'
            //    'light': luciLightTheme, // Use the 'luci-light' theme configuration imported from 'luciLightTheme.ts'

                // ... other themes



            },
        }),
    ],
}

export default config;



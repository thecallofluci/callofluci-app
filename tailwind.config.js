/// tailwind.config.js
// Import the nextui theme plugin and the theme configurations
import { nextui } from '@nextui-org/theme'
import { luciDarkTheme } from './src/app/styles/themes/luciDarkTheme'
import { luciLightTheme } from './src/app/styles/themes/luciLightTheme'

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
			fontFamily: {
				'ultra-thin': ['var(--font-ultra-thin)', 'Arial', 'sans-serif'],
				'ultra-thin-italic': ['var(--font-ultra-thin-italic)', 'Arial', 'sans-serif'],
				'thin': ['var(--font-thin)', 'Arial', 'sans-serif'],
				'thin-italic': ['var(--font-thin-italic)', 'Arial', 'sans-serif'],
				'extra-light': ['var(--font-extra-light)', 'Arial', 'sans-serif'],
				'extra-light-italic': ['var(--font-extra-light-italic)', 'Arial', 'sans-serif'],
				'light': ['var(--font-light)', 'Arial', 'sans-serif'],
				'light-italic': ['var(--font-light-italic)', 'Arial', 'sans-serif'],
				'roman': ['var(--font-roman)', 'Arial', 'sans-serif'],
				'italic': ['var(--font-italic)', 'Arial', 'sans-serif'],
				'medium': ['var(--font-medium)', 'Arial', 'sans-serif'],
				'medium-italic': ['var(--font-medium-italic)', 'Arial', 'sans-serif'],
				'bold': ['var(--font-bold)', 'Arial', 'sans-serif'],
				'bold-italic': ['var(--font-bold-italic)', 'Arial', 'sans-serif'],
				'black': ['var(--font-black)', 'Arial', 'sans-serif'],
				'black-italic': ['var(--font-black-italic)', 'Arial', 'sans-serif'],
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
				'luci-dark': {
					extend: 'dark', // Extend the 'dark' theme
					...luciDarkTheme, // Apply your custom 'luci-dark' theme
				},
				'luci-light': {
					extend: 'light', // Extend the 'light' theme
					...luciLightTheme, // Apply your custom 'luci-light' theme
				},
				// ... other themes
			},
		}),
		require('@tailwindcss/typography'),
	],
}

export default config

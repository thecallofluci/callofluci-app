// tailwind.config.js

import { nextui } from '@nextui-org/theme' // Import the nextui theme plugin to use NextUI theming capability 
import { NEWluciLightTheme } from './src/app/styles/themes/themes' // Import custom light theme to extend NextUI 'light' theme
import { NEWluciDarkTheme } from './src/app/styles/themes/themes' // Import custom light theme to extend NextUI 'dark' theme

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
	// set the dark mode property to class for next-themes
	darkMode: 'class',
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

	// Here, we're adding the NextUI theme as a plugin and specifying our custom themes.
	plugins: [
		nextui({
		  prefix: "nextui", // Prefix for theme variables
		  addCommonColors: false, // Override common colors (e.g., "blue", "green", "pink").
		  defaultTheme: "luci-light", // Default theme from the themes object
		  defaultExtendTheme: "light", // Default base theme to extend on custom themes
		  themes: {
			'luci-light': {
			  extend: 'light', // Extend the next-ui 'light' theme
			  ...NEWluciLightTheme, // Apply your custom 'luci-light' theme
			},
			'luci-dark': {
			  extend: 'dark', // Extend the next-ui 'dark' theme
			  ...NEWluciDarkTheme, // Apply your custom 'luci-dark' theme
			},
			// ... other themes
		  },
		}),
	  ],
}

export default config

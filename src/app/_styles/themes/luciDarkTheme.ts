// luciDarkTheme.ts
import { themeColorsDark, semanticColors } from '../colors/luciSemantic'

export { semanticColors }

export const luciDarkTheme = {
	extend: 'dark', // <- inherit default values from dark theme
	colors: {
		...themeColorsDark,
		// Add any additional color definitions here
	},
	layout: {
		disabledOpacity: '0.3',
		radius: {
			small: '4px',
			medium: '6px',
			large: '8px',
		},
		borderWidth: {
			small: '1px',
			medium: '2px',
			large: '3px',
		},
	},
}

import { testThemes } from '../colors/semantic'

// import custom typography classes once those are defined
// reorganize my theme-related tokens, including layout, color, font, typography, using https://nextui.org/docs/customization/theme#types

// Define the base layout used for both themes, using next-ui layout token
const baseLayout = {
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
}

export const NEWluciLightTheme = {
	extend: 'light', // Inherit default values from the next-ui light theme
	colors: {
		...testThemes.lightTest, // Use the light theme colors from testThemes
		// Add any additional color definitions here if necessary
	},
	layout: baseLayout, // or this could import the baseLayout from elsewhere
}

export const NEWluciDarkTheme = {
	extend: 'dark', // Inherit default values from the next-ui dark theme
	colors: {
		...testThemes.darkTest, // Use the dark theme colors from testThemes
		// Add any additional color definitions here if necessary
	},

	layout: baseLayout, 
}

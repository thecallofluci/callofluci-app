// luciLightTheme.ts
import { ThemeColors } from '../../../../types'
import { themeColorsLight, semanticColors } from './luciSemantic'

export { semanticColors }

 /*

// Extend the ThemeColors type to include the 'extend' property
interface ExtendedThemeColors extends ThemeColors {
	extend?: 'light' | 'dark';
  }
  

  
 

  export const luciLightTheme = {
    extend: "light", // <- inherit default values from dark theme
	...themeColorsLight,
  }

export const layout = {
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

*/ 

export const luciLightTheme = {
    extend: "light", // <- inherit default values from light theme
    colors: {
        ...themeColorsLight,
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
};
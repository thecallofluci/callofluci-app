// semantic.ts
// semantic color definitions using base colors in colors.ts

// Importing the base colors
import { baseColors } from '../colors/colors'

{/*
	bone:   	'#EEE6D9',        // Japanese White
	echo:   	'#974B27',        // Chestnut
	luci:   	'#B4682C',        // Ruddy Brown
	shadow: 	'#050200',        // Rich Black
	skull:  	'#FFFCFA',        // Lotion White
	sulfuric:  	'#DEB23E',     	  // Sulfur Yellow
	tendril: 	'#8C9A8D',		  // Laurel Green

	luciRedTemp: 		'#f31260',    // NextUI red
	luciPurpleTemp: 	'#7828c8',    // NextUI purple
	luciBlueTemp: 		'#006FEE',	  // NextUI blue
	luciLightGrayTemp:  '#d4d4d8',    // NextUI light gray for light theme default
	luciDarkGrayTemp:   '#3f3f46',    // NextUI dark gray for dark theme default

*/}

// Defining SemanticBaseColors for light and dark themes
export const semanticBaseColors = {
	lightTest: {
		background: baseColors.bone,
		foreground: baseColors.echo,
		divider: baseColors.luciLightGrayTemp,
		overlay: baseColors.sulfuric,
		focus: baseColors.luciBlueTemp,
		// Additional base semantic colors can be defined here
	},
	darkTest: {
		background: baseColors.echo,
		foreground: baseColors.bone,
		divider: baseColors.luciDarkGrayTemp,
		overlay: baseColors.sulfuric,
		focus: baseColors.luciBlueTemp,
		// Additional base semantic colors can be defined here
	},
}

// Defining ThemeColors for light and dark themes
export const themeColorsLightTest = {
	...semanticBaseColors.lightTest,
	default: baseColors.luciLightGrayTemp,
	primary: baseColors.luciLightGrayTemp,
	secondary: baseColors.luciPurpleTemp,
	success: baseColors.tendril,
	warning: baseColors.sulfuric,
	danger: baseColors.luciRedTemp,
	// Additional theme-specific semantic colors can be defined here
}


export const themeColorsDarkTest = {
	...semanticBaseColors.darkTest,
	default: baseColors.luciDarkGrayTemp,
	primary: baseColors.luciBlueTemp,
	secondary: baseColors.luciPurpleTemp,
	success: baseColors.tendril,
	warning: baseColors.sulfuric,
	danger: baseColors.luciRedTemp,
	// Additional theme-specific semantic colors can be defined here
}

// Exporting a single object that contains both light and dark theme colors
export const testThemes = {
	lightTest: themeColorsLightTest,
	darkTest: themeColorsDarkTest,
}

// list of NextUI default semantic colors:
// light theme:
{/* 
light {
		background: #FFFFFF, // true white,
		foreground: #11181C, // custom black,
		divider: #d4d4d8, // light grey
		overlay: not defined,
		focus: #006FEE, // blue (same as primary)
		
		default: #d4d4d8, // light grey
		primary: #006FEE, // blue (same as focus)
		secondary: #7828c8, // purple
		success: #17c964, // green
		warning: #f5a524 // yellow
		danger: #f31260 // red
	},

dark {
		background: #000000, // true black,
		foreground: #ECEDEE, // custom white,
		divider: #3f3f46, // dark(er) grey,
		overlay: not defined,
		focus: #006FEE, // blue (same as primary)
		
		default: #3f3f46, // dark(er) grey,
		primary: #006FEE, // blue (same as focus)
		secondary: #9353d3 / purple (different from light)
		success: #17c964, // green (same as light)
		warning: #f5a524 // yellow 
		danger: #f31260 // red (same as light)
		},

*/}
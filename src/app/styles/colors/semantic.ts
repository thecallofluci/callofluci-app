// semantic.ts
// semantic color definitions using base colors in colors.ts

// Importing the base colors
import { baseColors } from '../colors/colors'

// Defining SemanticBaseColors for light and dark themes
export const semanticBaseColors = {
	lightTest: {
		background: baseColors.bone,
		foreground: baseColors.echo,
		divider: baseColors.shadow,
		overlay: baseColors.luci,
		focus: baseColors.luci,
		// Additional base semantic colors can be defined here
	},
	darkTest: {
		background: baseColors.echo,
		foreground: baseColors.bone,
		divider: baseColors.skull,
		overlay: baseColors.luci,
		focus: baseColors.luci,
		// Additional base semantic colors can be defined here
	},
}

// Defining ThemeColors for light and dark themes
export const themeColorsLightTest = {
	...semanticBaseColors.lightTest,
	primary: baseColors.echo,
	secondary: baseColors.luci,
	success: baseColors.luci,
	warning: baseColors.luci,
	danger: baseColors.luci,
	// Additional theme-specific semantic colors can be defined here
}

export const themeColorsDarkTest = {
	...semanticBaseColors.darkTest,
	primary: baseColors.bone,
	secondary: baseColors.skull,
	success: baseColors.skull,
	warning: baseColors.skull,
	danger: baseColors.skull,
	// Additional theme-specific semantic colors can be defined here
}

// Exporting a single object that contains both light and dark theme colors
export const testThemes = {
	lightTest: themeColorsLightTest,
	darkTest: themeColorsDarkTest,
}
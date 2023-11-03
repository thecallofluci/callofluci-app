// luciColors.ts
import { ColorScale } from '../../../../types'

// custom orange color palette
const luci = {
	50: '#FBF4EF', // Very light orange, almost white with a hint of orange
	100: '#F7E9DE', // Light orange
	200: '#EFD3BD', // Light-medium orange
	300: '#E4B590', // Medium orange, less saturated
	400: '#D7915B', // Medium orange, more saturated
	500: '#B4682C', // Saturated medium-dark orange
	600: '#A45E28', // Dark orange
	700: '#8F5223', // Darker orange
	800: '#77441D', // Very dark orange
	900: '#522F14', // Extremely dark orange, almost brown
	950: '#39210E', // Near-black orange
}

// custom gray color palette
const shadow = {
	50: '#FAFAFA', // Very light gray, almost white
	100: '#F4F4F5', // Light gray
	200: '#E4E4E7', // Light-medium gray
	300: '#D4D4D8', // Medium gray, less saturated
	400: '#A1A1AA', // Medium gray, more saturated
	500: '#71717A', // Saturated medium-dark gray
	600: '#52525B', // Dark gray
	700: '#3F3F46', // Darker gray
	800: '#27272A', // Very dark gray
	900: '#18181B', // Extremely dark gray, almost black
	950: '#09090B', // Near-black gray
}

// custom blue color palette
const echo = {
	50: '#F9EDD9',
	100: '#FAE6C3', // Light blue
	200: '#FBDA97',
	300: '#F8CF6F',
	400: '#EFC251',
	500: '#DEB23E', // Medium blue
	600: '#C49D38',
	700: '#A38437',
	800: '#7C6636',
	900: '#51452D', // Very dark blue, almost black
	950: '#393123', // Near-black blue
}

// custom green color palette
const tendril = {
	50: '#ECEFE7',
	100: '#E2E6DE', // Light green
	200: '#CED4CB',
	300: '#B9C2B8',
	400: '#A3AFA3',
	500: '#8C9A8D', // Medium green
	600: '#748474',
	700: '#5D6D5B',
	800: '#485544',
	900: '#343D2D', // Very dark green, almost black
	950: '#1A2E05', // Near-black green
}

// custom red color palette
const flame = {
	50: '#F2E9E7',
	100: '#E6D3CF', // Light red
	200: '#D9BEB7',
	300: '#CCA9A0',
	400: '#BE9589',
	500: '#B18073', // Medium red
	600: '#A36C5D',
	700: '#965848',
	800: '#874433',
	900: '#79301D', // Very dark red, almost black
	950: '#450a0a', // Near-black red
}

// custom yellow color palette
const sulfuric = {
	50: '#F9EDD9',
	100: '#FAE6C3', // Light yellow
	200: '#FBDA97',
	300: '#F8CF6F',
	400: '#EFC251',
	500: '#DEB23E', // Medium yellow
	600: '#C49D38',
	700: '#A38437',
	800: '#7C6636',
	900: '#51452D', // Very dark yellow, almost black
	950: '#3D3200', // Near-black yellow
}

// custom neutral color palette
const bone = {
	50: '#FAFAF9',
	100: '#F5F5F4', // Light neutral
	200: '#E7E5E4',
	300: '#D6D3D1',
	400: '#A8A29E',
	500: '#78716C', // Medium neutral
	600: '#57534E',
	700: '#44403C',
	800: '#292524',
	900: '#1C1917', // Very dark neutral, almost black
	950: '#0C0A09',
}

export const commonColors = {
	white: "#ffffff",
	black: "#000000",
	luci,
	shadow,
	echo,
	tendril,
	flame,
	sulfuric,
	bone,
  };
  
  export type CommonColors = typeof commonColors;
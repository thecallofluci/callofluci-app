import { medium, black } from '@/src/app/styles/fonts/fonts'

const typography = {
	'body-normal': {
		fontFamily: medium.variable,
		fontWeight: '600', // Medium weight from fonts.ts
		fontSize: '16px',
		lineHeight: '24px',
		letterSpacing: '0.2px',
	},testing
	h1: {
		fontFamily: black.variable,
		fontWeight: '900', // 95 Black weight from fonts.ts
		fontSize: '24px',
		lineHeight: '32px',
		letterSpacing: '0px',
	},
	h2: {
		fontFamily: black.variable,
		fontWeight: '900', // Same as h1 for consistency
		fontSize: '16px',
		lineHeight: '24px',
		letterSpacing: '0px',
	},
	h3: {
		fontFamily: black.variable,
		fontWeight: '900',
		fontSize: '14px',
		lineHeight: '21px',
		letterSpacing: '0px',
	},
	'body-bold': {
		fontFamily: black.variable,
		fontWeight: '900',
		fontSize: '16px',
		lineHeight: '24px',
		letterSpacing: '0.2px',
	},
	'figure-caption': {
		fontFamily: black.variable,
		fontWeight: '900',
		fontSize: '18px',
		lineHeight: '28px',
		letterSpacing: '0px',
	},
	hero: {
		fontFamily: black.variable,
		fontWeight: '900',
		fontSize: '48px',
		lineHeight: '56px',
		letterSpacing: '0px',
	},
	title: {
		fontFamily: black.variable,
		fontWeight: '900',
		fontSize: '32px',
		lineHeight: '40px',
		letterSpacing: '0px',
	},
	'number-huge': {
		fontFamily: black.variable,
		fontWeight: '900',
		fontSize: '60px',
		lineHeight: '56px',
		letterSpacing: '0px',
	},
	// Add more typography elements as needed
}

export default typography

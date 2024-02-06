/* fonts.ts defines font objects for 16 versions of Neue Haas Grotesk Display font, using Next.js's next/font/local function. */
/* Note: static .woff2 font files for 16 versions of Neue Haas Grotesk Display font, stored in /public/fonts/woff2. */

import localFont from 'next/font/local'

/* Next.js Font Function Arguments
src: path of font file.  
weight: An array of weight values (for non-variable fonts).
style: An array of style values (for non-variable fonts).
display: font display, 'auto', 'block', 'swap', 'fallback' or 'optional' with default value of 'swap'.
preload: Whether to preload font, 'true', 'false'.
fallback: An array of strings of fallback fonts with no default.
adjustFontFallback: A string that sets whether an automatic fallback font should be used; possible values are 'Arial', 'Times New Roman' or false. The default is 'Arial'.
variable: string value to define CSS variable name to be used if style is applied with CSS variable method.
declarations: An array of font face descriptor key-value pairs that define the generated @font-face further.
*/

/* 15 Ultra Thin */
export const ultraThin = localFont({
	src: './woff2/neue1.woff2',
	weight: '100',
	style: 'normal',
	display: 'swap',
	preload: false,
	fallback: ['arial', 'system-ui'],
	adjustFontFallback: 'Arial',
	variable: '--font-ultra-thin',
	declarations: [
		// Standard @font-face keys shown in kebab-face:
		{ key: 'src', value: '/fonts/woff2/neue1.woff2' },
		{ key: 'font-family', value: 'Neue Haas Grotesk Display' },
		{ key: 'font-weight', value: '100' },
		{ key: 'font-style', value: 'normal' },
		{ key: 'font-display', value: 'swap' },
		// Custom documentation keys shown in CamelCase:
		{ key: 'fontTitle', value: '15 Ultra Thin' },
		{ key: 'fontUsage', value: 'Use for ultra-light text in large headers.' },
	],
})

/* 16 Ultra Thin Italic */
export const ultraThinItalic = localFont({
	src: './woff2/neue2.woff2',
	weight: '100',
	style: 'italic',
	display: 'swap',
	preload: false,
	fallback: ['arial', 'system-ui'],
	adjustFontFallback: 'Arial',
	variable: '--font-ultra-thin-italic',
	declarations: [
		// Standard @font-face keys shown in kebab-face:
		{ key: 'src', value: '/fonts/woff2/neue2.woff2' },
		{ key: 'font-family', value: 'Neue Haas Grotesk Display' },
		{ key: 'font-weight', value: '100' },
		{ key: 'font-style', value: 'italic' },
		{ key: 'font-display', value: 'swap' },
		// Custom documentation keys shown in CamelCase:
		{ key: 'fontTitle', value: '16 Ultra Thin Italic' },
		{ key: 'fontUsage', value: 'Use for emphasized text within large headers.' },
	],
})

/* 25 Thin */
export const thin = localFont({
	src: './woff2/neue3.woff2',
	weight: '200',
	style: 'normal',
	display: 'swap',
	preload: false,
	fallback: ['arial', 'system-ui'],
	adjustFontFallback: 'Arial',
	variable: '--font-thin',
	declarations: [
		// Standard @font-face keys shown in kebab-face:
		{ key: 'src', value: '/fonts/woff2/neue3.woff2' },
		{ key: 'font-family', value: 'Neue Haas Grotesk Display' },
		{ key: 'font-weight', value: '200' },
		{ key: 'font-style', value: 'normal' },
		{ key: 'font-display', value: 'swap' },
		// Custom documentation keys shown in CamelCase:
		{ key: 'fontTitle', value: '25 Thin' },
		{ key: 'fontUsage', value: 'Use for ...' },
	],
})

/* 26 Thin Italic */
export const thinItalic = localFont({
	src: './woff2/neue4.woff2',
	weight: '200',
	style: 'italic',
	display: 'swap',
	preload: false,
	fallback: ['arial', 'system-ui'],
	adjustFontFallback: 'Arial',
	variable: '--font-thin-italic',
	declarations: [
		// Standard @font-face keys shown in kebab-face:
		{ key: 'src', value: '/fonts/woff2/neue4.woff2' },
		{ key: 'font-family', value: 'Neue Haas Grotesk Display' },
		{ key: 'font-weight', value: '200' },
		{ key: 'font-style', value: 'italic' },
		{ key: 'font-display', value: 'swap' },
		// Custom documentation keys shown in CamelCase:
		{ key: 'fontTitle', value: '26 Thin Italic' },
		{ key: 'fontUsage', value: 'Use for ...' },
	],
})

/* 35 Extra Light */
export const extraLight = localFont({
	src: './woff2/neue5.woff2',
	weight: '300',
	style: 'normal',
	display: 'swap',
	preload: false,
	fallback: ['arial', 'system-ui'],
	adjustFontFallback: 'Arial',
	variable: '--font-extra-light',
	declarations: [
		// Standard @font-face keys shown in kebab-face:
		{ key: 'src', value: '/fonts/woff2/neue5.woff2' },
		{ key: 'font-family', value: 'Neue Haas Grotesk Display' },
		{ key: 'font-weight', value: '300' },
		{ key: 'font-style', value: 'normal' },
		{ key: 'font-display', value: 'swap' },
		// Custom documentation keys shown in CamelCase:
		{ key: 'fontTitle', value: '35 Extra Light' },
		{ key: 'fontUsage', value: 'Use for ...' },
	],
})

/* 36 Extra Light Italic */
export const extraLightItalic = localFont({
	src: './woff2/neue6.woff2',
	weight: '300',
	style: 'italic',
	display: 'swap',
	preload: false,
	fallback: ['arial', 'system-ui'],
	adjustFontFallback: 'Arial',
	variable: '--font-extra-light-italic',
	declarations: [
		// Standard @font-face keys shown in kebab-face:
		{ key: 'src', value: '/fonts/woff2/neue6.woff2' },
		{ key: 'font-family', value: 'Neue Haas Grotesk Display' },
		{ key: 'font-weight', value: '300' },
		{ key: 'font-style', value: 'italic' },
		{ key: 'font-display', value: 'swap' },
		// Custom documentation keys shown in CamelCase:
		{ key: 'fontTitle', value: '36 Extra Light Italic' },
		{ key: 'fontUsage', value: 'Use for ...' },
	],
})

/* 45 Light */
export const light = localFont({
	src: './woff2/neue7.woff2',
	weight: '400',
	style: 'normal',
	display: 'swap',
	preload: false,
	fallback: ['arial', 'system-ui'],
	adjustFontFallback: 'Arial',
	variable: '--font-light',
	declarations: [
		// Standard @font-face keys shown in kebab-face:
		{ key: 'src', value: '/fonts/woff2/neue7.woff2' },
		{ key: 'font-family', value: 'Neue Haas Grotesk Display' },
		{ key: 'font-weight', value: '400' },
		{ key: 'font-style', value: 'normal' },
		{ key: 'font-display', value: 'swap' },
		// Custom documentation keys shown in CamelCase:
		{ key: 'fontTitle', value: '45 Light' },
		{ key: 'fontUsage', value: 'Use for ...' },
	],
})

/* 46 Light Italic */
export const lightItalic = localFont({
	src: './woff2/neue8.woff2',
	weight: '400',
	style: 'italic',
	display: 'swap',
	preload: false,
	fallback: ['arial', 'system-ui'],
	adjustFontFallback: 'Arial',
	variable: '--font-light-italic',
	declarations: [
		// Standard @font-face keys shown in kebab-face:
		{ key: 'src', value: '/fonts/woff2/neue8.woff2' },
		{ key: 'font-family', value: 'Neue Haas Grotesk Display' },
		{ key: 'font-weight', value: '400' },
		{ key: 'font-style', value: 'italic' },
		{ key: 'font-display', value: 'swap' },
		// Custom documentation keys shown in CamelCase:
		{ key: 'fontTitle', value: '46 Light Italic' },
		{ key: 'fontUsage', value: 'Use for ...' },
	],
})

/* 55 Roman */
export const roman = localFont({
	src: './woff2/neue9.woff2',
	weight: '500',
	style: 'normal',
	display: 'swap',
	preload: false,
	fallback: ['arial', 'system-ui'],
	adjustFontFallback: 'Arial',
	variable: '--font-roman',
	declarations: [
		// Standard @font-face keys shown in kebab-face:
		{ key: 'src', value: '/fonts/woff2/neue9.woff2' },
		{ key: 'font-family', value: 'Neue Haas Grotesk Display' },
		{ key: 'font-weight', value: '500' },
		{ key: 'font-style', value: 'normal' },
		{ key: 'font-display', value: 'swap' },
		// Custom documentation keys shown in CamelCase:
		{ key: 'fontTitle', value: '55 Roman' },
		{ key: 'fontUsage', value: 'Use for ...' },
	],
})

/* 56 Italic */
export const italic = localFont({
	src: './woff2/neue10.woff2',
	weight: '500',
	style: 'italic',
	display: 'swap',
	preload: false,
	fallback: ['arial', 'system-ui'],
	adjustFontFallback: 'Arial',
	variable: '--font-italic',
	declarations: [
		// Standard @font-face keys shown in kebab-face:
		{ key: 'src', value: '/fonts/woff2/neue10.woff2' },
		{ key: 'font-family', value: 'Neue Haas Grotesk Display' },
		{ key: 'font-weight', value: '500' },
		{ key: 'font-style', value: 'italic' },
		{ key: 'font-display', value: 'swap' },
		// Custom documentation keys shown in CamelCase:
		{ key: 'fontTitle', value: '56 Italic' },
		{ key: 'fontUsage', value: 'Use for ...' },
	],
})

/* 65 Medium */
export const medium = localFont({
	src: './woff2/neue11.woff2',
	weight: '600',
	style: 'normal',
	display: 'swap',
	preload: false,
	fallback: ['arial', 'system-ui'],
	adjustFontFallback: 'Arial',
	variable: '--font-medium',
	declarations: [
		// Standard @font-face keys shown in kebab-face:
		{ key: 'src', value: '/fonts/woff2/neue11.woff2' },
		{ key: 'font-family', value: 'Neue Haas Grotesk Display' },
		{ key: 'font-weight', value: '600' },
		{ key: 'font-style', value: 'normal' },
		{ key: 'font-display', value: 'swap' },
		// Custom documentation keys shown in CamelCase:
		{ key: 'fontTitle', value: '65 Medium' },
		{ key: 'fontUsage', value: 'Use for ...' },
	],
})

/* 66 Medium Italic */
export const mediumItalic = localFont({
	src: './woff2/neue12.woff2',
	weight: '600',
	style: 'italic',
	display: 'swap',
	preload: false,
	fallback: ['arial', 'system-ui'],
	adjustFontFallback: 'Arial',
	variable: '--font-medium-italic',
	declarations: [
		// Standard @font-face keys shown in kebab-face:
		{ key: 'src', value: '/fonts/woff2/neue12.woff2' },
		{ key: 'font-family', value: 'Neue Haas Grotesk Display' },
		{ key: 'font-weight', value: '600' },
		{ key: 'font-style', value: 'italic' },
		{ key: 'font-display', value: 'swap' },
		// Custom documentation keys shown in CamelCase:
		{ key: 'fontTitle', value: '66 Medium Italic' },
		{ key: 'fontUsage', value: 'Use for ...' },
	],
})

/* 75 Bold */
export const bold = localFont({
	src: './woff2/neue13.woff2',
	weight: '700',
	style: 'normal',
	display: 'swap',
	preload: false,
	fallback: ['arial', 'system-ui'],
	adjustFontFallback: 'Arial',
	variable: '--font-bold',
	declarations: [
		// Standard @font-face keys shown in kebab-face:
		{ key: 'src', value: '/fonts/woff2/neue13.woff2' },
		{ key: 'font-family', value: 'Neue Haas Grotesk Display' },
		{ key: 'font-weight', value: '700' },
		{ key: 'font-style', value: 'normal' },
		{ key: 'font-display', value: 'swap' },
		// Custom documentation keys shown in CamelCase:
		{ key: 'fontTitle', value: '75 Bold' },
		{ key: 'fontUsage', value: 'Use for ...' },
	],
})

/* 76 Bold Italic */
export const boldItalic = localFont({
	src: './woff2/neue14.woff2',
	weight: '700',
	style: 'italic',
	display: 'swap',
	preload: false,
	fallback: ['arial', 'system-ui'],
	adjustFontFallback: 'Arial',
	variable: '--font-bold-italic',
	declarations: [
		// Standard @font-face keys shown in kebab-face:
		{ key: 'src', value: '/fonts/woff2/neue14.woff2' },
		{ key: 'font-family', value: 'Neue Haas Grotesk Display' },
		{ key: 'font-weight', value: '700' },
		{ key: 'font-style', value: 'italic' },
		{ key: 'font-display', value: 'swap' },
		// Custom documentation keys shown in CamelCase:
		{ key: 'fontTitle', value: '76 Bold Italic' },
		{ key: 'fontUsage', value: 'Use for ...' },
	],
})

/* 95 Black */
export const black = localFont({
	src: './woff2/neue15.woff2',
	weight: '900',
	style: 'normal',
	display: 'swap',
	preload: false,
	fallback: ['arial', 'system-ui'],
	adjustFontFallback: 'Arial',
	variable: '--font-black',
	declarations: [
		// Standard @font-face keys shown in kebab-face:
		{ key: 'src', value: '/fonts/woff2/neue15.woff2' },
		{ key: 'font-family', value: 'Neue Haas Grotesk Display' },
		{ key: 'font-weight', value: '900' },
		{ key: 'font-style', value: 'normal' },
		{ key: 'font-display', value: 'swap' },
		// Custom documentation keys shown in CamelCase:
		{ key: 'fontTitle', value: '95 Black' },
		{ key: 'fontUsage', value: 'Use for ...' },
	],
})

/* 96 Black Italic */
export const blackItalic = localFont({
	src: './woff2/neue16.woff2',
	weight: '900',
	style: 'italic',
	display: 'swap',
	preload: false,
	fallback: ['arial', 'system-ui'],
	adjustFontFallback: 'Arial',
	variable: '--font-black-italic',
	declarations: [
		// Standard @font-face keys shown in kebab-face:
		{ key: 'src', value: '/fonts/woff2/neue16.woff2' },
		{ key: 'font-family', value: 'Neue Haas Grotesk Display' },
		{ key: 'font-weight', value: '900' },
		{ key: 'font-style', value: 'italic' },
		{ key: 'font-display', value: 'swap' },
		// Custom documentation keys shown in CamelCase:
		{ key: 'fontTitle', value: '96 Black Italic' },
		{ key: 'fontUsage', value: 'Use for ...' },
	],
})

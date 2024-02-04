import localFont from 'next/font/local'
import { Overpass, Overpass_Mono } from 'next/font/google'

// define your variable fonts
/*
export const fontSans = Overpass({
	subsets: ['latin'],
	variable: '--font-overpass',
	display: 'swap',
})
export const fontMono = Overpass_Mono({
	subsets: ['latin'],
	variable: '--font-overpass-mono',
	display: 'swap',
})
*/
export const fontGrotesk = localFont({
	src: './grotesk.woff2',
	variable: '--font-grotesk',
	display: 'swap',
})

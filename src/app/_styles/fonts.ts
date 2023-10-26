import { Overpass, Overpass_Mono } from 'next/font/google'

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
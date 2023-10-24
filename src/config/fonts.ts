import { Overpass, Overpass_Mono } from 'next/font/google'

export const fontSans = Overpass({
  subsets: ['latin'],
  variable: '--font-overpass',
})

export const fontMono = Overpass_Mono({
  subsets: ['latin'],
  variable: '--font-overpass-mono',
})
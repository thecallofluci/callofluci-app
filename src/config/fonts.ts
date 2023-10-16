import {
    Roboto_Mono as FontMono,
    Nunito_Sans as FontSans,
} from 'next/font/google'

export const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
})

export const fontMono = FontMono({
    subsets: ['latin'],
    variable: '--font-mono',
})

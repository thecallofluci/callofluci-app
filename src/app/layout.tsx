import '@/src/styles/globals.css'
import { Metadata } from 'next'
import { siteConfig } from '@/src/config/site'
import { fontSans } from '@/src/config/fonts'
import { Providers } from './providers'
import { Navbar } from '@/src/components/navbar'
import { Link } from '@nextui-org/link'
import clsx from 'clsx'
import { Snippet } from '@nextui-org/snippet'
import { Code } from '@nextui-org/code'
import { button as buttonStyles } from '@nextui-org/theme'
import packageJson from '../../package.json'

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'white' },
        { media: '(prefers-color-scheme: dark)', color: 'black' },
    ],
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <body
                className={clsx(
                    'min-h-screen bg-background font-sans antialiased',
                    fontSans.variable
                )}
            >
                <Providers
                    themeProps={{ attribute: 'class', defaultTheme: 'dark' }}
                >
                    <div className="relative flex flex-col h-screen">
                        <Navbar />
                        <main className="container mx-auto max-w-7xl pt-8 px-4 flex-grow">
                            {children}
                        </main>
                        <footer className="w-full flex items-center justify-center py-3">
                            <div className="mt-8">
                                <Snippet
                                    hideSymbol
                                    hideCopyButton
                                    variant="flat"
                                >
                                    <span>
                                        <Link href="https://github.com/thecallofluci/callofluci-app">
                                            {' '}
                                            <Code color="primary">
                                                v{packageJson.version}+
                                                {process.env.REACT_APP_GIT_HASH}
                                            </Code>
                                        </Link>
                                    </span>
                                </Snippet>
                            </div>
                        </footer>
                    </div>
                </Providers>
            </body>
        </html>
    )
}

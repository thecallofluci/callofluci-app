// This is the root layout of your application.
// It sets up the global styles, context providers, and the structure of your application.
// It also imports and uses various components and modules.

// Importing necessary modules and components
import '@/src/app/_styles/globals.css'
import { fontSans, fontMono } from '@/src/app/_styles/fonts'
import { Providers } from '@/src/app/_components/_NextUI/providers'
import { SlimNavbar } from '@/src/app/_components/_ui/slimnavbar'
import clsx from 'clsx'
import Footer from '@/src/app/_components/_ui/footer'

// Defining the RootLayout component
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        // Defining the basic HTML structure
        <html
            lang="en"
            suppressHydrationWarning
            className={`${fontSans.variable} ${fontMono.variable}`}
        >
            <head />
            <body
                // Applying CSS styles to the body
                className={clsx('min-h-screen bg-background antialiased')}
            >
                <Providers themeProps={{ attribute: "class", defaultTheme: "luci-dark" }}>
                    <div className="relative flex flex-col h-screen">
                        <SlimNavbar />
                        <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
                            {children}
                        </main>
                        <Footer />
                    </div>
                </Providers>
            </body>
        </html>
    )
}

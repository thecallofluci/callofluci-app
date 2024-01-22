// src/app/layout.tsx
import '@/src/app/styles/globals.css'
import { fontSans, fontMono } from '@/src/app/styles/fonts/fonts'
import { Providers } from '@/src/app/components/providers/providers'

import clsx from 'clsx'
import AppWrapper from '@/src/app/components/layout/AppWrapper'

// Defining the Root Layout component
export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		// Defining the basic HTML structure
		<html
			lang="en"
			
			className={`${fontSans.variable} ${fontMono.variable}`}
		>
			<head />
			<body
				// Applying CSS styles to the body
				className={clsx('min-h-screen bg-background antialiased')}
			>
				<Providers themeProps={{ attribute: 'class', defaultTheme: 'luci-dark' }}>
					<AppWrapper>{children}</AppWrapper>
				</Providers>
			</body>
		</html>
	)
}

// src/app/layout.tsx
import '@/src/app/styles/globals.css'
import clsx from 'clsx'
import { Providers } from '@/src/app/components/providers/providers'
import AppWrapper from '@/src/app/components/layout/AppWrapper'

// Defining the Root Layout component
export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html suppressHydrationWarning lang="en" className="var(--font-medium)">
			<head />
			<body className={clsx('min-h-screen antialiased')}>
				<Providers themeProps={{ attribute: 'class', defaultTheme: 'luci-light' }}>
					<AppWrapper>{children}</AppWrapper>
				</Providers>
			</body>
		</html>
	)
}

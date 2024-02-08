// providers.tsx
'use client'

import * as React from 'react'
// Import NextUIProvider for UI theming and styling
import { NextUIProvider } from '@nextui-org/system'
// Import NextThemesProvider for managing light and dark themes
import { ThemeProvider as NextThemesProvider } from 'next-themes'
// Import type definitions for theme props
import { ThemeProviderProps } from 'next-themes/dist/types'
// useRouter hook for navigation within NextUIProvider
import { useRouter } from 'next/navigation'

// Interface defining the props accepted by the Providers component
export interface ProvidersProps {
	children: React.ReactNode // Child components to be rendered within the Providers component
	themeProps?: ThemeProviderProps // Optional: Additional props for configuring the NextThemesProvider
}

// Providers component that sets up theme and UI providers for the app
export function Providers({ children, themeProps }: ProvidersProps) {
	const router = useRouter() // Initialize useRouter hook for navigation support in NextUI

	// Return a composition of NextUIProvider and NextThemesProvider wrapping the child components
	// NextUIProvider is configured for navigation, and NextThemesProvider manages theme switching
	return (
		<NextUIProvider navigate={router.push}>
			<NextThemesProvider
				attribute="class"
				defaultTheme="luci-light"
				enableSystem={true}
				enableColorScheme={true}
				themes={['light', 'dark', 'luci-light', 'luci-dark']}
				{...themeProps} // Allows for dynamic extension if needed
			>
				{children} {/* Render child components within the theme providers */}
			</NextThemesProvider>
		</NextUIProvider>
	)
}

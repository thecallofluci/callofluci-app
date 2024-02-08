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
	children: React.ReactNode       // Child components to be rendered within the Providers component
	themeProps?: ThemeProviderProps // Optional: Additional props for configuring the NextThemesProvider
}

// Providers component that sets up theme and UI providers for the app
export function Providers({ children, themeProps }: ProvidersProps) {
	const router = useRouter() // Initialize useRouter hook for navigation support in NextUI

	// Return composition of NextUIProvider (next-ui) and NextThemesProvider (next-themes) wrapping the child components
	// NextUIProvider is configured for navigation, and NextThemesProvider manages theme switching
	return (
		<NextUIProvider navigate={router.push}>
			{' '}
			{/* Utilize Next.js router for NextUI navigation */}
			<NextThemesProvider //  lists theme configuration options passed to next-themes ThemeProvider
				storageKey="theme"          // Key used to store theme setting in localStorage
				defaultTheme="luci-light"   // Default theme name
				forcedTheme={undefined}     // Explicitly set to undefined unless you have a specific need to force a theme
				enableSystem={false}        // Whether to switch between dark and light based on prefers-color-scheme
				enableColorScheme={true}    // Whether to indicate to browsers which color scheme is used 
				disableTransitionOnChange={true} // Disable all CSS transitions when switching themes 
				themes={['light', 'dark', 'luci-light', 'luci-dark']} // List of theme names
				attribute="class"           // Use the 'class' attribute for theme switching to ensure compatibility with NextUI
				value={{}}                  // Define if you have specific attribute values for each theme
				nonce={undefined}           // Set if you need to specify a nonce for CSP
				{...themeProps}             // Spread any additional theme configuration props
			>
				{children} {/* Render child components within the theme providers */}
			</NextThemesProvider>
		</NextUIProvider>
	)
}

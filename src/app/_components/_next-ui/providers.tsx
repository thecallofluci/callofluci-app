// src/app/_components/_NextUI/providers.tsx
'use client'

import * as React from 'react'

import { NextUIProvider } from '@nextui-org/system'

import {useRouter} from 'next/navigation'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'


// Define the props for the Providers component
export interface ProvidersProps {
    children: React.ReactNode // The child elements to be rendered within the Providers
    themeProps?: ThemeProviderProps // Optional props for the NextThemesProvider
}

// The Providers component
export function Providers({ children, themeProps }: ProvidersProps) {
    const router = useRouter(); // Use the useRouter hook
   
    return (
        <NextUIProvider navigate={router.push}>
            <NextThemesProvider
                attribute="class"
                defaultTheme="luci-dark"
                themes={['light', 'dark', 'luci-light', 'luci-dark']}
                {...themeProps}
            >
                {children} 
            </NextThemesProvider>
        </NextUIProvider>
    )
}

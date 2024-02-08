'use client'

import { FC, useEffect, useState } from 'react'
import { VisuallyHidden } from '@react-aria/visually-hidden'
import { SwitchProps, useSwitch } from '@nextui-org/switch'
import { useTheme } from 'next-themes'
import { useIsSSR } from '@react-aria/ssr'
import clsx from 'clsx'
import { SunIcon, MoonIcon } from '@/src/app/components/ui/LuciIcons'

// Define the props for the ThemeSwitch component
export interface ThemeSwitchProps {
	className?: string
	classNames?: SwitchProps['classNames']
}

// Define the ThemeSwitch component
export const LuciThemeSwitch: FC<ThemeSwitchProps> = ({ className, classNames }) => {
	const { theme, setTheme } = useTheme()
	const isSSR = useIsSSR()
//	const [mounted, setMounted] = useState(false)   // disabled for test

	// Ensure we only switch themes client-side     // disabled for test
//	useEffect(() => {                               // disabled for test
//		setMounted(true)                            // disabled for test
//	}, [])                                          // disabled for test

	// Define the onChange function to toggle the theme
	const onChange = () => {
		setTheme(theme === 'luci-dark' ? 'luci-light' : 'luci-dark')
	}

	const { Component, slots, isSelected, getBaseProps, getInputProps, getWrapperProps } =
		useSwitch({
//			isSelected: !isSSR && mounted && theme === 'luci-dark', // disabled for test
            isSelected: !isSSR && theme === 'luci-dark',
			'aria-label': `Switch to ${theme === 'luci-dark' ? 'luci-light' : 'luci-dark'} mode`,
			onChange,
		})

//	if (!mounted) {                                                     // disabled for test
//		return null // Avoids rendering mismatch on hydration           // disabled for test
//	}  // disabled for test

    return (
        <div className={clsx('flex flex-col gap-2', className)}>
            <Component {...getBaseProps()}>
                <VisuallyHidden>
                    <input {...getInputProps()} />
                </VisuallyHidden>
                <div
                    {...getWrapperProps()}
                    className={slots.wrapper({
                        class: clsx(
                            'w-auto h-auto bg-transparent rounded-lg flex items-center justify-center',
                            isSelected ? '!text-primary' : '!text-foreground',
                            classNames?.wrapper
                        ),
                    })}
                    >
                    {isSelected ? (
                        <SunIcon className="size={22}" />
                    ) : (
                        <MoonIcon className="size={22}" />
                    )}
                </div>
            </Component>
        </div>
    )
}

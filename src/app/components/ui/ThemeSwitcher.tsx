// ThemeSwitcher.tsx
'use client'

import { FC } from 'react'
import { useState, useEffect } from 'react'
import { VisuallyHidden } from '@react-aria/visually-hidden'
import { SwitchProps, useSwitch } from '@nextui-org/switch'
import { useTheme } from 'next-themes'
import { useIsSSR } from '@react-aria/ssr'
import Image from 'next/image'
import clsx from 'clsx'

import { SunIcon, MoonIcon } from '@/src/app/components/ui/LuciIcons'

// Define the props for the ThemeSwitch component
export interface ThemeSwitchProps {
	className?: string
	classNames?: SwitchProps['classNames']
}

// Define the ThemeSwitch component
export const ThemeSwitch: FC<ThemeSwitchProps> = ({ className, classNames }) => {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()
	const isSSR = useIsSSR()

	// useEffect only runs on the client, so now we can safely show the UI
	useEffect(() => {
		setMounted(true)
	}, [])

	// Define the onChange function to toggle the theme
	const onChange = () => {
		theme === 'luci-dark' ? setTheme('luci-light') : setTheme('luci-dark')
	}

	const { Component, slots, isSelected, getBaseProps, getInputProps, getWrapperProps } =
		useSwitch({
			isSelected: theme === 'luci-dark' || isSSR,
			'aria-label': `Switch to ${
				theme === 'luci-dark' || isSSR ? 'luci-light' : 'luci-dark'
			} mode`,
			onChange,
		})

		if (!mounted) {
			// Placeholder: Using an empty image or a generic loading icon
			return (
			  <div className={className} style={{ width: '22px', height: '22px' }}>
				<Image
				  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
				  alt="loading"
				  width={22}
				  height={22}
				  placeholder="blur"
				  blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
				/>
			  </div>
			)
		  }

	return (
		<Component
			{...getBaseProps({
				className: clsx(
					'px-px transition-opacity hover:opacity-80 cursor-pointer',
					className,
					classNames?.base
				),
			})}
		>
			<VisuallyHidden>
				<input {...getInputProps()} />
			</VisuallyHidden>
			<div
				{...getWrapperProps()}
				className={slots.wrapper({
					class: clsx(
						[
							'w-auto h-auto',
							'bg-transparent',
							'rounded-lg',
							'flex items-center justify-center',
							'group-data-[selected=true]:bg-transparent',
							isSelected ? '!text-primary' : '!text-foreground',
							'pt-px',
							'px-0',
							'mx-0',
						],
						classNames?.wrapper
					),
				})}
			>
				{!isSelected || isSSR ? <MoonIcon size={22} /> : <SunIcon size={22} />}
			</div>
		</Component>
	)
}

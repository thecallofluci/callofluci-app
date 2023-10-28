'use client'
import { FC } from 'react'
import { VisuallyHidden } from '@react-aria/visually-hidden'
import { SwitchProps, useSwitch } from '@nextui-org/switch'
import { useTheme } from 'next-themes'
import { useIsSSR } from '@react-aria/ssr'
import clsx from 'clsx'

import { SunFilledIcon, MoonFilledIcon } from '@/src/app/_components/_ui/icons'

// Define the props for the ThemeSwitch component
export interface ThemeSwitchProps {
    className?: string
    classNames?: SwitchProps['classNames']
}

// Define the ThemeSwitch component
export const ThemeSwitch: FC<ThemeSwitchProps> = ({
    className,
    classNames,
}) => {
    // Get the current theme and set the theme
    const { theme, setTheme } = useTheme()
    // Check if the app is running on the server
    const isSSR = useIsSSR()

    // Define the onChange function to toggle the theme
    const onChange = () => {
		theme === "light" ? setTheme("dark") : setTheme("light");
	};

	const {
		Component,
		slots,
		isSelected,
		getBaseProps,
		getInputProps,
		getWrapperProps,
	} = useSwitch({
		isSelected: theme === "light" || isSSR,
    "aria-label": `Switch to ${theme === "light" || isSSR ? "dark" : "light"} mode`,
		onChange,
	});

	return (
		<Component
			{...getBaseProps({
				className: clsx(
					"px-px transition-opacity hover:opacity-80 cursor-pointer",
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
							"w-auto h-auto",
							"bg-transparent",
							"rounded-lg",
							"flex items-center justify-center",
							"group-data-[selected=true]:bg-transparent",
							"!text-default-500",
							"pt-px",
							"px-0",
							"mx-0",
						],
						classNames?.wrapper
					),
				})}
			>
			 {!isSelected || isSSR ? <SunFilledIcon size={22} /> : <MoonFilledIcon size={22} />}
			</div>
		</Component>
	);
};
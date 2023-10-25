'use client'
import { FC } from 'react'
import { VisuallyHidden } from '@react-aria/visually-hidden'
import { SwitchProps, useSwitch } from '@nextui-org/switch'
import { useTheme } from 'next-themes'
import { useIsSSR } from '@react-aria/ssr'
import clsx from 'clsx'

import { SunFilledIcon, MoonFilledIcon } from '@/src/components/icons'

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
        // If the current theme is 'light', set it to 'dark', otherwise set it to 'light'
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    // Get the Switch component and its props
    const {
        Component,
        slots,
        isSelected,
        getBaseProps,
        getInputProps,
        getWrapperProps,
    } = useSwitch({
        // Set isSelected to true if the current theme is 'light' or the app is running on the server
        isSelected: theme === 'light' || isSSR,
        // Set the aria-label for accessibility
        'aria-label': `Switch to ${
            theme === 'light' || isSSR ? 'dark' : 'light'
        } mode`,
        // Set the onChange function
        onChange,
    })

    // Render the ThemeSwitch component
    return (
        // Use the Component from useSwitch
        <Component
            // Get the base props and add custom classes    
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
                // Get the wrapper props and add custom classes
                {...getWrapperProps()}
                className={slots.wrapper({
                    class: clsx(
                        [
                            'w-auto h-auto',
                            'bg-transparent',
                            'rounded-lg',
                            'flex items-center justify-center',
                            'group-data-[selected=true]:bg-transparent',
                            '!text-default-500',
                            'pt-px',
                            'px-0',
                            'mx-0',
                        ],
                        classNames?.wrapper
                    ),
                })}
            >
                {/* Render the SunFilledIcon or MoonFilledIcon based on the current theme */}
                {!isSelected || isSSR ? (
                    <SunFilledIcon size={22} />
                ) : (
                    <MoonFilledIcon size={22} />
                )}
            </div>
        </Component>
    )
}

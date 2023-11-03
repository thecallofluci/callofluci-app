'use client'

import { FC } from 'react'
import { VisuallyHidden } from '@react-aria/visually-hidden'
import { SwitchProps, useSwitch } from '@nextui-org/switch'
import { useTheme } from 'next-themes'
import { useIsSSR } from '@react-aria/ssr'
import clsx from 'clsx'

import { SunIcon, MoonIcon } from '@/src/app/_components/_ui/icons'

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
        theme === 'luci-light' ? setTheme('luci-dark') : setTheme('luci-light')
    }

    const {
        Component,
        slots,
        isSelected,
        getBaseProps,
        getInputProps,
        getWrapperProps,
    } = useSwitch({
        isSelected: theme === 'luci-light' || isSSR,
        'aria-label': `Switch to ${
            theme === 'luci-light' || isSSR ? 'luci-dark' : 'luci-light'
        } mode`,
        onChange,
    })

    return (
        <div className="flex flex-col gap-2">
            <Component {...getBaseProps()}>
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
                                isSelected
                                    ? '!text-primary-500'
                                    : 'text-default-700',
                                'pt-px',
                                'px-0',
                                'mx-0',
                            ],
                            classNames?.wrapper
                        ),
                    })}
                >
                    {isSelected ? (
                        <SunIcon className="text-default-500 size={22}" />
                    ) : (
                        <MoonIcon className="text-default-500 size={22}" />
                    )}
                </div>
            </Component>
        </div>
    )
}


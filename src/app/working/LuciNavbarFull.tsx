// LuciNavbar.tsx UI component

import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from '@nextui-org/navbar'
import { DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from '@nextui-org/dropdown'
import { Button } from '@nextui-org/button'

import { Link } from '@nextui-org/link'
import { link as linkStyles } from '@nextui-org/theme'
import NextLink from 'next/link'

import { LuciButton, LuciButtonWide } from '../components/ui/LuciButton'

import { siteConfig } from '@/src/config/site'

import clsx from 'clsx'

import { ThemeSwitch } from '@/src/app/components/ui/LuciThemeSwitch'
import { TwitterIcon, GithubIcon } from '@/src/app/components/ui/LuciIcons'

import { Logo } from '@/src/app/components/ui/LuciIcons'

export const LuciNavbar = () => {
	return (
		<NextUINavbar isBordered maxWidth="xl" position="sticky">
			{/* This section is for the brand logo and navigation items */}
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Logo />
						<p className="font-bold">LUCI</p>
					</NextLink>
				</NavbarBrand>
				<ul className="hidden lg:flex gap-4 justify-start ml-2 font-sans font-bold">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(linkStyles({ color: 'foreground' }), 'font-bold')}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
					
					<NavbarItem key="/">
						<NextLink
							className={clsx(linkStyles({ color: 'foreground' }), 'font-bold')}
							color="foreground"
							href="/"
						>
							Home
						</NextLink>
					</NavbarItem>
				</ul>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
				<NextLink href="/">
					<LuciButton>BUTTON</LuciButton>
				</NextLink>
				<NavbarItem className="hidden sm:flex gap-2">
					<ThemeSwitch />
				</NavbarItem>
			</NavbarContent>

			{/* This section is for mobile view with theme switch, and menu toggle */}
			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>
		</NextUINavbar>
	)
}

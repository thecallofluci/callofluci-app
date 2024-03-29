// LuciNavbarNew.tsx UI component
'use client'

import React from 'react'
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

import { LuciButton, LuciButtonWide } from '../_ui/LuciButton'

import { siteConfig } from '@/src/config/site'

import clsx from 'clsx'

import { ThemeSwitch } from '@/src/app/_components/_next-ui/theme-switch'
import { TwitterIcon, GithubIcon } from '@/src/app/_components/_layout/LuciIcons'

import { ChevronDown } from '@/src/app/_components/_layout/NavbarIcons'

import { LuciMaskIcon, LuciMazeIcon } from '@/src/app/_components/_layout/LuciIcons'

export const LuciNavbarNew = () => {
	return (
		<NextUINavbar isBordered maxWidth="lg" position="sticky">
			{/* NavbarContent for logo and dropdown menu, hidden on small screens */}
			<NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="start">
				{/* NavbarBrand for logo, always visible */}
				<NavbarBrand as="li" className="gap-2 max-w-fit">
					<NextLink className="flex justify-start items-center" href="/">
					<LuciMaskIcon size={30} />
					</NextLink>
				</NavbarBrand>

				{/* Dropdown menu for navigation items */}
				{/* Note Dropdown menu for navigation items in mobile is broken */}
				<ul>
					<Dropdown>
						<NavbarItem>
							<DropdownTrigger>
								<Button
									disableRipple
									className="bg-transparent data-[hover=true]:bg-transparent"
									endContent={<ChevronDown />}
									radius="sm"
									variant="ghost"
									color="primary"
									style={{
										fontWeight: 'bold',
									}}
								>
									MENU
								</Button>
							</DropdownTrigger>
						</NavbarItem>
						<DropdownMenu
							disableAnimation
							aria-label="Menu"
							className="w-[340px]"
							itemClasses={{
								base: 'gap-4',
							}}
						>
							{/* Map through navItems from siteConfig to create DropdownItems */}
							{siteConfig.navItems.map((item) => (
								<DropdownItem
									key={item.href}
									href={item.href}
									description={item.description} // Use the description from your siteConfig
									// startContent={item.icon} // Use the icon from your siteConfig
								>
									{item.label}
								</DropdownItem>
							))}
						</DropdownMenu>
					</Dropdown>
				</ul>
			</NavbarContent>

			{/* NavbarContent for button and theme switch, hidden on small screens */}
			<NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
				<NextLink href="/">
					<LuciButton>BUTTON</LuciButton>
				</NextLink>
				<NavbarItem className="hidden sm:flex gap-2">
					<ThemeSwitch />
				</NavbarItem>
			</NavbarContent>

			{/* NavbarContent for theme switch and menu toggle, visible only on small screens */}
			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>
		</NextUINavbar>
	)
}

// created from navbar.tsx to remove certain template elements

import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem,
} from '@nextui-org/navbar'
import { Button } from '@nextui-org/button'
import { Kbd } from '@nextui-org/kbd'
import { Link } from '@nextui-org/link'
import { Input } from '@nextui-org/input'
import { fontSans } from '@/src/app/_styles/fonts/fonts'
import { fontMono } from '@/src/app/_styles/fonts/fonts'

import { link as linkStyles } from '@nextui-org/theme'

import { siteConfig } from '@/src/config/site'
import NextLink from 'next/link'
import clsx from 'clsx'

import { ThemeSwitch } from '@/src/app/_components/_NextUI/theme-switch'
import {
    TwitterIcon,
    GithubIcon,
    HeartFilledIcon,
} from '@/src/app/_components/_ui/icons'

import { Logo } from '@/src/app/_components/_ui/icons'

// NavbarContent1: {This section is for the brand logo and navigation items}
// NavbarContent2: {This section is for social media links and theme switch}
// NavbarContent3: {This section is for mobile view with Github link, theme switch, and menu toggle}

export const SlimNavbar = () => {
    return (
        <NextUINavbar isBordered maxWidth="xl" position="sticky">
            <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
                <NavbarBrand as="li" className="gap-3 max-w-fit">
                    <NextLink
                        className="flex justify-start items-center gap-1"
                        href="/"
                    >
                       <GithubIcon />   
                        <p className="font-bold ">LUCI</p>
                    </NextLink>
                </NavbarBrand>
                <ul className="hidden lg:flex gap-4 justify-start ml-2 font-sans font-bold">
                    {siteConfig.navItems.map((item) => (
                        <NavbarItem key={item.href}>
                            <NextLink
                                className={clsx(
                                    linkStyles({ color: 'foreground' })
                                )}
                                color="foreground"
                                href={item.href}
                            >
                                {item.label}
                            </NextLink>
                        </NavbarItem>
                    ))}
                </ul>
            </NavbarContent>

            <NavbarContent
                className="hidden sm:flex basis-1/5 sm:basis-full"
                justify="end"
            >
                <NavbarItem className="hidden sm:flex gap-2">
                    <Link
                        isExternal
                        href={siteConfig.links.twitter}
                        aria-label="Twitter"
                        // color="primary"
                    
                    >
                        <TwitterIcon  />
                    </Link>
                    <Link
                        isExternal
                        href={siteConfig.links.github}
                        aria-label="Github"
                        // color="primary"
          
                    >
                        <GithubIcon  />
                    </Link>
                    <ThemeSwitch />
                </NavbarItem>
                <NavbarItem className="hidden md:flex">
                    <Button
                        isExternal
                        as={Link}
                        href={siteConfig.links.sponsor}
                        // startContent={<GithubIcon />}
                        color="primary"
                        variant="solid"
                        radius="sm"
                    >
                        Wallet
                    </Button>

                </NavbarItem>
            </NavbarContent>

            <NavbarContent className="sm:hidden basis-1 pl-4" justify="end" >
                <Link
                    isExternal
                    href={siteConfig.links.github}
                    aria-label="Github"
                >
                    <GithubIcon />
                </Link>
                <ThemeSwitch />
                <NavbarMenuToggle />
            </NavbarContent>
        </NextUINavbar>
    )
}

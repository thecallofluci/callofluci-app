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
import { fontSans } from '@/src/app/_styles/fonts'
import { fontMono } from '@/src/app/_styles/fonts'

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

export const SlimNavbar = () => {

    return (
        <NextUINavbar isBordered maxWidth="xl" position="sticky">
            <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
                <NavbarBrand as="li" className="gap-3 max-w-fit">
                    <NextLink
                        className="flex justify-start items-center gap-1"
                        href="/"
                    >
                        <Logo />
                        <p className="font-bold text-inherit">CALLOFLUCI</p>
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
                    >
                        <TwitterIcon className="text-default-500" />
                    </Link>
                    <Link
                        isExternal
                        href={siteConfig.links.github}
                        aria-label="Github"
                    >
                        <GithubIcon className="text-default-500" />
                    </Link>
                    <ThemeSwitch />
                </NavbarItem>
                <NavbarItem className="hidden md:flex">
                    <Button
                        isExternal
                        as={Link}
                        className="text-sm font-normal text-default-600 bg-default-100"
                        href={siteConfig.links.sponsor}
                        startContent={
                            <GithubIcon className="text-danger" />
                        }
                        variant="flat"
                    >
                        Wallet
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
                <Link
                    isExternal
                    href={siteConfig.links.github}
                    aria-label="Github"
                >
                    <GithubIcon className="text-default-500" />
                </Link>
                <ThemeSwitch />
                <NavbarMenuToggle />
            </NavbarContent>

        </NextUINavbar>
    )
}

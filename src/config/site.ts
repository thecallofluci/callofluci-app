export type SiteConfig = typeof siteConfig

export const siteConfig = {
    name: 'Call Of Luci',
    description: 'Add your Observation through Call Of Luci.',
    navItems: [
        {
            label: 'Home',
            href: '/',
        },
        {
            label: 'Docs',
            href: '/docs',
        },
        {
            label: 'Gallery',
            href: '/gallery',
        },
        {
            label: 'Observation',
            href: '/observation',
        },
        {
            label: 'Blog',
            href: '/blog',
        },
        {
            label: 'About',
            href: '/about',
        },
                {
            label: 'Examples',
            href: '/examples',
        },
    ],
    navMenuItems: [
        {
            label: 'Profile',
            href: '/profile',
        },
        {
            label: 'Dashboard',
            href: '/dashboard',
        },
        {
            label: 'Projects',
            href: '/projects',
        },
        {
            label: 'Team',
            href: '/team',
        },
        {
            label: 'Calendar',
            href: '/calendar',
        },
        {
            label: 'Settings',
            href: '/settings',
        },
        {
            label: 'Help & Feedback',
            href: '/help-feedback',
        },
        {
            label: 'Logout',
            href: '/logout',
        },
    ],
    links: {
        github: 'https://github.com/thecallofluci/callofluci-app',
        twitter: 'https://twitter.com/callofluci',
        docs: 'https://nextui.org',
        sponsor: 'https://patreon.com/jrgarciadev',
    },
}

// constants.ts these are NOT accurate
import { FaGithub, FaTwitter } from 'react-icons/fa'

export const appConstants = {
    // Site constants
    SITE_NAME: 'Call Of Luci',
    SITE_URL: process.env.SITE_URL || 'https://callofluci.art/',
    DEFAULT_IMAGE_PATH: '/assets/siteicon.svg',
    FAVICON_IMAGE_PATH: '/assets/favicon.ico',
    TWITTER_HANDLE: '@callofluci',

    // Navigation constants
    NAV_HEIGHT: 72,
    DOCS_URL: 'https://docs.soliditylang.org',
    ABOUT_PATH: '/about',
    NEW_PAGE_URL: '/new-page',
    CONTRIBUTE_PATH: `${DOCS_URL}/en/latest/contributing.html`,
    FORUM_URL: 'https://forum.soliditylang.org/',

    // Navigation links constants
    NAV_LINKS: [
        { name: 'Home', href: '/' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Observation', href: '/observation' },
        { name: 'About', href: '/about' },
        { name: 'Examples', href: '/examples' },
        { name: 'Mockup', href: '/mockup' },
        // ...other nav items...
    ],

    // Social links
    GITHUB_URL: 'https://github.com/thecallofluci/callofluci-website',
    TWITTER_URL: `https://twitter.com/${TWITTER_HANDLE.split('@')[1]}`,
    SOCIAL_LINKS: [
        { name: 'GitHub', href: GITHUB_URL, Icon: FaGithub },
        { name: 'Twitter', href: TWITTER_URL, Icon: FaTwitter },
    ],

    // Data fetching constants
    LATEST_CALLOFLUCI_RELEASE_URL:
        'https://api.github.com/repos/thecallofluci/callofluci-website/releases/latest',
    CALLOFLUCI_REPO_STARGAZERS_URL:
        'https://api.github.com/repos/thecallofluci/callofluci-website',
}

export type AppConstants = typeof appConstants

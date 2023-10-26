// interfaces.ts these are NOT accurate or being used
import type { IconType } from 'react-icons' // Importing IconType from react-icons for defining the type of icons

// Interface for navigation links
export interface NavLink {
    name: string // Name of the link
    href: string // URL of the link
}

// Interface for social media links
export interface SocialLink {
    name: string // Name of the social media platform
    href: string // URL of the social media platform
    Icon: IconType // Icon for the social media platform
}

// Interface for links
export interface Link {
    label: string // Label of the link
    href?: string // URL of the link (optional)
}

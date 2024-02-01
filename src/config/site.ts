export type SiteConfig = typeof siteConfig

export const siteConfig = {
	name: 'Call Of Luci',
	description: 'Add your Observation through Call Of Luci.',
	navItems: [
		{
			label: 'About',
			href: '/about',
            description: 'What is Call Of Luci?', 
		},
		{
			label: 'Create',
			href: '/create',
            description: 'Create an Observation', 
		},
		{
			label: 'Observations',
			href: '/observations',
            description: 'Access an Observation', 
		},
		{
			label: 'Gallery',
			href: '/gallery',
            description: 'View all Observations', 
		},
		{
			label: 'Examples',
			href: '/examples',
            description: 'This is a temp page',
        },
				{
			label: 'Mockup',
			href: '/mockup',
            description: 'This is a temp page',
        },
	],

    // TODO: These secondary navMenuItems are not used yet, and currently reflect template content.
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
		spratt: 'https://www.samspratt.com',
		nifty: 'https://www.niftygateway.com/collections/sam-spratt-the-monument-game',
	},
}

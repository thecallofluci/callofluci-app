import { Link } from '@nextui-org/link'
import { Snippet } from '@nextui-org/snippet'
import { Code } from '@nextui-org/code'
import { TwitterIcon, GithubIcon } from '@/src/app/_components/_layout/LuciIcons' // Import the icons
import { siteConfig } from '@/src/config/site' // Import the siteConfig
import packageJson from '../../../../package.json'

export default async function Footer() {
	return (
		<footer className="w-full flex items-center py-8 px-4 md:px-8 lg:px-16">
			<div className="mx-auto max-w-7xl flex justify-between">
				<div className="hidden sm:flex justify-end gap-2 mt-4">
					{' '}
					{/* Add a div to hold the icons */}
					<Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
						<TwitterIcon />
					</Link>
					<Link isExternal href={siteConfig.links.github} aria-label="Github">
						<GithubIcon />
					</Link>
				</div>
			</div>
		</footer>
	)
}

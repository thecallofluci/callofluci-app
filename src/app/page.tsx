import NextLink from 'next/link'
import { Link } from '@nextui-org/link'
import { Snippet } from '@nextui-org/snippet'
import { Code } from '@nextui-org/code'
import { button as buttonStyles } from '@nextui-org/theme'
import { siteConfig } from '@/src/config/site'
import { title, subtitle } from '@/src/app/_components/_next-ui/primitives'
import { GithubIcon } from '@/src/app/_components/_layout/LuciIcons'
import { fontMono } from '@/src/app/_styles/fonts/fonts'
import packageJson from '../../package.json'

import wormfood from '@/public/wormfood.jpg'
import LuciImage from '@/src/app/_components/_ui/LuciImage'
import { lucititle, lucisubtitle, lucisubheading } from '@/src/app/_components/_next-ui/primitives'

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={`${title()}`}>I am Call Of Luci&nbsp;</h1>
				<br />
				<h2 className={subtitle({ class: 'mt-4' })}>
					Welcome, Player. Create a new Observation.
				</h2>
			</div>

			<div className="flex gap-3 text-primary">
				<Link
					isExternal
					as={NextLink}
					href={siteConfig.links.docs}
					className={buttonStyles({
						color: 'primary',
						variant: 'ghost',
						radius: 'sm',
					})}
				>
					Documentation
				</Link>
				<Link
					isExternal
					as={NextLink}
					className={buttonStyles({
						color: 'primary',
						variant: 'ghost',
						radius: 'sm',
					})}
					href={siteConfig.links.github}
				>
					<GithubIcon size={20} />
					GitHub
				</Link>
			</div>

			<div className="mt-8">
				<Snippet hideSymbol hideCopyButton variant="bordered" radius="sm">
					<span>
						Get started by connecting a <Code radius="sm">wallet</Code>
					</span>
				</Snippet>
			</div>

   

			<div className="mt-8">
				<Snippet hideSymbol hideCopyButton variant="bordered" radius="sm">
					<span>
						Luci{' '}
						<Code radius="sm">
							v{packageJson.version}+{process.env.REACT_APP_GIT_HASH}
						</Code>
					</span>
				</Snippet>
			</div>
		</section>
	)
}

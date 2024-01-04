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
import { lucititle, lucisubtitle, lucisubheading, luciparagraph } from '@/src/app/_components/_next-ui/primitives'

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={`${lucititle()}`}>I am Call Of Luci&nbsp;</h1>
				<br />
				<h2 className={lucisubtitle({ class: 'mt-4' })}>
                    Welcome, Player. Enter a new Observation.
                </h2>
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

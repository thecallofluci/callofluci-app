import NextLink from 'next/link'
import { Link } from '@nextui-org/link'
import { Snippet } from '@nextui-org/snippet'
import { Code } from '@nextui-org/code'
import { Button } from '@nextui-org/button'

import { button as buttonStyles } from '@nextui-org/theme'
import { siteConfig } from '@/src/config/site'
import { title, subtitle } from '@/src/app/styles/primitives'
import { GithubIcon } from '@/src/app/components/ui/LuciIcons'
import { fontMono } from '@/src/app/styles/fonts/fonts'
import packageJson from '../../package.json'

import wormfood from '@/public/wormfood.jpg'
import LuciImage from '@/src/app/components/ui/LuciImage'
import { LuciButton, LuciButtonWide } from '@/src/app/components/ui/LuciButton'
import { LuciSpinner } from '@/src/app/components/ui/LuciSpinner'
import {
	lucititle,
	lucisubtitle,
	lucisubheading,
	luciparagraph,
	lucinote,
	lucitypewriter,
} from '@/src/app/styles/primitives'

import { LuciMaskIcon, LuciMazeIcon } from '@/src/app/components/ui/LuciIcons'

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={`${lucititle()}`}>Welcome, Player.&nbsp;</h1>
			</div>

			<div>
				<h2 className={`${lucitypewriter({ class: 'mt-4 typewriter' })} `}>
					I am your guide, Call Of Luci.
				</h2>
			</div>
			<div className="flex justify-center gap-4 mt-4">
				<LuciMaskIcon size={100} />
			</div>
			<div className="flex justify-center gap-4 mt-4">
				<LuciSpinner label="" />
			</div>
			<div className="flex justify-center gap-4 mt-4">
				<LuciButton href="observation" as={Link}>
					ENTER
				</LuciButton>
			</div>

			
		
			{/*
			<div className="inline-block max-w-lg text-center justify-center">
				<h2 className={`${lucisubtitle({ class: 'mt-4' })} `}>Welcome, Player.</h2>
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

		
    		Useful code that shows different usecases of link-enabled Buttons

			<div className="flex justify-center gap-4 mt-8">
				<LuciButton color="secondary" href="about" as={Link}>
					ABOUT
				</LuciButton>
				<LuciButton variant="light" href="gallery" as={Link}>
					GALLERY
				</LuciButton>
			</div>

			<div className="flex justify-center gap-4 mt-8">
				<LuciButton href="#" as={Link}>
					LINK
				</LuciButton>

				<LuciButton variant="light" href="about" as={Link}>
					LINK
				</LuciButton>

				<LuciButton href="gallery" as={Link}>
					LINK
				</LuciButton>
			</div>

*/}
		</section>
	)
}

import {
	lucititle,
	lucisubtitle,
	luciparagraph,
	lucinote,
} from '@/src/app/_components/_next-ui/primitives'
import { LuciNavigation } from '@/src/app/_components/_ui/LuciDropdown'


export default function AboutPage() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div>
				<h1 className={lucititle({ color: 'primary' })}>About</h1>
			</div>
			<div>
				<p className={lucinote({ color: 'primary', size: 'sm' })}>
					This page describes the project.
				</p>
			</div>
			<div>
				{' '}
				<h2 className={lucisubtitle({ color: 'primary' })}>Call Of Luci</h2>
				<p className={luciparagraph({ color: 'primary' })}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc at
					aliquet pharetra, mauris lorem lacinia magna, quis ultricies sem nunc id lorem.
					Donec id condimentum magna.
				</p>
				<p className={luciparagraph({ color: 'primary' })}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc at
					aliquet pharetra, mauris lorem lacinia magna, quis ultricies sem nunc id lorem.
					Donec id condimentum magna.
				</p>
				<p className={luciparagraph({ color: 'primary' })}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc at
					aliquet pharetra, mauris lorem lacinia magna, quis ultricies sem nunc id lorem.
					Donec id condimentum magna.
				</p>
			</div>
		</section>
	)
}

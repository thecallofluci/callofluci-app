import {
	lucititle,
	lucisubtitle,
	luciparagraph,
} from '@/src/app/_components/_NextUI/primitives'

export default function AboutPage() {
	return (
		<div>
			<h1 className={lucititle({ color: 'primary' })}>About</h1>
			<h2 className={lucisubtitle({ color: 'primary' })}>
				Call Of Luci
			</h2>
			<p className={luciparagraph({ color: 'primary' })}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
				euismod, nunc at aliquet pharetra, mauris lorem lacinia magna,
				quis ultricies sem nunc id lorem. Donec id condimentum magna.
			</p>
		</div>
	)
}

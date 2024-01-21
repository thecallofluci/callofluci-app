import {
	lucititle,
	lucisubtitle,
	luciparagraph,
	lucinote,
} from '@/src/app/_styles/primitives'
import GalleryTest from '@/src/app/_working/GalleryTest' // adjust the path according to your project structure

export default function GalleryPage() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div>
				<h1 className={lucititle({ color: 'primary' })}>GALLERY</h1>
			</div>
			<div>
				<p className={lucinote({ color: 'primary', size: 'sm' })}>
					This page is a mockup of the Gallery, which will display Observations created by
					users.
				</p>
			</div>
			<div>
				<GalleryTest />
			</div>
		</section>
	)
}

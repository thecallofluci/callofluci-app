import { title } from '@/src/app/_components/_next-ui/primitives'
import GalleryTest from '@/src/app/_components/_callofluci/GalleryTest' // adjust the path according to your project structure

export default function GalleryPage() {
	return (
		<div>
			<h1 className={title()}>Gallery</h1>
			<GalleryTest />
		</div>
	)
}

import { title } from '@/src/app/_components/_NextUI/primitives'
import { Textarea } from '@nextui-org/input'
import LuciTextArea from '@/src/app/_components/_ui/LuciTextArea'
import LuciCard from '@/src/app/_components/_ui/LuciCard'
import LuciCardGallery from '@/src/app/_components/_ui/LuciCardGallery'
import LuciImage from '@/src/app/_components/_ui/LuciImage'
import Image from 'next/image'

export default function AboutPage() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div>
				<h1 className={title()}>About</h1>
			</div>

			<div>
				<Textarea
					label="Description"
					labelPlacement="outside"
					placeholder="Enter your description (Default autosize)"
				/>
			</div>
			<div>
				<LuciTextArea
					variant="flat"
					className="col-span-12 md:col-span-6 mb-6 md:mb-0"
					label="Hello there"
					labelPlacement="outside"
					placeholder="Enter your Luci Description (Default autosize)"
				/>
			</div>
			<div>
				<LuciCard /> {/* Use LuciCard */}
			</div>
			<div>
				<LuciImage />
			</div>

		</section>
	)
}

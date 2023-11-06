import { title } from '@/src/app/_components/_NextUI/primitives'
import { Textarea } from '@nextui-org/input'

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
		</section>
	)
}

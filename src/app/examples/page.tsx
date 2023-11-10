import {
	lucititle,
	lucisubtitle,
} from '@/src/app/_components/_NextUI/primitives'
import { Textarea } from '@nextui-org/input'
import { Divider } from '@nextui-org/divider'
import LuciTextArea from '@/src/app/_components/_ui/LuciTextArea'
import LuciObservation from '@/src/app/_components/_ui/LuciObservation'
import {
	LuciButton,
	LuciButtonWide,
} from '@/src/app/_components/_ui/LuciButton'
import LuciCard from '@/src/app/_components/_ui/LuciCard'
import DefaultModal from '@/src/app/_components/_ui/CreateObservation'
import { LuciModal } from '@/src/app/_components/_ui/CreateObservation'
import LuciCardGallery from '@/src/app/_components/_ui/LuciCardGallery'
import LuciImage from '@/src/app/_components/_ui/LuciImage'
import Image from 'next/image'
import { siteConfig } from '@/src/config/site'
import { Button } from '@nextui-org/button'

export default function ExamplesPage() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 w-4/5 mx-auto">
			<div>
				<h1 className={lucititle({ color: 'primary' })}>Examples</h1>
			</div>

			<div className="flex flex-wrap justify-center gap-8">
			<div>
					<h2
						className={`${lucisubtitle({
							color: 'secondary',
						})} text-center`}
					>
						Default Button
					</h2>
					<Button href={siteConfig.links.sponsor} >
						BUTTON
					</Button>
				</div>

				<div>
					<h2
						className={`${lucisubtitle({
							color: 'secondary',
						})} text-center`}
					>
						Luci Button
					</h2>
					<LuciButton variant="bordered" href={siteConfig.links.sponsor} >
						BUTTON
					</LuciButton>
				</div>

				<div>
					<h2
						className={`${lucisubtitle({
							color: 'secondary',
						})} text-center`}
					>
						Luci Button
					</h2>
					<LuciButton href={siteConfig.links.sponsor} >
						BUTTON
					</LuciButton>
				</div>

				<div>
					<h2
						className={`${lucisubtitle({
							color: 'secondary',
						})} text-center`}
					>
						Luci Button Wide
					</h2>
					<LuciButtonWide href={siteConfig.links.sponsor}>
						WIDE BUTTON
					</LuciButtonWide>
				</div>

				<div style={{ width: '100%' }}></div>{' '}
				{/* This will force a line break */}

				<div>
					<h2
						className={`${lucisubtitle({
							color: 'secondary',
						})} text-center`}
					>
						Default Textarea
					</h2>
					<Textarea
						label="Description"
						labelPlacement="outside"
						placeholder="Enter your description (Default autosize)"
					/>
				</div>
				<div>
					<h2
						className={`${lucisubtitle({
							color: 'secondary',
						})} text-center`}
					>
						Luci Textarea
					</h2>
					<LuciTextArea
						variant="flat"
						className="col-span-12 md:col-span-6 mb-6 md:mb-0"
						label="Hello there"
						labelPlacement="outside"
						placeholder="Enter your Luci Description (Default autosize)"
					/>
				</div>
				<div>
					<h2
						className={`${lucisubtitle({
							color: 'secondary',
						})} text-center`}
					>
						Luci Textarea
					</h2>
					<LuciTextArea
						variant="flat"
						className="col-span-12 md:col-span-6 mb-6 md:mb-0"
						label="Hello there"
						labelPlacement="outside"
						placeholder="Enter your Luci Description (Default autosize)"
					/>
				</div>

				<div style={{ width: '100%' }}></div>{' '}
				{/* This will force a line break */}

				<div>
					<h2
						className={`${lucisubtitle({
							color: 'secondary',
						})} text-center`}
					>
						NextUI Card
					</h2>
					<LuciCard /> {/* Use LuciCard */}
				</div>
				<div>
					<h2
						className={`${lucisubtitle({
							color: 'secondary',
						})} text-center`}
					>
						Luci Observation Card
					</h2>
					<LuciObservation /> {/* Use LuciObservation */}
				</div>
				
				<div>
					<h2
						className={`${lucisubtitle({
							color: 'secondary',
						})} text-center`}
					>
						Default Modal Form
					</h2>
					<DefaultModal /> {/* Use LuciObservation */}
				</div>

				<div>
					<h2
						className={`${lucisubtitle({
							color: 'secondary',
						})} text-center`}
					>
						Luci Modal Form
					</h2>
					<LuciModal /> {/* Use LuciObservation */}
				</div>

				<div style={{ width: '100%' }}></div>{' '}
				{/* This will force a line break */}
				
				<div>
					<h2
						className={`${lucisubtitle({
							color: 'secondary',
						})} text-center`}
					>
						Luci Image
					</h2>
					<LuciImage />
				</div>
				<div>
					<h2
						className={`${lucisubtitle({
							color: 'secondary',
						})} text-center`}
					>
						Luci Image
					</h2>
					<LuciImage />
				</div>
			</div>
		</section>
	)
}

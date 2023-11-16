import { lucititle, lucisubtitle, lucisubheading } from '@/src/app/_components/_NextUI/primitives'

import { Button } from '@nextui-org/button'
import { Textarea } from '@nextui-org/input'
import { Divider } from '@nextui-org/divider'
import Image from 'next/image'

import ObservationTextInput from '@/src/app/_components/_ui/LuciTextArea'
import DefaultTextarea from '@/src/app/_components/_ui/LuciTextArea'
import LuciTextArea2 from '@/src/app/_components/_ui/LuciTextArea'
import LuciObservation from '@/src/app/_components/_ui/LuciObservation'
import ObservationMockup from '@/src/app/_components/_callofluci/ObservationMockup'

import { LuciButton, LuciButtonWide } from '@/src/app/_components/_ui/LuciButton'
import DefaultCard from '@/src/app/_components/_ui/LuciCard'
import DefaultModal from '@/src/app/_components/_ui/LuciModal'
import { LuciModal, LuciModalTest } from '@/src/app/_components/_ui/LuciModal'
import LuciCardGallery from '@/src/app/_components/_ui/LuciCardGallery'
import LuciImage from '@/src/app/_components/_ui/LuciImage'

import { siteConfig } from '@/src/config/site'

export default function ExamplesPage() {
	return (
		<>
			<section className="flex flex-col items-center justify-center gap-3 py-8 md:py-10 w-9/10 mx-auto">
				<div>
					<h1 className={lucititle({ color: 'primary' })}>Examples</h1>
				</div>

				<div style={{ height: '3rem' }}></div>{' '}
				{/* This will force a space equivalent to 3 line breaks */}
				{/* Add a divider */}
				<Divider />

					{/* BUTTONS Subsection */}
					<div className="flex flex-col justify-center gap-1">
						<div>
							<h2
								className={`${lucisubtitle({
									color: 'secondary',
								})} text-center`}
							>
								BUTTONS
							</h2>
						</div>
						<div className="flex flex-wrap justify-center gap-8">
														<div>
								<h2
									className={`${lucisubheading({
										color: 'secondary',
									})} text-center pb-1`}
								>
									NextUI Default Button
								</h2>
								<Button href={siteConfig.links.sponsor}>Button</Button>
							</div>
							<div>
								<h2
									className={`${lucisubheading({
										color: 'secondary',
									})} text-center pb-1`}
								>
									Luci Button
								</h2>
								<LuciButton href={siteConfig.links.sponsor}>BUTTON</LuciButton>
							</div>
							<div>
								<h2
									className={`${lucisubheading({
										color: 'secondary',
									})} text-center pb-1`}
								>
									Luci Button Wide
								</h2>
								<LuciButtonWide href={siteConfig.links.sponsor}>
									WIDE BUTTON
								</LuciButtonWide>
							</div>
						</div>
					</div>

				<div style={{ height: '3rem' }}></div>{' '}
				{/* This will force a space equivalent to 3 line breaks */}
				{/* Add a divider */}
				<Divider />

					{/* MODALS Subsection */}
					<div className="flex flex-col justify-center gap-1">
						<div>
							<h2
								className={`${lucisubtitle({
									color: 'secondary',
								})} text-center`}
							>
								MODALS
							</h2>
						</div>
						<div className="flex flex-wrap justify-center gap-8">
							<div>
								<h2
									className={`${lucisubheading({
										color: 'secondary',
									})} text-center pb-1`}
								>
									NextUI Default Modal
								</h2>
								<DefaultModal />
							</div>
							<div>
								<h2
									className={`${lucisubheading({
										color: 'secondary',
									})} text-center pb-1`}
								>
									Luci Modal Form
								</h2>
								<LuciModal />
							</div>
							<div>
								<h2
									className={`${lucisubheading({
										color: 'secondary',
									})} text-center pb-1`}
								>
									Luci Modal Observation Text
								</h2>
								<LuciModalTest />
							</div>
						</div>
					</div>

				<div style={{ height: '3rem' }}></div>{' '}
				{/* This will force a space equivalent to 3 line breaks */}
				{/* Add a divider */}
				<Divider />

					{/* CARDS Subsection */}
					<div className="flex flex-col justify-center gap-1">
						<div>
							<h2
								className={`${lucisubtitle({
									color: 'secondary',
								})} text-center`}
							>
								CARDS
							</h2>
						</div>

						<div className="flex flex-wrap justify-center gap-8">
							<div>
								<h2
									className={`${lucisubheading({
										color: 'secondary',
									})} text-center pb-1`}
								>
									NextUI Default Card
								</h2>
								<DefaultCard /> {/* Use LuciCard */}
							</div>
							<div>
								<h2
									className={`${lucisubheading({
										color: 'secondary',
									})} text-center pb-1`}
								>
									Observation Mockup
								</h2>
								<ObservationMockup /> {/* Use LuciObservation */}
							</div>
						</div>

					{/* This will force a space equivalent to 3 line breaks */}
					<div style={{ height: '3rem' }}></div>
					{/* Add a divider */}
					<Divider />

					{/* IMAGES Subsection */}
					<div className="flex flex-col justify-center gap-1">
						<div>
							<h2
								className={`${lucisubtitle({
									color: 'secondary',
								})} text-center`}
							>
								IMAGES
							</h2>
						</div>
						<div className="flex flex-wrap justify-center gap-8">
							<div>
								<h2
									className={`${lucisubheading({
										color: 'secondary',
									})} text-center pb-1`}
								>
									Luci Image
								</h2>
								<LuciImage />
							</div>
							<div>
								<h2
									className={`${lucisubheading({
										color: 'secondary',
									})} text-center pb-1`}
								>
									Luci Image
								</h2>
								<LuciImage />
							</div>
						</div>
					</div>

					{/* This will force a space equivalent to 3 line breaks */}
					<div style={{ height: '3rem' }}></div>
					{/* Add a divider */}
					<Divider />

					{/* INPUTS Subsection */}
					<div className="flex flex-col justify-center gap-1">
						<div>
							<h2
								className={`${lucisubtitle({
									color: 'secondary',
								})} text-center`}
							>
								INPUTS
							</h2>
						</div>
						<div className="flex flex-wrap justify-center gap-8">
												<div>
								<h2
									className={`${lucisubheading({
										color: 'secondary',
									})} text-center pb-1`}
								>
									NextUI Default Textarea
								</h2>
								<Textarea />
							</div>
							<div>
								<h2
									className={`${lucisubheading({
										color: 'secondary',
									})} text-center pb-1`}
								>
									LuciTextArea.tsx
								</h2>
								<ObservationTextInput />
							</div>
							{/* Add more inputs here as needed */}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

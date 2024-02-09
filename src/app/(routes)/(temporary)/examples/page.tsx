import { lucititle, lucisubtitle, lucisubheading, lucinote } from '@/src/app/styles/primitives'

import { Button } from '@nextui-org/button'
import { Textarea } from '@nextui-org/input'
import { Divider } from '@nextui-org/divider'
import { Card, CardHeader, CardBody, CardFooter, CardProps } from '@nextui-org/card'
import Image from 'next/image'

import wormfood from '@/public/wormfood.jpg'
import TheMuck from '@/public/TheMuck.jpg'

import { LuciObservation } from '@/src/app/working/LuciObservationArchived'
import ObservationMockup from '@/src/app/working/ObservationMockup'
import ObservationMockupFields from '@/src/app/working/ObservationMockupFields'
import ObservationForm from '@/src/app/components/forms/ObservationForm'
import App from '@/src/app/components/forms/ObservationForm'

import { LuciButton, LuciButtonWide } from '@/src/app/components/ui/LuciButton'
import LuciCard from '@/src/app/components/ui/LuciCard'
import { LuciSpinner } from '@/src/app/components/ui/LuciSpinner'
import NextUICard from '@/src/app/working/NextUICard'
import DefaultModal from '@/src/app/components/ui/LuciModal'
import {
	LuciModal,
	LuciModalFormFields,
	LuciModalObservationForm,
} from '@/src/app/components/ui/LuciModal'
import LuciImage from '@/src/app/components/ui/LuciImage'
import { LuciTextarea } from '@/src/app/components/ui/LuciTextArea'
import { LuciMaskIcon } from '@/src/app/components/ui/LuciIcons'

import { siteConfig } from '@/src/config/site'

export default function ExamplesPage() {
	return (
		<>
			<section className="flex flex-col items-center justify-center gap-3 py-8 md:py-10 w-9/10 mx-auto">
				<div>
					<h1 className={lucititle({ color: 'primary' })}>Examples</h1>
				</div>
				<div>
					<p className={lucinote({ color: 'primary', size: 'sm' })}>
						This page displays custom components used throughout the app.
					</p>
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
						<div>
							<h2
								className={`${lucisubheading({
									color: 'secondary',
								})} text-center pb-1`}
							>
								Test 1
							</h2>
							<LuciButton
								variant="solid"
								color="primary"
								href={siteConfig.links.sponsor}
							>
								BUTTON
							</LuciButton>
						</div>
						<div>
							<h2
								className={`${lucisubheading({
									color: 'secondary',
								})} text-center pb-1`}
							>
								Test 2
							</h2>
							<LuciButton
								variant="faded"
								color="primary"
								href={siteConfig.links.sponsor}
							>
								BUTTON
							</LuciButton>
						</div>
						<div>
							<h2
								className={`${lucisubheading({
									color: 'secondary',
								})} text-center pb-1`}
							>
								Test 3
							</h2>
							<LuciButton
								variant="bordered"
								color="primary"
								href={siteConfig.links.sponsor}
							>
								BUTTON
							</LuciButton>
						</div>
						<div className="flex flex-wrap gap-4 items-center">
							<h2
								className={`${lucisubheading({
									color: 'secondary',
								})} text-center pb-1`}
							>
								NextUI Buttons
							</h2>
							<Button color="default">Default</Button>
							<Button color="primary">Primary</Button>
							<Button color="secondary">Secondary</Button>
							<Button color="success">Success</Button>
							<Button color="warning">Warning</Button>
							<Button color="danger">Danger</Button>
						</div>
						<div className="flex flex-wrap gap-4 items-center">
							<h2
								className={`${lucisubheading({
									color: 'secondary',
								})} text-center pb-1`}
							>
								Luci Buttons
							</h2>
							<LuciButton color="default">Default</LuciButton>
							<LuciButton color="primary">Primary</LuciButton>
							<LuciButton color="secondary">Secondary</LuciButton>
							<Button color="success">Success</Button>
							<LuciButton color="warning">Warning</LuciButton>
							<LuciButton color="danger">Danger</LuciButton>
						</div>
						<div className="flex flex-wrap gap-4 items-center">
							<h2
								className={`${lucisubheading({
									color: 'secondary',
								})} text-center pb-1`}
							>
								NextUI Buttons
							</h2>
							<Button color="primary" variant="solid">
								Solid
							</Button>
							<Button color="primary" variant="faded">
								Faded
							</Button>
							<Button color="primary" variant="bordered">
								Bordered
							</Button>
							<Button color="primary" variant="light">
								Light
							</Button>
							<Button color="primary" variant="flat">
								Flat
							</Button>
							<Button color="primary" variant="ghost">
								Ghost
							</Button>
							<Button color="primary" variant="shadow">
								Shadow
							</Button>
						</div>
						<div className="flex flex-wrap gap-4 items-center">
							<h2
								className={`${lucisubheading({
									color: 'secondary',
								})} text-center pb-1`}
							>
								Luci Buttons
							</h2>
							<LuciButton color="primary" variant="solid">
								Solid
							</LuciButton>
							<LuciButton color="primary" variant="faded">
								Faded
							</LuciButton>
							<LuciButton color="primary" variant="bordered">
								Bordered
							</LuciButton>
							<LuciButton color="primary" variant="light">
								Light
							</LuciButton>
							<LuciButton color="primary" variant="flat">
								Flat
							</LuciButton>
							<LuciButton color="primary" variant="ghost">
								Ghost
							</LuciButton>
							<LuciButton color="primary" variant="shadow">
								Shadow
							</LuciButton>
						</div>

						<div className="flex gap-4 items-center">
							<h2
								className={`${lucisubheading({
									color: 'secondary',
								})} text-center pb-1`}
							>
								NextUI Buttons
							</h2>
							<Button color="success" endContent={<LuciMaskIcon />}>
								Take a photo
							</Button>
							<Button
								color="danger"
								variant="bordered"
								startContent={<LuciMaskIcon />}
							>
								Delete user
							</Button>
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
								NextUI Default Modal Form
							</h2>
							<DefaultModal />
						</div>
						<div>
							<h2
								className={`${lucisubheading({
									color: 'secondary',
								})} text-center pb-1`}
							>
								Luci Modal
							</h2>
							<LuciModal />
						</div>
						<div>
							<h2
								className={`${lucisubheading({
									color: 'secondary',
								})} text-center pb-1`}
							>
								Luci Modal + Form
							</h2>
							<LuciModalFormFields />
						</div>

						<div>
							<h2
								className={`${lucisubheading({
									color: 'secondary',
								})} text-center pb-1`}
							>
								Luci Modal + Observation Form
							</h2>
							<LuciModalObservationForm />
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
							NAVIGATION
						</h2>
					</div>
					<div className="flex flex-wrap justify-center gap-8">
						<div>
							<h2
								className={`${lucisubheading({
									color: 'secondary',
								})} text-center pb-1`}
							>
								NextUI Default Modal Form
							</h2>
							<DefaultModal />
						</div>
						<div>
							<h2
								className={`${lucisubheading({
									color: 'secondary',
								})} text-center pb-1`}
							>
								Luci Modal
							</h2>
							<LuciModal />
						</div>
						<div>
							<h2
								className={`${lucisubheading({
									color: 'secondary',
								})} text-center pb-1`}
							>
								Luci Dropdown
							</h2>
							{/* Add LuciDropdown.tsx here */}
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
								Observation Mockup Fields
							</h2>
							<ObservationMockupFields />
						</div>

						<div>
							<h2
								className={`${lucisubheading({
									color: 'secondary',
								})} text-center pb-1`}
							>
								Observation Mockup
							</h2>
							<ObservationMockup />
						</div>

						<div>
							<h2
								className={`${lucisubheading({
									color: 'secondary',
								})} text-center pb-1`}
							>
								NextUI Default Card with Divider
							</h2>
							<NextUICard />
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
									LuciTextArea.tsx
								</h2>

								<LuciTextarea />
							</div>
							<div>
								<h2
									className={`${lucisubheading({
										color: 'secondary',
									})} text-center pb-1`}
								>
									MyForm.tsx
								</h2>

								<ObservationForm />
							</div>

							{/* Add more inputs here as needed */}
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
								<LuciImage
									src="https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1656776064476-ADETQUJY3NV2AOI39K3T/SamSpratt_LUCI_Chapter3_VI_TheMuck.jpg"
									alt="The Muck"
									width={400}
									height={400}
								/>
							</div>
							<div>
								<h2
									className={`${lucisubheading({
										color: 'secondary',
									})} text-center pb-1`}
								>
									Luci Image
								</h2>
								<LuciImage
									src="https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1656776064476-ADETQUJY3NV2AOI39K3T/SamSpratt_LUCI_Chapter3_VI_TheMuck.jpg"
									alt="The Muck"
									width={200}
									height={200}
								/>
							</div>

							<div>
								<h2
									className={`${lucisubheading({
										color: 'secondary',
									})} text-center pb-1`}
								>
									Luci Image - Automatic Sizing
								</h2>
								<LuciImage
									src={wormfood}
									alt="Wormfood"
									sizes="100vw"
									style={{
										width: '100%',
										height: 'auto',
									}}
								/>
							</div>

							<div>
								<h2
									className={`${lucisubheading({
										color: 'secondary',
									})} text-center pb-1`}
								>
									Luci Image - Automatic Sizing
								</h2>
								<LuciImage
									src={wormfood}
									alt="Wormfood"
									sizes="100vw"
									style={{
										width: 'auto',
										height: 'auto',
									}}
								/>
							</div>

							<div>
								<h2
									className={`${lucisubheading({
										color: 'secondary',
									})} text-center pb-1`}
								>
									Luci Image - Automatic Sizing
								</h2>
								<LuciImage
									src={TheMuck}
									alt="The Muck"
									sizes="100vw"
									style={{
										width: '20%',
										height: '20%',
									}}
								/>
							</div>

							<div>
								<h2
									className={`${lucisubheading({
										color: 'secondary',
									})} text-center pb-1`}
								>
									Luci Image - Automatic Sizing
								</h2>
								<LuciImage
									src={TheMuck}
									alt="The Muck"
									sizes="100vw"
									style={{
										width: 'auto',
										height: 'auto',
									}}
								/>
							</div>

							<div>
								<h2
									className={`${lucisubheading({
										color: 'secondary',
									})} text-center pb-1`}
								>
									Luci Image - Explicit Sizing
								</h2>
								<LuciImage src={wormfood} alt="Wormfood" width={500} height={500} />
							</div>

							{/* This will force a space equivalent to 3 line breaks */}
							<div style={{ height: '3rem' }}></div>
							{/* Add a divider */}
							<Divider />

							<div>
								<h2
									className={`${lucisubheading({
										color: 'secondary',
									})} text-center pb-1`}
								>
									Luci Image - Implicit Sizing
								</h2>
								<div style={{ position: 'relative', height: '400px' }}>
									<LuciImage
										alt="Wormfood"
										src={wormfood}
										fill
										sizes="(min-width: 808px) 50vw, 100vw"
										style={{
											objectFit: 'cover', // cover, contain, none
										}}
									/>
								</div>
							</div>
						</div>
					</div>

					{/* This will force a space equivalent to 3 line breaks */}
					<div style={{ height: '3rem' }}></div>
					{/* Add a divider */}
					<Divider />
				</div>
			</section>
		</>
	)
}

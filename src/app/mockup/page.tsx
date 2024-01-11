import {
	lucititle,
	lucisubtitle,
	lucisubheading,
	lucinote,
} from '@/src/app/_components/_next-ui/primitives'

import { Divider } from '@nextui-org/divider'

import wormfood from '@/public/wormfood.jpg'
import TheMuck from '@/public/TheMuck.jpg'

import 1Home from '@/public/mockup/1Home.png'

import LuciImage from '@/src/app/_components/_ui/LuciImage'

export default function MockupPage() {
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
								src={1Home}
								alt="1Home"
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
			</section>
		</>
	)
}

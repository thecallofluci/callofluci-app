import {
	lucititle,
	lucisubtitle,
	lucisubheading,
	lucinote,
} from '@/src/app/_components/_next-ui/primitives'

import { Divider } from '@nextui-org/divider'
import { Link } from '@nextui-org/link'

import wormfood from '@/public/wormfood.jpg'
import TheMuck from '@/public/TheMuck.jpg'

import Home1 from '@/public/mockup/Home1.png'
import Gallery2 from '@/public/mockup/Gallery2.png'
import AuthenticatedUser3 from '@/public/mockup/AuthenticatedUser3.png'
import Data from '@/public/mockup/Data.png'
import End from '@/public/mockup/End.png'
import Fields from '@/public/mockup/Fields.png'
import FullWorkflow from '@/public/mockup/FullWorkflow.png'
import Receipt from '@/public/mockup/Receipt.png'
import ServerlessFunctions from '@/public/mockup/ServerlessFunctions.png'
import UserForm from '@/public/mockup/UserForm.png'
import WorkFlowPart1 from '@/public/mockup/WorkFlowPart1.png'
import WorkFlowPart2 from '@/public/mockup/WorkFlowPart2.png'
import callofluci from '@/public/mockup/callofluci.svg'

import LuciImage from '@/src/app/_components/_ui/LuciImage'
import { Image } from '@nextui-org/image'

export default function MockupPage() {
	return (
		<>
			<section className="flex flex-col items-center justify-center gap-3 py-8 md:py-10 w-9/10 mx-auto">
				<div>
					<h1 className={lucititle({ color: 'primary' })}>Mockups</h1>
				</div>
				<div>
					<p className={lucinote({ color: 'primary', size: 'sm' })}>
						This page displays wireframe mockups of the app from Excalidraw.
					</p>
					<Link
						isExternal
						href="https://excalidraw.com/#json=44Qao-aY3Kp-nC4MrqJ9p,8-pJN11NaQpxbTwewOPzSg"
						showAnchorIcon
					>
						Excalidraw Wireframes
					</Link>
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
							WIRES
						</h2>
					</div>
					<div className="flex flex-wrap justify-center gap-8">
						<div>
							<h2
								className={`${lucisubheading({
									color: 'secondary',
								})} text-center pb-1`}
							>
								1. Landing Page
							</h2>
							<LuciImage
								src={Home1}
								alt="Home1"
								sizes="80vw"
								style={{
									width: 'auto',
									height: 'auto',
								}}
								className="flex flex-wrap gap-4 items-center overflow-hidden radius-sm rounded-md shadow-medium box-border border-primary-700 border-none"
							/>
						</div>

						<div>
							<h2
								className={`${lucisubheading({
									color: 'secondary',
								})} text-center pb-1`}
							>
								3. Observation Page, authenticated users
							</h2>
							<LuciImage
								src={AuthenticatedUser3}
								alt="AuthenticatedUser3"
								sizes="80vw"
								style={{
									width: 'auto',
									height: 'auto',
								}}
								className="flex flex-wrap gap-4 items-center overflow-hidden radius-sm rounded-md shadow-medium box-border border-primary-700 border-none"
							/>
						</div>

						<div>
							<h2
								className={`${lucisubheading({
									color: 'secondary',
								})} text-center pb-1`}
							>
								4. WorkFlow Part 1
							</h2>
							<LuciImage
								src={WorkFlowPart1}
								alt="WorkFlowPart1"
								sizes="80vw"
								style={{
									width: 'auto',
									height: 'auto',
								}}
								className="flex flex-wrap gap-4 items-center overflow-hidden radius-sm rounded-md shadow-medium box-border border-primary-700 border-none"
							/>
						</div>

						<div>
							<h2
								className={`${lucisubheading({
									color: 'secondary',
								})} text-center pb-1`}
							>
								5. WorkFlow Part 2
							</h2>
							<LuciImage
								src={WorkFlowPart2}
								alt="WorkFlowPart2"
								sizes="80vw"
								style={{
									width: 'auto',
									height: 'auto',
								}}
								className="flex flex-wrap gap-4 items-center overflow-hidden radius-sm rounded-md shadow-medium box-border border-primary-700 border-none"
							/>
						</div>

						<div>
							<h2
								className={`${lucisubheading({
									color: 'secondary',
								})} text-center pb-1`}
							>
								6. Fields
							</h2>
							<LuciImage
								src={Fields}
								alt="Fields"
								sizes="80vw"
								style={{
									width: 'auto',
									height: 'auto',
								}}
								className="flex flex-wrap gap-4 items-center overflow-hidden radius-sm rounded-md shadow-medium box-border border-primary-700 border-none"
							/>
						</div>

						<div>
							<h2
								className={`${lucisubheading({
									color: 'secondary',
								})} text-center pb-1`}
							>
								7. UserForm
							</h2>
							<LuciImage
								src={UserForm}
								alt="UserForm"
								sizes="80vw"
								style={{
									width: 'auto',
									height: 'auto',
								}}
								className="flex flex-wrap gap-4 items-center overflow-hidden radius-sm rounded-md shadow-medium box-border border-primary-700 border-none"
							/>
						</div>

						<div>
							<h2
								className={`${lucisubheading({
									color: 'secondary',
								})} text-center pb-1`}
							>
								8. Receipt
							</h2>
							<LuciImage
								src={Receipt}
								alt="Receipt"
								sizes="80vw"
								style={{
									width: 'auto',
									height: 'auto',
								}}
								className="flex flex-wrap gap-4 items-center overflow-hidden radius-sm rounded-md shadow-medium box-border border-primary-700 border-none"
							/>
						</div>

						<div>
							<h2
								className={`${lucisubheading({
									color: 'secondary',
								})} text-center pb-1`}
							>
								8. Submitted Entry
							</h2>
							<LuciImage
								src={End}
								alt="End"
								sizes="80vw"
								style={{
									width: 'auto',
									height: 'auto',
								}}
								className="flex flex-wrap gap-4 items-center overflow-hidden radius-sm rounded-md shadow-medium box-border border-primary-700 border-none"
							/>
						</div>

						<div>
							<h2
								className={`${lucisubheading({
									color: 'secondary',
								})} text-center pb-1`}
							>
								9. Anatomy of a Receipt
							</h2>
							<LuciImage
								src={FullWorkflow}
								alt="FullWorkflow"
								sizes="80vw"
								style={{
									width: 'auto',
									height: 'auto',
								}}
								className="flex flex-wrap gap-4 items-center overflow-hidden radius-sm rounded-md shadow-medium box-border border-primary-700 border-none"
							/>
						</div>

						<div>
							<h2
								className={`${lucisubheading({
									color: 'secondary',
								})} text-center pb-1`}
							>
								10. Data
							</h2>
							<LuciImage
								src={Data}
								alt="Data"
								sizes="80vw"
								style={{
									width: 'auto',
									height: 'auto',
								}}
								className="flex flex-wrap gap-4 items-center overflow-hidden radius-sm rounded-md shadow-medium box-border border-primary-700 border-none"
							/>
						</div>

						<div>
							<h2
								className={`${lucisubheading({
									color: 'secondary',
								})} text-center pb-1`}
							>
								11. Serverless Functions
							</h2>
							<LuciImage
								src={ServerlessFunctions}
								alt="ServerlessFunctions"
								sizes="80vw"
								style={{
									width: 'auto',
									height: 'auto',
								}}
								className="flex flex-wrap gap-4 items-center overflow-hidden radius-sm rounded-md shadow-medium box-border border-primary-700 border-none"
							/>
						</div>

						<div>
							<h2
								className={`${lucisubheading({
									color: 'secondary',
								})} text-center pb-1`}
							>
								2. Gallery View Page, non-authenticated users
							</h2>
							<LuciImage
								src={Gallery2}
								alt="Gallery2"
								sizes="80vw"
								style={{
									width: 'auto',
									height: 'auto',
								}}
								className="flex flex-wrap gap-4 items-center overflow-hidden radius-sm rounded-md shadow-medium box-border border-primary-700 border-none"
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

import {
	lucititle,
	lucisubtitle,
	luciparagraph,
	lucinote,
	lucinumbered,
} from '@/src/app/styles/primitives'
import { LuciNavigation } from '@/src/app/_components/_ui/LuciDropdown'

export default function AboutPage() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div>
				<h1 className={lucititle({ color: 'primary' })}>About</h1>
			</div>
			<div>
				<p className={lucinote({ color: 'primary', size: 'sm' })}>
					This page describes the project.
				</p>
			</div>
			<div>
				{' '}
				<h2 className={lucisubtitle({ color: 'primary' })}>Call Of Luci</h2>
				<p className={luciparagraph({ color: 'primary' })}>
					Call Of Luci allows users to create, submit, store, and view styled outputs
					called an &quot;Observation&quot;. The application will be built using existing
					frameworks, components, packages, and technology. The core tech stack is
					Next.js, React, and Irys.
				</p>
				<p className={luciparagraph({ color: 'primary' })}>
					Call Of Luci is divided into two distinct, but integrated, parts:
				</p>
				<ol className={lucinumbered({ color: 'primary', size: 'md' })}>
					<li>
						CREATE: A linear user workflow route for users who want to create a new
						Observation using the application.
					</li>
					<li>
						VIEW: A route for a streaming application displaying views of existing
						Observations.
					</li>
				</ol>
			</div>
		</section>
	)
}

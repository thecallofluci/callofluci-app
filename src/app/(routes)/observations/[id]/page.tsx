import {
	lucititle,
	lucisubtitle,
	luciparagraph,
	lucinote,
	lucinumbered,
} from '@/src/app/styles/primitives'

export default function ObservationsPage() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div>
				<h1 className={lucititle({ color: 'primary' })}>Dynamic Observations</h1>
			</div>
			<div>
				<p className={lucinote({ color: 'primary', size: 'sm' })}>
					This page represents the dynamic routing for Observations.
				</p>
			</div>
		</section>
	)
}

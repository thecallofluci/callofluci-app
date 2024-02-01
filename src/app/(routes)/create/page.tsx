import {
	lucititle,
	lucisubtitle,
	luciparagraph,
	lucinote,
} from '@/src/app/styles/primitives'

import ObservationTextInput from '@/src/app/components/ui/LuciTextArea'
import MyForm from '@/src/app/components/forms/ObservationForm'

export default function CreatePage() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div>
				<h1 className={lucititle({ color: 'primary' })}>OBSERVATION</h1>
			</div>
			<div>
				<p className={lucinote({ color: 'primary', size: 'sm' })}>
					This page is the start to a user&apos;s workflow for creating a new Observation. A
					form captures user-inputed text as the primary input for any new Observation.
					Upon clicking Submit, the text is used to create a new Observation Card. In this
					mockup version, placeholder values are used for provenance-related metadata
					added to the card.
				</p>
			</div>
			<div className="mt-8">
				<MyForm />
			</div>
		</section>
	)
}

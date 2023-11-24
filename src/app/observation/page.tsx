import {
	lucititle,
	lucisubtitle,
	luciparagraph,
} from '@/src/app/_components/_next-ui/primitives'

import ObservationTextInput from '@/src/app/_components/_ui/LuciTextArea'
import MyForm from '@/src/app/_components/_forms/ObservationForm'


export default function ObservationPage() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div>
				<h1 className={lucititle({ color: 'primary' })}>OBSERVATION</h1>
			</div>

			<div className="mt-8">
				<MyForm /> 
			</div>
	
		</section>
	)
}

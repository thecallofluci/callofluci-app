import { Textarea } from '@nextui-org/input'
import React from 'react'

type TextareaProps = React.ComponentProps<typeof Textarea>

const ObservationTextInput: React.FC<TextareaProps> = (props) => {
	return (
		<div className="w-full flex flex-col gap-2">
			<Textarea
				minRows={5}
				maxRows={30}
				cacheMeasurements={true}
				variant="faded"
				color="primary"
				size="sm"
				radius="sm"
				label="Observation"
				labelPlacement="outside"
				placeholder="Enter the text of your Observation"
				description="This is a description"
				fullWidth
				isRequired
				// disableAutosize
				className="max-w-lg"
				{...props}
			/>
		</div>
	)
}
//
const DefaultTextarea: React.FC<TextareaProps> = (props) => {
	return (
		<Textarea
			label="Description"
			placeholder="Enter your description"
			className="max-w-xs"
			{...props}
		/>
	)
}

export default ObservationTextInput
export { DefaultTextarea }

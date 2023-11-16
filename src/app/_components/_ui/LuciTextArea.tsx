// src/app/_components/LuciTextArea.tsx
// src/app/_components/_ui/LuciTextArea.tsx
import { Textarea } from '@nextui-org/input'
import React from 'react'

type TextareaProps = React.ComponentProps<typeof Textarea>

const ObservationTextInput: React.FC<TextareaProps> = (props) => {
	return (
		<Textarea
			// isRequired
            size="lg"
			minRows={10}
			radius="sm"
            fullWidth
			variant="faded"
			label="Observation Text"
			placeholder="Enter the text of your Observation"
            className="min-w-md"
			{...props}
		/>
	)
}

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
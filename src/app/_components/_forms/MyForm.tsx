// src/app/_components/_forms/MyForm.tsx

/* 
In the current implementation of your MyForm.tsx, user text is stored in the
component's local state via the useState hook. On form submission, the onSubmit
function sends the form data, including user text, to the submitObservation
function. The response from submitObservation updates the userText state
variable. However, this data isn't persisted beyond the component's lifecycle.
If the component is unmounted or the page is refreshed, the data is lost.
*/

'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Textarea } from '@nextui-org/input'
import { Button } from '@nextui-org/react'
import { submitObservation } from '@/src/app/_actions/submitObservation'
import LuciObservation from '@/src/app/_components/_ui/LuciObservation'
import { LuciButton } from '@/src/app/_components/_ui-completed/LuciButton'
import ObservationTextInput from '@/src/app/_components/_ui/LuciTextArea'

// Define the shape of the form inputs
type FormInputs = {
	observationText: string
}

const MyForm: React.FC = () => {
	// Initialize form hooks and state variables
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormInputs>()
	const [loading, setLoading] = useState(false) // State for loading status
	const [serverError, setServerError] = useState('') // State for server errors
	const [userText, setUserText] = useState('') // State for user's text

	// Function to handle form submission
	const onSubmit = async (data: FormInputs) => {
		setLoading(true) // Start loading
		setServerError('') // Clear any previous server errors
		try {
			const response = await submitObservation(data) // Submit form data

			setUserText(response.text) // Set the user's text
			setLoading(false) // Stop loading

			alert('Successfully submitted the form') // Show success message
			reset() // Reset the form
		} catch (error) {
			setLoading(false) // Stop loading
			setServerError('An error occurred while submitting the form') // Show error message
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="w-full flex flex-col gap-2">
				<Textarea
					{...register('observationText', {
						required: true,
						maxLength: 256,
					})}
					minRows={10}
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
					errorMessage={
						errors.observationText?.type === 'required'
							? 'This field is required'
							: errors.observationText?.type === 'maxLength'
							? 'Observation text cannot exceed 256 characters'
							: ''
					}
					fullWidth
					isRequired
					isInvalid={!!errors.observationText}
					
					className="min-w-[400px]"
					classNames={{
						// base: 'max-w-[400px]',
						// input: 'max-w-[400px]',
					}}
					// {...props}
				/>
			</div>

			{/* Show loading message */}
			{loading && <p>Loading...</p>}
			{/* Show server error message */}
			{serverError && <p>{serverError}</p>}
			<div className="flex justify-center items-center pt-4">
				<Button
					type="submit"
					color="primary"
					variant="ghost"
					radius="sm"
					disabled={loading}
					style={{ fontWeight: 'bold' }}
				>
					SUBMIT
				</Button>
			</div>
			{/* Show LuciObservation component with user's text */}
			{userText && <LuciObservation text={userText} />}
		</form>
	)
}

export default MyForm

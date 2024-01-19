// src/app/_components/_forms/ObservationForm.tsx

/* 
In the current implementation of your MyForm.tsx, user text is stored in the
component's local state via the useState hook. On form submission, the onSubmit
function sends the form data, including user text, to the submitObservation
function. The response from submitObservation updates the userText state
variable. However, this data isn't persisted beyond the component's lifecycle.
If the component is unmounted or the page is refreshed, the data is lost.
*/

/*
This is the MyForm component. It uses the useMyForm custom hook to handle form submissions and manage form state.

The form uses the Controller component from react-hook-form for the observationText field, with validation rules for required input and maximum length.

The form's onSubmit handler prevents the default form submission and calls the handleFormSubmit function from useMyForm.

The component renders the form, along with loading and server error messages, a submit button, and the LuciObservation component with the user's text.
*/

'use client'

import React from 'react'

import { Controller } from 'react-hook-form'

import { useObservationForm } from '@/src/app/_hooks/useObservationForm'

import { LuciButton } from '@/src/app/_components/_ui/LuciButton'
import { LuciTextarea } from '@/src/app/_components/_ui/LuciTextArea'
import { LuciSpinner } from '@/src/app/_components/_ui/LuciSpinner'
import LuciCard from '@/src/app/_components/_ui/LuciCard'

const ObservationForm: React.FC = () => {
	const {
		handleSubmit: handleFormSubmit,
		control,
		errors,
		loading,
		successMessage,
		serverError,
		userText,
	} = useObservationForm()

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault()
				handleFormSubmit(e)
			}}
		>
			<div className="w-full flex flex-col gap-2">
				<Controller
					name="observationText"
					control={control}
					rules={{
						required: 'This field is required',
						maxLength: { value: 256, message: 'Maximum length exceeded' },
					}}
					render={({ field }) => (
						<LuciTextarea
							{...field}
							errorMessage={errors.observationText && errors.observationText.message}
							isInvalid={!!errors.observationText}
							minRows={35}
							// maxRows={30}
							cacheMeasurements={false}
							variant="faded"
							color="primary"
							size="sm"
							radius="sm"
							label="Observation"
							labelPlacement="outside"
							placeholder="Enter the text of your Observation ..."
							description="This is a description"
							fullWidth
							isRequired
							classNames={{
								base: 'min-w-[400px]',
								input: '',
								label: '',
								description: '',
								errorMessage: '',
								inputWrapper: '',
								innerWrapper: '',
							}}
						/>
					)}
				/>
			</div>

			{/* Show loading message */}
			{/* loading && <p>Loading...</p> */}
			{loading && (
				<div className="flex justify-center">
					<LuciSpinner label="" />
				</div>
			)}

			{/* Show success message */}
			{successMessage && <p>{successMessage}</p>}

			{/* Show server error message */}
			{serverError && <p>{serverError}</p>}

			<div className="flex justify-center items-center pt-4">
				<LuciButton
					type="submit"
					color="primary"
					radius="sm"
					isDisabled={loading}
					onPress={() => {}}
				>
					SUBMIT
				</LuciButton>
			</div>

			<div className="flex justify-center items-center pt-8">
				{/* Show LuciCard component with user's text */}
				{userText && (
					<LuciCard
						imageSrc="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
						imageAlt="nextui logo"
						title="Player 256"
						subtitle="Observation"
						body={userText}
						footerLink="https://github.com/nextui-org/nextui"
						timestamp="2012-10-01"
						footerText="View Observation in Call Of Luci."
						additionalLinks={[
							{
								href: 'https://github.com/nextui-org/nextui',
								text: 'View original Observation.',
							},
						]}
						additionalAttributes={['Provenance Attribute 1', 'Provenance Attribute 2']}
					/>
				)}
			</div>
		</form>
	)
}

export default ObservationForm

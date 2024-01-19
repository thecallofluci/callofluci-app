// src/hooks/useObservationForm.ts

/*
This custom hook, useMyForm, encapsulates the logic for handling form submissions.
It uses the useForm hook from react-hook-form for form state management and validation.
It also maintains local state for loading status, server errors, and user text.

The onSubmit function is used to handle form submissions. It sets the loading state,
clears any previous server errors, submits the form data to the submitObservation function,
and then updates the userText state with the response.

This hook returns an object containing the handleSubmit function (wrapped around onSubmit),
the control object for react-hook-form, the form errors, and the states for loading, serverError, and userText.
*/

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { submitObservation } from '@/src/app/_lib/_actions/submitObservation'

type FormInputs = {
	observationText: string
}

export const useObservationForm = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
		reset,
	} = useForm<FormInputs>()
	const [loading, setLoading] = useState(false) // State for loading status
	const [serverError, setServerError] = useState('') // State for server errors
	const [userText, setUserText] = useState('') // State for user's text
	const [successMessage, setSuccessMessage] = useState('') // State for success message

	// Function to handle form submission
	const onSubmit = async (data: FormInputs) => {
		setLoading(true) // Start loading
		setServerError('') // Clear any previous server errors
		try {
			const response = await submitObservation(data) // Submit form data

			setUserText(response.text) // Set the user's text
			setLoading(false) // Stop loading

			setSuccessMessage('Successfully submitted the form') // Set success message

			reset() // Reset the form
		} catch (error) {
			setLoading(false) // Stop loading
			if (error.response) {
				// The request was made and the server responded with a status code
				// that falls out of the range of 2xx
				setServerError(`Server responded with status code ${error.response.status}`)
			} else if (error.request) {
				// The request was made but no response was received
				setServerError('No response received from server')
			} else {
				// Something happened in setting up the request that triggered an Error
				setServerError('An error occurred while submitting the form')
			}
		}
	}

	return {
		handleSubmit: handleSubmit(onSubmit),
		control,
		errors,
		loading,
		successMessage,
		serverError,
		userText,
	}
}

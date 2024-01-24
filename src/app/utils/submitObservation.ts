// submitObservation.ts
'use server'

import { generateObservation } from './generateObservation';

async function submitObservation(data: { observationText: string }) {
  // Here you can add other things you want to do with the submitted data

  // Return the user's text
  return { text: data.observationText };
}

export { submitObservation };
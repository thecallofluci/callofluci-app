// src/app/_actions/createImage.ts
'use server'

import { createCanvas } from 'canvas';

async function generateObservation(data: { observationText: string }) {
  const { observationText } = data;

  // Create a new canvas
  const canvas = createCanvas(200, 200);
  const context = canvas.getContext('2d');

  // Set the font and draw the text
  context.font = '14px Overview';
  context.fillText(observationText, 50, 50);

  // Convert the canvas to a data URL
  const dataUrl = canvas.toDataURL();

  // Return the data URL
  return { image: dataUrl };
}

export { generateObservation };
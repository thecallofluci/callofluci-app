// Note this does not yet have Dynamic Routing integrated
// Instead, this version uses mock data and the useRouter hook to simulate dynamic routing
// based on the observation ID.
'use client'

import {useRouter} from 'next/navigation'

// Import styles
import {
	lucititle,
	lucisubtitle,
	luciparagraph,
	lucinote,
	lucinumbered,
} from '@/src/app/styles/primitives'

// Placeholder observation data
const mockObservations = {
	'1': { id: '1', title: 'Observation One', content: 'This is the first observation.' },
	'2': { id: '2', title: 'Observation Two', content: 'This is the second observation.' },
	// Add more mock observations as needed
}

export default function ObservationsPage() {
	const router = useRouter()
	const { id } = router.query

	// Fetch the observation data based on the ID from the URL
	const observation = mockObservations[id as string]

	if (!observation) {
		return <div>Observation not found.</div>
	}

	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div>
				<h1 className={lucititle({ color: 'primary' })}>Dynamic Observations</h1>
			</div>

			<div>
				<h1 className={lucititle({ color: 'primary' })}>{observation.title}</h1>
				<p className={lucinote({ color: 'primary', size: 'sm' })}>{observation.content}</p>
			</div>
		</section>
	)
}

/*
// Placeholder for generateStaticParams once you have your database or data fetching mechanism in place
// This is a simplified example and needs to be adapted to your actual data fetching logic
export async function generateStaticParams() {
  // Example: Fetching a list of observation IDs from an API or database
  const res = await fetch('https://yourapi.com/observations');
  const observations = await res.json();

  // Return an array of segments for static generation
  return observations.map(observation => [observation.id.toString()]);
}
*/

/*
// Example of fetching data in the new App Router model, adapted for server components
import { fetch } from 'next/data'

async function fetchObservationData(id) {
  const res = await fetch(`https://yourapi.com/observations/${id}`, {
    cache: 'force-cache' // Utilizes the new default caching behavior
  });
  const observation = await res.json();
  return observation;
}
*/
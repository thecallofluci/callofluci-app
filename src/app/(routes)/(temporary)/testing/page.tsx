import React from 'react'
import typography from '@/src/app/styles/typography/typography'

export default function TestingPage() {
	return (
		<div className="space-y-4">
			{/* Custom Typography Section */}
			<div>
				<h1 style={typography.h1}>Custom Heading 1 (h1)</h1>
				<h2 style={typography.h2}>Custom Heading 2 (h2)</h2>
				<h3 style={typography.h3}>Custom Heading 3 (h3)</h3>
				<p style={typography['body-normal']}>
					This is a normal body text paragraph styled with 'body-normal' from custom
					typography.
				</p>
				<p style={typography['body-bold']}>
					This is a bold body text paragraph styled with 'body-bold' from custom
					typography.
				</p>
				<figcaption style={typography['figure-caption']}>
					Figure Caption: Styled with 'figure-caption' from custom typography.
				</figcaption>
				<p style={typography.hero}>
					Hero text: Large impactful text styled with 'hero' from custom typography.
				</p>
				<h1 style={typography.title}>
					Title: A larger title styled with 'title' from custom typography.
				</h1>
				<p style={typography['number-huge']}>
					Huge Number: Styled with 'number-huge' from custom typography.
				</p>
				{/* Add more elements as needed to showcase all typography styles */}
			</div>
			{/* End of Custom Typography Section */}

			{/* Other content can go here */}
		</div>
	)
}

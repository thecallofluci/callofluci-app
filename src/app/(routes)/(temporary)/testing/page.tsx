import React from 'react'
import typography from '@/src/app/styles/typography/typography'

export default function TestingPage() {
	return (
		<div className="space-y-4">
			<h1 style={typography.h1}>Heading 1 (h1)</h1>
			<h2 style={typography.h2}>Heading 2 (h2)</h2>
			<h3 style={typography.h3}>Heading 3 (h3)</h3>
			<p style={typography['body-normal']}>
				This is normal body text. It uses the 'body-normal' typography style.
			</p>
			<p style={typography['body-bold']}>
				This is bold body text. It uses the 'body-bold' typography style.
			</p>
			<figcaption style={typography['figure-caption']}>
				Figure Caption: Styled with 'figure-caption' typography.
			</figcaption>
			<p style={typography.hero}>Hero text: Large impactful text styled with 'hero'.</p>
			<h1 style={typography.title}>Title: A larger title styled with 'title'.</h1>
			<p style={typography['number-huge']}>Huge Number: Styled with 'number-huge'.</p>
			{/* Add more elements as needed to test all typography styles */}
		</div>
	)
}

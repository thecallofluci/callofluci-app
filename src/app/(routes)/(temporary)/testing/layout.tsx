import React from 'react'
import typography from '@/src/app/styles/typography/typography'

export default function TestingLayout({ children }: { children: React.ReactNode }) {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				{/* Example heading with custom typography style */}
				<h1 style={typography.h1}>About Us</h1>
				{children}
			</div>
		</section>
	)
}

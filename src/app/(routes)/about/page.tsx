import React from 'react'
import {
	lucititle,
	lucisubtitle,
	luciparagraph,
	lucinote,
	lucinumbered,
} from '@/src/app/styles/primitives'
import typography from '@/src/app/styles/typography/typography'

export default function AboutPage() {
	return (
		<div>
			{/* Existing section using custom styles from @primitives */}
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div>
					<h1 className={lucititle({ color: 'primary' })}>About</h1>
				</div>
				<div>
					<p className={lucinote({ color: 'primary', size: 'sm' })}>
						This page describes the project.
					</p>
				</div>
				<div>
					<h2 className={lucisubtitle({ color: 'primary' })}>Call Of Luci</h2>
					<p className={luciparagraph({ color: 'primary' })}>
						Call Of Luci allows users to create, submit, store, and view styled outputs
						called an "Observation". The application will be built using existing
						frameworks, components, packages, and technology. The core tech stack is
						Next.js, React, and Irys.
					</p>
					<ol className={lucinumbered({ color: 'primary', size: 'md' })}>
						<li>
							CREATE: A linear user workflow route for users who want to create a new
							Observation using the application.
						</li>
						<li>
							VIEW: A route for a streaming application displaying views of existing
							Observations.
						</li>
					</ol>
				</div>
			</section>

			{/* New section using Tailwind CSS default utility classes */}
			<section className="max-w-4xl mx-auto py-8">
				<h1 className="text-4xl font-bold text-center text-primary mb-4">
					Tailwind Defaults
				</h1>
				<p className="text-base text-gray-700 mb-4">
					This section demonstrates styling using Tailwind CSS's default utility classes,
					without custom styles from <code>@primitives.ts</code>.
				</p>
				<div className="text-lg text-gray-800 mb-6">
					<h2 className="text-3xl font-semibold mb-2">Utility-First CSS</h2>
					<p className="mb-3">
						Tailwind CSS is a utility-first CSS framework packed with classes like{' '}
						<code>flex</code>, <code>pt-4</code>, <code>text-center</code>, and{' '}
						<code>rotate-90</code> that can be composed to build any design, directly in
						your markup.
					</p>
					<ul className="list-disc pl-5 space-y-2">
						<li>Responsive design is a breeze with utility classes.</li>
						<li>Customize your design by configuring Tailwind's default theme.</li>
						<li>Extend Tailwind with plugins for additional functionality.</li>
					</ul>
				</div>
				<blockquote className="border-l-4 border-primary pl-4 italic text-gray-900">
					"I'm convinced that utility-first is the future of CSS." - Anonymous Developer
				</blockquote>
			</section>

			{/* New section to test @tailwindcss/typography */}
			<section className="prose prose-lg mx-auto py-8">
				<h1>About Call Of Luci</h1>
				<p>
					This section is styled using the <code>@tailwindcss/typography</code> plugin. It
					provides sensible defaults for styling rich text content.
				</p>
				<h2>Features</h2>
				<p>Here are some features of Call Of Luci:</p>
				<ul>
					<li>Easy creation and submission of Observations.</li>
					<li>Streamlined user workflow for creating new Observations.</li>
					<li>Viewing platform for existing Observations.</li>
				</ul>
				<blockquote>
					"Call Of Luci revolutionizes the way we think about data visualization and
					interaction."
				</blockquote>
				<p>
					For more information, visit our <a href="#">documentation</a>.
				</p>
			</section>

			

			{/* Section with Preflight styles */}
			<section className="my-8">
				<h1 className="text-4xl font-bold mb-4">Preflight Typography</h1>
				<p>This section demonstrates the base styles applied by Tailwind's Preflight.</p>
				<h2 className="text-3xl font-semibold mt-6">Heading 2</h2>
				<h3 className="text-2xl font-medium mt-4">Heading 3</h3>
				<h4 className="text-xl font-normal mt-3">Heading 4</h4>
				<blockquote className="pl-4 border-l-4 border-gray-200 mt-4">
					"This is a blockquote styled by Preflight's base styles."
				</blockquote>
				<ul className="list-disc pl-8 mt-4">
					<li>Unordered list item</li>
					<li>Another list item</li>
				</ul>
				<ol className="list-decimal pl-8 mt-4">
					<li>Ordered list item</li>
					<li>Another ordered item</li>
				</ol>
				<p className="mt-4">Body text styled with Preflight's base styles.</p>
				<a href="#" className="text-blue-600 hover:underline mt-4">
					This is a link
				</a>
			</section>

		{/* Enhanced section utilizing typography styles */}
		<section className="py-8">
        <div className="max-w-4xl mx-auto">
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
          <p style={typography.hero}>
            Hero text: Large impactful text styled with 'hero'.
          </p>
          <h1 style={typography.title}>Title: A larger title styled with 'title'.</h1>
          <p style={typography['number-huge']}>
            Huge Number: Styled with 'number-huge'.
          </p>
          {/* Add more elements as needed to test all typography styles */}
        </div>
      </section>

		</div>
	)
}

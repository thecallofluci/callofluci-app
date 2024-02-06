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

			{/* Enhanced section utilizing typography styles */}
			<section className="py-8">
				<div className="max-w-4xl mx-auto" style={typography.DEFAULT.css}>
					<h1>About Our Typography</h1>
					<p>
						This section demonstrates the application of our custom typography styles
						defined in <code>@typegraphy.ts</code>.
					</p>

					<h2>Typography in Action</h2>
					<p className="lead">Here's a lead paragraph showcasing our light font style.</p>
					<p>
						<strong>Bold text</strong> and <em>italic text</em> are styled distinctly to
						demonstrate the versatility of our typography system.
					</p>
					<a href="#">This is a link</a>
					<blockquote>
						"Blockquotes have a unique style too, making them stand out."
					</blockquote>
					<code>Code blocks are styled to differentiate from regular text.</code>

					<h3>Headings and Body</h3>
					<p>
						The body text uses the Roman style for easy reading, while headings are
						bolded for emphasis.
					</p>

					<h4>Lists and Links</h4>
					<ul>
						<li>
							List items use a thinner font weight to distinguish from the body text.
						</li>
						<li>
							Links are medium weight and change color on hover to indicate
							interactivity.
						</li>
					</ul>

					<h5>Special Text Elements</h5>
					<p>
						<strong>Bold text</strong> is used to draw attention, while{' '}
						<em>italic text</em> is used for emphasis or to denote foreign words,
						thoughts, or titles.
					</p>

					<h6>Code and Quotes</h6>
					<p>
						Code elements have a medium weight to stand out from the body text, and
						blockquotes are italicized to differentiate quoted text from the author's
						own words.
					</p>

					{/* You can add more examples to showcase different styles */}
				</div>
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

			{/* Section with Typography plugin styles */}
			<section className="prose my-8" style={{ fontFamily: 'var(--font-roman)' }}>
				<h1>Typography Plugin Styles</h1>
				<p>
					This section demonstrates the styles applied by the{' '}
					<code>@tailwindcss/typography</code> plugin, as customized in{' '}
					<code>typography.ts</code>.
				</p>
				<h2>Heading 2</h2>
				<h3>Heading 3</h3>
				<h4>Heading 4</h4>
				<blockquote>"This is a blockquote styled by the Typography plugin."</blockquote>
				<ul>
					<li>Unordered list item styled by the plugin</li>
					<li>Another list item</li>
				</ul>
				<ol>
					<li>Ordered list item styled by the plugin</li>
					<li>Another ordered item</li>
				</ol>
				<p>Body text styled with the Typography plugin's styles.</p>
				<a href="#">This is a link styled by the plugin</a>
				<code>Inline code is styled too.</code>
				<pre>
					<code class="language-js">const example = "This is a block of code";</code>
				</pre>
			</section>
		</div>
	)
}

const typography = {
	DEFAULT: {
		css: {
			'--tw-prose-body': 'var(--font-roman)',
			'--tw-prose-headings': 'var(--font-bold)',
			'--tw-prose-lead': 'var(--font-light)',
			'--tw-prose-links': 'var(--font-medium)',
			'--tw-prose-bold': 'var(--font-bold)',
			'--tw-prose-counters': 'var(--font-thin)',
			'--tw-prose-bullets': 'var(--font-thin)',
			'--tw-prose-hr': 'var(--font-light)',
			'--tw-prose-quotes': 'var(--font-italic)',
			'--tw-prose-quote-borders': 'var(--font-thin)',
			'--tw-prose-captions': 'var(--font-lightItalic)',
			'--tw-prose-code': 'var(--font-medium)',
			'--tw-prose-pre-code': 'var(--font-mediumItalic)',
			'--tw-prose-th-borders': 'var(--font-thin)',
			'--tw-prose-td-borders': 'var(--font-light)',
			fontFamily: 'var(--font-roman)',
			h1: {
				fontFamily: 'var(--font-bold)',
			},
			h2: {
				fontFamily: 'var(--font-semibold)',
			},
			h3: {
				fontFamily: 'var(--font-medium)',
			},
			h4: {
				fontFamily: 'var(--font-roman)',
			},
			a: {
				color: 'var(--font-links)',
				textDecoration: 'none',
				'&:hover': {
					textDecoration: 'underline',
				},
			},
			strong: {
				fontFamily: 'var(--font-bold)',
			},
			em: {
				fontFamily: 'var(--font-italic)',
			},
			// Add more custom styles as needed
		},
	},
	// Define other modifiers if needed, following the same pattern
}

export default typography

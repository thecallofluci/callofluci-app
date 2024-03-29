import { tv } from 'tailwind-variants'

// lucititle: This style is used for the main title of the page. 
export const lucititle = tv({
	base: 'tracking-tight inline font-extrabold uppercase',
	variants: {
		color: {
			primary: 'text-primary',
			secondary: 'text-secondary',
			danger: 'text-danger',
			// Add more colors as needed
		},
		size: {
			sm: 'text-2xl lg:text-3xl',
			md: 'text-[2rem] lg:text-4xl leading-8',
			lg: 'text-3xl lg:text-5xl',
		},
		fullWidth: {
			true: 'w-full block',
		},
	},
	defaultVariants: {
		size: 'md',
	},
})

// lucisubtitle: This style is used for subtitles on the page. 
export const lucisubtitle = tv({
	base: 'w-full md:w-1/2 my-2 text-lg lg:text-xl block max-w-full text-left font-extrabold',
	variants: {
		color: {
			primary: 'text-primary',
			secondary: 'text-secondary',
			danger: 'text-danger',
            focus: 'text-focus',
            content3: 'text-content3',
			// Add more colors as needed
		},
		fullWidth: {
			true: '!w-full',
		},
	},
	defaultVariants: {
		fullWidth: true,
	},
})

// lucisubheading: This style is used for third-tier headers on the page.
export const lucisubheading = tv({
	base: 'w-full my-1 text-sm lg:text-md block max-w-full text-left font-semibold',
	variants: {
		color: {
			primary: 'text-primary',
			secondary: 'text-secondary',
			danger: 'text-danger',
            focus: 'text-focus',
            content3: 'text-content3',
			// Add more colors as needed
		},
		size: {
			sm: 'text-sm',
			md: 'text-base',
			lg: 'text-lg',
		},
		fullWidth: {
			true: 'w-full block',
		},
	},
	defaultVariants: {
		size: 'sm',
		fullWidth: true,
	},
})

// luciparagraph: This style is used for the main body text on the page. 
export const luciparagraph = tv({
	base: 'text-left font-semibold mb-4',
	variants: {
		color: {
			primary: 'text-primary',
			secondary: 'text-secondary',
			danger: 'text-danger',
            focus: 'text-focus',
            content3: 'text-content3',
			// Add more colors as needed
		},
		size: {
			sm: 'text-sm',
			md: 'text-base',
			lg: 'text-lg',
		},
		fullWidth: {
			true: 'w-full block',
		},
	},
	defaultVariants: {
		size: 'md',
		fullWidth: true,
	},
})

// luciallcaps: This style is used for text that should be all caps and bold, similar to LuciButtonProps.
export const luciallcaps = tv({
	base: 'text-left font-bold mb-4',
	variants: {
		color: {
			primary: 'text-primary',
			secondary: 'text-secondary',
			danger: 'text-danger',
            focus: 'text-focus',
            content3: 'text-content3',
			// Add more colors as needed
		},
		size: {
			xs: 'text-xs',
			sm: 'text-sm',
			md: 'text-base',
			lg: 'text-lg',
			xl: 'text-xl',
			'2xl': 'text-2xl',
			'3xl': 'text-3xl',
			'4xl': 'text-4xl',
			// Add more sizes as needed
		},
		fullWidth: {
			true: 'w-full block',
		},
	},
	defaultVariants: {
		size: 'xs',
		fullWidth: true,
	},
})

// luciparagraph: This style is used for the main body text on the page. 
export const lucinote = tv({
	base: 'text-left mb-4',
	variants: {
		color: {
			primary: 'text-primary',
			secondary: 'text-secondary',
			danger: 'text-danger',
            focus: 'text-focus',
            content3: 'text-content3',
			// Add more colors as needed
		},
		size: {
			sm: 'text-sm',
			md: 'text-base',
			lg: 'text-lg',
		},
		fullWidth: {
			true: 'w-full block',
		},
	},
	defaultVariants: {
		size: 'md',
		fullWidth: true,
	},
})

// lucinumbered: This style is used for the main body text on the page to insert a numbered list. 
export const lucinumbered = tv({
	base: 'list-decimal pl-8 text-left font-semibold mb-4 space-y-2',
	variants: {
	  color: {
		primary: 'text-primary',
		secondary: 'text-secondary',
		danger: 'text-danger',
		focus: 'text-focus',
		content3: 'text-content3',
		// Add more colors as needed
	  },
	  size: {
		sm: 'text-sm',
		md: 'text-base',
		lg: 'text-lg',
	  },
	  markerColor: {
		primary: 'marker:text-primary',
		secondary: 'marker:text-secondary',
		danger: 'marker:text-danger',
		focus: 'marker:text-focus',
		content3: 'marker:text-content3',
		// Add more marker colors as needed
	  },
	  listStyleType: {
		disc: 'list-disc',
		decimal: 'list-decimal',
		// Add more list styles as needed
	  },
	  fullWidth: {
		true: 'w-full block',
	  },
	},
	defaultVariants: {
	  size: 'md',
	  listStyleType: 'decimal',
	  fullWidth: true,
	},
  })

// custom animated class
export const lucitypewriter = tv({
	base: 'my-2 text-lg lg:text-xl block max-w-full text-left font-extrabold',
	variants: {
		color: {
			primary: 'text-primary',
			secondary: 'text-secondary',
			danger: 'text-danger',
            focus: 'text-focus',
            content3: 'text-content3',
			// Add more colors as needed
		},
		size: {
			sm: 'text-sm lg:text-md',
			md: 'text-md lg:text-lg',
			lg: 'text-lg lg:text-xl',
		},
		fullWidth: {
			true: 'w-full block',
		},
	},
	defaultVariants: {
		size: 'md',
	},
})

// original primitives from template
export const title = tv({
	base: 'tracking-tight inline font-semibold',
	variants: {
		color: {
			violet: 'from-[#FF1CF7] to-[#b249f8]',
			yellow: 'from-[#FF705B] to-[#FFB457]',
			blue: 'from-[#5EA2EF] to-[#0072F5]',
			cyan: 'from-[#00b7fa] to-[#01cfea]',
			green: 'from-[#6FEE8D] to-[#17c964]',
			pink: 'from-[#FF72E1] to-[#F54C7A]',
			foreground: 'dark:from-[#FFFFFF] dark:to-[#4B4B4B]',
			luci: 'from-[#b4682c] to-[#b4682c]',
		},
		size: {
			sm: 'text-3xl lg:text-4xl',
			md: 'text-[2.3rem] lg:text-5xl leading-9',
			lg: 'text-4xl lg:text-6xl',
		},
		fullWidth: {
			true: 'w-full block',
		},
	},
	defaultVariants: {
		size: 'md',
	},
	compoundVariants: [
		{
			color: [
				'violet',
				'yellow',
				'blue',
				'cyan',
				'green',
				'pink',
				'foreground',
				'luci',
			],
			class: 'bg-clip-text text-transparent bg-gradient-to-b',
		},
	],
})

export const subtitle = tv({
	base: 'w-full md:w-1/2 my-2 text-lg lg:text-xl block max-w-full',
	variants: {
		fullWidth: {
			true: '!w-full',
		},
	},
	defaultVariants: {
		fullWidth: true,
	},
})

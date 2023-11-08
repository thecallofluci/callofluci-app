import { tv } from 'tailwind-variants'

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

export const luciparagraph = tv({
	base: 'text-left font-semibold',
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

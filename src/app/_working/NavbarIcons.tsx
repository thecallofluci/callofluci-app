// NavbarIcons.tsx

import React from 'react'

export interface IconProps extends React.SVGProps<SVGSVGElement> {
	fill?: string
	size?: string | number
	height?: string | number
	width?: string | number
}

export const ChevronDown: React.FC<IconProps> = ({ fill = 'currentColor', size, height, width, ...props }) => {
	return (
		<svg
			fill="none"
			height={size || height || 24}
			viewBox="0 0 24 24"
			width={size || width || 24}
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
				stroke={fill}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeMiterlimit={10}
				strokeWidth={1.5}
			/>
		</svg>
	)
}
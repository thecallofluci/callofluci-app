// LuciImage.tsx UI component
import React from 'react'
import NextImage, { ImageProps } from 'next/image'

interface LuciImageProps extends ImageProps {
	className?: string
}

export default function LuciImage({ className, ...props }: LuciImageProps) {
	return (
		<div
			className={`flex flex-wrap gap-4 items-center border-3 border-primary overflow-hidden radius-sm rounded-md border-solid shadow-medium box-border ${className}`}
		>
			<div className="overflow-hidden">
				<NextImage {...props} />
			</div>
		</div>
	)
}

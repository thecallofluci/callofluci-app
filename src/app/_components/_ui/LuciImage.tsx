import React from 'react'
import NextImage from 'next/image'

import '@/src/app/_styles/globals.css'


export default function LuciImage() {

	return (
        <div className="flex flex-wrap gap-4 items-center">
			<NextImage 
				width={300}
				height={200}
				alt="NextUI hero Image with delay"
				src="https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1656776064476-ADETQUJY3NV2AOI39K3T/SamSpratt_LUCI_Chapter3_VI_TheMuck.jpg"
				style={{
					borderWidth: '2px',
					borderStyle: 'solid',
                    borderColor: 'red', // This does not seem to be importing theme colors
					borderRadius: '6px',
					boxShadow: 'none',
					boxSizing: 'border-box',
				}}
			/>
             </div>
		
	)
}

import React from 'react'
import NextImage from 'next/image'

export default function LuciImage() {
    return (
        <div className={`flex flex-wrap gap-4 items-center border-3 border-primary radius-sm rounded-md border-solid shadow-medium box-border`}>
            <NextImage 
                width={300}
                height={200}
                alt="Luci"
                src="https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1656776064476-ADETQUJY3NV2AOI39K3T/SamSpratt_LUCI_Chapter3_VI_TheMuck.jpg"
				style={{
					borderRadius: '2px',
				  }}
			/>
        </div>
    )
}
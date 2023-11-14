import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card'
import { Divider } from '@nextui-org/divider'
import { Link } from '@nextui-org/link'
import { Image } from '@nextui-org/image'

export default function LuciObservation() {
	return (
		<Card className="max-w-[400px] bg-primary">
			<CardHeader className="flex gap-3">
				<Image
					alt="nextui logo"
					height={40}
					radius="sm"
					src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
					// src="https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1656776064476-ADETQUJY3NV2AOI39K3T/SamSpratt_LUCI_Chapter3_VI_TheMuck.jpg"
					// src="https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1634843275702-X3H3JYTIJAOIEEU1XX9B/SamSpratt_LUCI_BirthofLuci_NFT_Superrare.jpg"
					// src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
					// src="https://xhsuf55y7544mrt247xi4xahb4cfop3mb4xutbtocgnncodgcijq.arweave.net/ueVC97j_ecZGeufujlwHDwRXP2wPL0mGbhGa0ThmEhM"
					width={40}
					style={{
						// borderWidth: '2px',
						// borderStyle: 'solid',
						// borderColor: 'black', // This does not seem to be importing theme colors
						// borderRadius: '6px',
					}}
				/>
				<div className="flex flex-col">
					<p className="text-md text-background">Player 256</p>
					<p className="text-small text-background">Observation</p>
				</div>
			</CardHeader>
			<Divider />
			<CardBody className="text-background">
				<p>
					With a gourd at my breast and a lily of Sharon at my womb I
					pray for fertility, for the sins of an ancestor are only
					rectified through the life of a descendant. We have many
					sins, my dove. We have been born and we have died just as
					many times. Finding each other again and again in the dark
					left eye of this ancestral skull, this monument of of earth,
					cedar, flesh and lore. Look at the fire, my Abraham, into
					the right eye. Sip of vitality. For when Sodom falls, the
					season of our bareness will end.
				</p>
			</CardBody>
			<Divider />
			<CardFooter>
			<div className="flex flex-col">
			
					<Link
					className="text-sm text-background"
						isExternal
						showAnchorIcon
						href="https://github.com/nextui-org/nextui"
					>
						View Observation in Call Of Luci.
					</Link>
	
					<Link
					className="text-sm text-background"
						isExternal
						showAnchorIcon
						href="https://github.com/nextui-org/nextui"
					>
						View original Observation.
					</Link>
					<div 	className="text-left text-sm text-background">
					Provenance Attribute 1
				</div>
				<div 	className="text-left text-sm text-background">
					Provenance Attribute 2
				</div>
				</div>
			</CardFooter>
		</Card>
	)
}


import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card'
import { Divider } from '@nextui-org/divider'
import { Link } from '@nextui-org/link'
import { Image } from '@nextui-org/image'

const ObservationMockup: React.FC = () => {
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
					style={
						{
							// borderWidth: '2px',
							// borderStyle: 'solid',
							// borderColor: 'black', // This does not seem to be importing theme colors
							// borderRadius: '6px',
						}
					}
				/>
				<div className="flex flex-col">
					<p className="text-md text-background">Player 256</p>
					<p className="text-small text-background">Observation</p>
				</div>
			</CardHeader>
			<Divider />
			<CardBody className="text-background">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum.
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
					<div className="text-left text-sm text-background">
						Provenance Attribute 1
					</div>
					<div className="text-left text-sm text-background">
						Provenance Attribute 2
					</div>
				</div>
			</CardFooter>
		</Card>
	)
}

export default ObservationMockup

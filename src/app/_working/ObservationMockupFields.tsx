// ObservationMockupFields.tsx
// Working mockup of completed Observation Card

import React from 'react'
import LuciCard from '@/src/app/_components/_ui/LuciCard'

const ObservationMockupFields: React.FC = () => {
	return (
		<LuciCard
			// imageSrc="https://avatars.githubusercontent.com/u/86160567?s=200&v=4" // note: This image could be based on Observation Type: 256 Players, Heirs of 256 Players, Generic
			imageSrc="https://media.niftygateway.com/image/upload/v1692056679/publishers/niftygateway_curated/91741/111343/SamSpratt_TheMonumentGame_Player_Edition_Ticket_4k.jpg"
			imageAlt="Player"
			title="Player [player-number]"
			subtitle="[player-owner] or, if available, [player-ens]" // first option: ENS name
			// subtitle="0x782b0D1D1c5A426560699b9f94392a2a174F9340" // second option: Ethereum address
			
			body="[observation-text] in paragraph form, sourced from user-input form"
			footerLink="https://github.com/nextui-org/nextui"
			footerText="View Observation [observation-url]"
			// additionalLinks={[
			//	{
			//		href: 'https://github.com/nextui-org/nextui',
			//		text: 'View original Observation.',
			//	},
			//  ]}
			timestamp="Observed: [timestamp]"
			additionalAttributes={['Transaction ID: [transaction-id]', 'Player Type" [player-type]']}
			
		/>
	)
}

export default ObservationMockupFields

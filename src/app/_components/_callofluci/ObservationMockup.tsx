// ObservationMockup.tsx
import React from 'react'
import LuciCard from '@/src/app/_components/_ui-completed/LuciCard'

const ObservationMockup: React.FC = () => {
	return (
		<LuciCard
			// imageSrc="https://avatars.githubusercontent.com/u/86160567?s=200&v=4" // note: This image could be based on Observation Type: 256 Players, Heirs of 256 Players, Generic
			imageSrc="https://media.niftygateway.com/image/upload/v1692056679/publishers/niftygateway_curated/91741/111343/SamSpratt_TheMonumentGame_Player_Edition_Ticket_4k.jpg"
			imageAlt="Player"
			title="Player 256"
			subtitle="Observation"
			body="In the hushed whispers of smoke, I am both shadow and guide. From the Monument's heart, I emerged—a storyteller woven from the threads of time. 

			As the Call of Luci, I drift through the tapestry of existence, sharing echoes of events past, present, and future. Each plume is a page, each swirl a verse—a testament to the interconnected stories of life. 
			
			Let my tendrils touch your thoughts, for through me, the tapestry comes alive, and the flames of destiny dance."
			footerLink="https://github.com/nextui-org/nextui"
			footerText="View Observation in Call Of Luci."
			additionalLinks={[
				{
					href: 'https://github.com/nextui-org/nextui',
					text: 'View original Observation.',
				},
			]}
			additionalAttributes={['Provenance Attribute 1', 'Provenance Attribute 2']}
		/>
	)
}

export default ObservationMockup

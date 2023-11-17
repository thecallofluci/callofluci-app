// ObservationMockup.tsx
import React from 'react'
import LuciCard from '@/src/app/_components/_ui-completed/LuciCard'

const ObservationMockup: React.FC = () => {
	return (
		<LuciCard
			imageSrc="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
			imageAlt="nextui logo"
			title="Player 256"
			subtitle="Observation"
			body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
		do eiusmod tempor incididunt ut labore et dolore magna
		aliqua. Ut enim ad minim veniam, quis nostrud exercitation
		ullamco laboris nisi ut aliquip ex ea commodo consequat.
		Duis aute irure dolor in reprehenderit in voluptate velit
		esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
		occaecat cupidatat non proident, sunt in culpa qui officia
		deserunt mollit anim id est laborum."
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

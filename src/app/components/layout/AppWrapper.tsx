// AppWrapper.tsx
import React, { ReactNode } from 'react'

import { fontSans, fontMono } from '@/src/app/styles/fonts/fonts'

import Header from '@/src/app/components/layout/Header'
import Body from '@/src/app/components/layout/Body'
import Footer from '@/src/app/components/layout/Footer'

interface AppWrapperProps {
	children: ReactNode
}

const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
	return (
		<div
			className={`${fontSans.variable} ${fontMono.variable} relative flex flex-col h-screen`}
		>
			<Header />
			<Body>{children}</Body>
			<Footer />
		</div>
	)
}

export default AppWrapper

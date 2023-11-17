// LuciButton.tsx UI component
import { ReactNode } from 'react'
import { Button } from '@nextui-org/button'

interface LuciButtonProps {
	children: string
	variant?: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost'
	color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
	size?: 'sm' | 'md' | 'lg'
	radius?: 'none' | 'sm' | 'md' | 'lg' | 'full'
	startContent?: ReactNode
	endContent?: ReactNode
	spinner?: ReactNode
	spinnerPlacement?: 'start' | 'end'
	fullWidth?: boolean
	isIconOnly?: boolean
	isDisabled?: boolean
	isLoading?: boolean
	disableRipple?: boolean
	disableAnimation?: boolean

	href?: string                           // added custom Prop
	type?: 'button' | 'submit' | 'reset'    // added custom Prop
	onPress?: () => void                    // Button Event
}

// regular Button component used throughout the app
export const LuciButton = ({
	children,
	variant = 'ghost',
	color = 'primary',
	radius = 'sm',
	href,
	type,
	onPress,
	...props
}: LuciButtonProps) => {
	return (
		<Button
			href={href}
			variant={variant}
			color={color}
			radius={radius}
			style={{ fontWeight: 'bold' }}
			onPress={onPress}
			type={type}
			{...props}
		>
			{children}
		</Button>
	)
}

// widened Button component used throughout the app
export const LuciButtonWide = ({
	children,
	variant = 'ghost',
	color = 'primary',
	radius = 'sm',
	href,
	type,
	onPress,
	...props
}: LuciButtonProps) => {
	const padding = Math.min(2, children.length * 0.25) // Calculate padding based on text length

	return (
		<Button
			href={href}
			variant={variant}
			color={color}
			radius={radius}
			style={{
				fontWeight: 'bold',
				paddingLeft: `${padding}rem`,
				paddingRight: `${padding}rem`,
			}}
			onPress={onPress}
			type={type}
			{...props}
		>
			{children}
		</Button>
	)
}

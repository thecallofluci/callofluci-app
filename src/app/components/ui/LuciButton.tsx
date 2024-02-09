// LuciButton.tsx UI component
import { ReactNode, ElementType, KeyboardEvent, MouseEvent } from 'react'
import { Button } from '@nextui-org/button'

interface LuciButtonProps {
	// NextUI Button Props
	children: ReactNode
	variant?: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost'
	color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'background' | 'foreground'
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

	// NextUI Button Events
	onPress?: (e: MouseEvent) => void
	onPressStart?: (e: MouseEvent) => void
	onPressEnd?: (e: MouseEvent) => void
	onPressChange?: (isPressed: boolean) => void
	onPressUp?: (e: MouseEvent) => void
	onKeyDown?: (e: KeyboardEvent) => void
	onKeyUp?: (e: KeyboardEvent) => void

	// Custom Props
	href?: string // added custom Prop
	type?: 'button' | 'submit' | 'reset' // added custom Prop
	as?: ElementType // added custom Prop

	className?: string
}

// defaults for LuciButton
export const LuciButton = ({
	children,
	variant = 'ghost',
	color = 'primary',
	size = 'md',
	radius = 'sm',
	startContent = null,
	endContent = null,
	spinner = null,
	spinnerPlacement = 'end',
	fullWidth = false,
	isIconOnly = false,
	isDisabled = false,
	isLoading = false,
	disableRipple = false,
	disableAnimation = false,
	onPress = null,
	onPressStart = null,
	onPressEnd = null,
	onPressChange = null,
	onPressUp = null,
	onKeyDown = null,
	onKeyUp = null,
	href = null,
	type = 'button',
	as = null,
	className = '',
	...props
}: LuciButtonProps) => {
	return (
		<Button
			variant={variant}
			color={color}
			size={size}
			radius={radius}
			startContent={startContent}
			endContent={endContent}
			spinner={spinner}
			spinnerPlacement={spinnerPlacement}
			fullWidth={fullWidth}
			isIconOnly={isIconOnly}
			isDisabled={isDisabled}
			isLoading={isLoading}
			disableRipple={disableRipple}
			disableAnimation={disableAnimation}
			onPress={onPress}
			onPressStart={onPressStart}
			onPressEnd={onPressEnd}
			onPressChange={onPressChange}
			onPressUp={onPressUp}
			onKeyDown={onKeyDown}
			onKeyUp={onKeyUp}
			href={href}
			type={type}
			as={as}
			className={className}
			style={{
				fontWeight: 'bold',
			}}
			{...props}
		>
			{children}
		</Button>
	)
}

// LuciButtonWide variant
export const LuciButtonWide = ({
	children,
	variant = 'ghost',
	color = 'primary',
	size = 'md',
	radius = 'sm',
	startContent = null,
	endContent = null,
	spinner = null,
	spinnerPlacement = 'end',
	fullWidth = false,
	isIconOnly = false,
	isDisabled = false,
	isLoading = false,
	disableRipple = false,
	disableAnimation = false,
	onPress = null,
	onPressStart = null,
	onPressEnd = null,
	onPressChange = null,
	onPressUp = null,
	onKeyDown = null,
	onKeyUp = null,
	href = null,
	type = 'button',
	as = null,
	className = '',
	...props
}: LuciButtonProps) => {
	const padding = typeof children === 'string' ? Math.min(2, children.length * 0.25) : 0 // Calculate padding based on text length

	return (
		<Button
			variant={variant}
			color={color}
			size={size}
			radius={radius}
			startContent={startContent}
			endContent={endContent}
			spinner={spinner}
			spinnerPlacement={spinnerPlacement}
			fullWidth={fullWidth}
			isIconOnly={isIconOnly}
			isDisabled={isDisabled}
			isLoading={isLoading}
			disableRipple={disableRipple}
			disableAnimation={disableAnimation}
			onPress={onPress}
			onPressStart={onPressStart}
			onPressEnd={onPressEnd}
			onPressChange={onPressChange}
			onPressUp={onPressUp}
			onKeyDown={onKeyDown}
			onKeyUp={onKeyUp}
			href={href}
			type={type}
			as={as}
			className={className}
			style={{
				fontWeight: 'bold',
				paddingLeft: `${padding}rem`,
				paddingRight: `${padding}rem`,
			}}
			{...props}
		>
			{children}
		</Button>
	)
}

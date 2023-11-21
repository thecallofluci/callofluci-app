import { Textarea } from '@nextui-org/input'
import React, { ReactNode, ChangeEvent } from 'react'

type LuciTextareaProps = {
	// register: any,
	// errors: any,
	children?: ReactNode,
	minRows?: number,
	maxRows?: number,
	cacheMeasurements?: boolean,
	variant?: 'flat' | 'bordered' | 'faded' | 'underlined',
	color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger',
	size?: 'sm' | 'md' | 'lg',
	radius?: 'none' | 'sm' | 'md' | 'lg' | 'full',
	label?: ReactNode,
	value?: string,
	defaultValue?: string,
	placeholder?: string,
	startContent?: ReactNode,
	endContent?: ReactNode,
	description?: ReactNode,
	errorMessage?: ReactNode,
	labelPlacement?: 'inside' | 'outside' | 'outside-left',
	fullWidth?: boolean,
	isRequired?: boolean,
	isReadOnly?: boolean,
	isDisabled?: boolean,
	isInvalid?: boolean,
	validationState?: 'valid' | 'invalid',
	disableAutosize?: boolean,
	disableAnimation?: boolean,
	classNames?: Record<"base" | "label" | "inputWrapper" | "innerWrapper" | "input" | "description" | "errorMessage", string>,
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
	onValueChange?: (value: string) => void,
	onClear?: () => void,
	onHeightChange?: (height: number, meta: { rowHeight: number }) => void,
	// Add any other props you need
  }
  
  export const LuciTextarea: React.FC<LuciTextareaProps> = ({ value, onChange, errorMessage, isInvalid, ...props }) => {
	return (
	  <Textarea
		value={value}
		onChange={onChange}
		errorMessage={errorMessage}
		isInvalid={isInvalid}
		{...props}
	  />
	)
  }
  
  
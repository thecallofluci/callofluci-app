// LuciSpinner.tsx UI component
import { Spinner } from '@nextui-org/spinner'
import {
	lucititle,
	lucisubtitle,
	lucisubheading,
    luciallcaps,
	luciparagraph,
	lucinote,
	lucitypewriter,
} from '@/src/app/styles/primitives'

interface LuciSpinnerProps {
	label?: string
	size?: 'sm' | 'md' | 'lg'
	color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
	labelColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'foreground'
	classNames?: Record<'base' | 'wrapper' | 'circle1' | 'circle2' | 'label', string>
}

export const LuciSpinner: React.FC<LuciSpinnerProps> = ({
    size = 'md',
    color = 'primary',
    label = 'CALLING ...',
    ...props
  }) => {
    return (
      <div className={luciallcaps({ color: 'primary', size: 'xs' })}>
        <Spinner size={size} color={color} label={label} {...props} />
      </div>
    )
  }
// LuciButton.tsx
// add other button components as needed

import { Button } from '@nextui-org/button'
import { Link } from '@nextui-org/link'

interface LuciButtonProps {
    variant?: 'solid' | 'faded' | 'bordered' | 'light' | 'flat' | 'ghost' | 'shadow';
    href?: string; // Make this optional
    children: string;
    color?: string; // Make this optional
    onPress?: () => void; // Make this optional
}

export const LuciButton = ({ href, children, onPress, variant }: LuciButtonProps) => {
	return (
		<Button
			isExternal
			as={Link}
			href={href}
			color="primary"
			variant={variant || "ghost"} // Use the variant prop here
			radius="sm"
			style={{ fontWeight: 'bold' }}
			onPress={onPress} // And this line
		>
			{children}
		</Button>
	)
}

export const LuciButtonWide = ({ href, children, onPress, variant }: LuciButtonProps) => {
    const padding = Math.min(2, children.length * 0.25); // Calculate padding based on text length

    return (
        <Button
            isExternal
            as={Link}
            href={href}
            color="primary"
            variant={variant || "ghost"} // Use the variant prop here
            radius="sm"
            style={{ fontWeight: 'bold', paddingLeft: `${padding}rem`, paddingRight: `${padding}rem` }}
            onPress={onPress} // And this line
        >
            {children}
        </Button>
    )
}
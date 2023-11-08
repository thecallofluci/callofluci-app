// LuciButton.tsx
// add other button components as needed

import { Button } from '@nextui-org/button'
import { Link } from '@nextui-org/link'

interface LuciButtonProps {
    href: string;
    children: string;
}

export const LuciButton = ({ href, children }: LuciButtonProps) => {
	return (
		<Button
			isExternal
			as={Link}
			href={href}
			color="primary"
			variant="bordered"
			radius="sm"
			style={{ fontWeight: 'bold' }}
		>
			{children}
		</Button>
	)
}

export const LuciButtonWide = ({ href, children }: LuciButtonProps) => {
    const padding = Math.min(2, children.length * 0.25); // Calculate padding based on text length

    return (
        <Button
            isExternal
            as={Link}
            href={href}
            color="primary"
            variant="bordered"
            radius="sm"
            style={{ fontWeight: 'bold', paddingLeft: `${padding}rem`, paddingRight: `${padding}rem` }}
        >
            {children}
        </Button>
    )
}

// LuciDropdown.tsx
// currently this does not function properly
import React from 'react'
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
} from '@nextui-org/dropdown'
import { Button } from '@nextui-org/button'

export const LuciDropdown: React.FC = () => {
	return (
		<Dropdown>
			<DropdownTrigger>
				<Button variant="bordered" color="primary" radius="sm" style={{ fontWeight: 'bold' }}>Open Menu</Button>
			</DropdownTrigger>
			<DropdownMenu aria-label="Static Actions">
				<DropdownItem key="new">New file</DropdownItem>
				<DropdownItem key="copy">Copy link</DropdownItem>
				<DropdownItem key="edit">Edit file</DropdownItem>
				<DropdownItem
					key="delete"
					className="text-danger"
					color="danger"
				>
					Delete file
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	)
}

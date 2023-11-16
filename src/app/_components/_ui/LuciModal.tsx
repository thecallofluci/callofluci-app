'use client'

import React from 'react'
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from '@nextui-org/modal'
import { Input, Textarea } from '@nextui-org/input'
import { Checkbox } from '@nextui-org/checkbox'
import { Link } from '@nextui-org/link'
import { Button } from '@nextui-org/button'
import { useDisclosure } from '@nextui-org/use-disclosure'
import {
	LuciButton,
	LuciButtonWide,
} from '@/src/app/_components/_ui/LuciButton'

export default DefaultModal

// NextUI's Modal + Form default implementation
export function DefaultModal() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure()

	return (
		<>
			<Button onPress={onOpen} color="primary">
				Open Modal
			</Button>
			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				placement="top-center"
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">
								Log in
							</ModalHeader>
							<ModalBody>
								<Input
									autoFocus
									label="Email"
									placeholder="Enter your email"
									variant="bordered"
								/>
								<Input
									label="Password"
									placeholder="Enter your password"
									type="password"
									variant="bordered"
								/>
								<div className="flex py-2 px-1 justify-between">
									<Checkbox
										classNames={{
											label: 'text-small',
										}}
									>
										Remember me
									</Checkbox>
									<Link color="primary" href="#" size="sm">
										Forgot password?
									</Link>
								</div>
							</ModalBody>
							<ModalFooter>
								<Button
									color="danger"
									variant="flat"
									onPress={onClose}
								>
									CLOSE
								</Button>
								<Button color="primary" onPress={onClose}>
									SIGN IN
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	)
}

// customized Modal + Form for user's to create an Observation
export function LuciModal() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure()

	return (
		<>
			<LuciButton onPress={onOpen}>OPEN LUCI MODAL</LuciButton>
			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				placement="top-center"
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">
								Luci Observation
							</ModalHeader>
							<ModalBody>
								<Input
									autoFocus
									label="Player"
									placeholder="Enter player number"
									variant="bordered"
								/>
								<Input
									label="Observation"
									placeholder="Enter observation"
									type="text"
									variant="bordered"
								/>
								<div className="flex py-2 px-1 justify-between">
									<Checkbox
										classNames={{
											label: 'text-small',
										}}
									>
										Remember this observation
									</Checkbox>
									<Link color="primary" href="#" size="sm">
										Forgot observation?
									</Link>
								</div>
							</ModalBody>
							<ModalFooter>
								<Button
									color="danger"
									variant="flat"
									onPress={onClose}
								>
									CLOSE
								</Button>
								<Button color="primary" onPress={onClose}>
									SIGN IN
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	)
}

// customized Modal + Form for user's to create an Observation
export function LuciModalTest() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure()

	return (
		<>
			<LuciButton onPress={onOpen}>OPEN LUCI MODAL</LuciButton>
			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				placement="top-center"
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">
								Write your Observation
							</ModalHeader>
							<ModalBody>
								<Textarea
									label="Observation Text"
									placeholder="Enter the text of your Observation"
									minRows={10}
								/>
								<div className="flex py-2 px-1 justify-between">
									<Checkbox
										classNames={{
											label: 'text-small',
										}}
									>
										Remember this observation
									</Checkbox>
									<Link color="primary" href="#" size="sm">
										Forgot observation?
									</Link>
								</div>
							</ModalBody>
							<ModalFooter>
								<Button
									color="danger"
									variant="flat"
									onPress={onClose}
								>
									CANCEL
								</Button>
								<Button color="primary" onPress={onClose}>
									SUBMIT
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	)
}

import React from "react";
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import QRCode from "react-qr-code";

export interface ButtonProps {
    webHook: string;
    label?: string;
}

const ReclaimButton = (props: ButtonProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const qrValue = JSON.stringify({
        "type": "import",
        "webhook": props.webHook
    })
    return (
        <>
        <Button onClick={onOpen}>{props.label ? props.label : 'Import from Reclaim app'}</Button>

        // the modal should show qr code
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <QRCode value={qrValue} />
                </ModalBody>
            </ModalContent>
        </Modal>
        </>
    );
};

export default ReclaimButton;
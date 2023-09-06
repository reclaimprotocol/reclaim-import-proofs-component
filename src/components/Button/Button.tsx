import React, { useEffect } from "react";
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import QRCode from "react-qr-code";

export interface ButtonProps {
    webHook: string;
    isProofsReceived?: boolean;
    label?: string;
}

const ReclaimButton = (props: ButtonProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const qrValue = JSON.stringify({
        "type": "import",
        "webhook": props.webHook
    })

    useEffect(() => {
        if (props.isProofsReceived) {
            onClose();
        }
    }, [props.isProofsReceived, onClose]);

    return (
        <>
            <Button onClick={onOpen}>{props.label ? props.label : 'Import from Reclaim app'}</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Scan QR to import proofs from Reclaim app</ModalHeader>
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
import React, { useEffect } from "react";
import { Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import QRCode from "react-qr-code";

export interface ButtonProps {
    webHook: string;
    bgColor?: string;
    textColor?: string;
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
            <Button
                textColor={props.textColor ? props.textColor : '#ffffff'}
                bgColor={props.bgColor ? props.bgColor : '#0804ec'}
                onClick={onOpen}>{props.label ? props.label : 'Import from Reclaim app'}
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Import Proofs</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex alignItems='center' gap={4}>
                            <QRCode value={qrValue} size={200} />
                            <Text fontSize='lg' fontWeight='bold'>Scan the QR to import your Proofs from Reclaim app</Text>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ReclaimButton;
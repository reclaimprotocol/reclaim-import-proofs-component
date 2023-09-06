import React, { useEffect } from 'react';
import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Flex, Text } from '@chakra-ui/react';
import QRCode from 'react-qr-code';

var ReclaimButton = function (props) {
    var _a = useDisclosure(), isOpen = _a.isOpen, onOpen = _a.onOpen, onClose = _a.onClose;
    var qrValue = JSON.stringify({
        "type": "import",
        "webhook": props.webHook
    });
    useEffect(function () {
        if (props.isProofsReceived) {
            onClose();
        }
    }, [props.isProofsReceived, onClose]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Button, { bgColor: props.bgColor ? props.bgColor : '#0804ec', onClick: onOpen }, props.label ? props.label : 'Import from Reclaim app'),
        React.createElement(Modal, { isOpen: isOpen, onClose: onClose },
            React.createElement(ModalOverlay, null),
            React.createElement(ModalContent, null,
                React.createElement(ModalHeader, null, "Import Proofs"),
                React.createElement(ModalCloseButton, null),
                React.createElement(ModalBody, null,
                    React.createElement(Flex, { alignItems: 'center', gap: 4 },
                        React.createElement(QRCode, { value: qrValue, size: 200 }),
                        React.createElement(Text, { fontSize: 'lg', fontWeight: 'bold' }, "Scan the QR above to import your Proofs from Reclaim app")))))));
};

export { ReclaimButton as ImportReclaimProofs };
//# sourceMappingURL=index.js.map

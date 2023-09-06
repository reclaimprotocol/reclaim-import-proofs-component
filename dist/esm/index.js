import React from 'react';
import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from '@chakra-ui/react';
import QRCode from 'react-qr-code';

var ReclaimButton = function (props) {
    var _a = useDisclosure(), isOpen = _a.isOpen, onOpen = _a.onOpen, onClose = _a.onClose;
    var qrValue = JSON.stringify({
        "type": "import",
        "webhook": props.webHook
    });
    return (React.createElement(React.Fragment, null,
        React.createElement(Button, { onClick: onOpen }, props.label ? props.label : 'Import from Reclaim app')
    // the modal should show qr code
    ,
        "// the modal should show qr code",
        React.createElement(Modal, { isOpen: isOpen, onClose: onClose },
            React.createElement(ModalOverlay, null),
            React.createElement(ModalContent, null,
                React.createElement(ModalHeader, null, "Modal Title"),
                React.createElement(ModalCloseButton, null),
                React.createElement(ModalBody, null,
                    React.createElement(QRCode, { value: qrValue }))))));
};

export { ReclaimButton as ImportReclaimProofs };
//# sourceMappingURL=index.js.map

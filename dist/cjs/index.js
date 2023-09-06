'use strict';

var React = require('react');
var react = require('@chakra-ui/react');
var QRCode = require('react-qr-code');

var ReclaimButton = function (props) {
    var _a = react.useDisclosure(), isOpen = _a.isOpen, onOpen = _a.onOpen, onClose = _a.onClose;
    var qrValue = JSON.stringify({
        "type": "import",
        "webhook": props.webHook
    });
    React.useEffect(function () {
        if (props.isProofsReceived) {
            onClose();
        }
    }, [props.isProofsReceived, onClose]);
    return (React.createElement(React.Fragment, null,
        React.createElement(react.Button, { onClick: onOpen }, props.label ? props.label : 'Import from Reclaim app'),
        React.createElement(react.Modal, { isOpen: isOpen, onClose: onClose },
            React.createElement(react.ModalOverlay, null),
            React.createElement(react.ModalContent, null,
                React.createElement(react.ModalHeader, null, "Import Proofs"),
                React.createElement(react.ModalCloseButton, null),
                React.createElement(react.ModalBody, null,
                    React.createElement(QRCode, { value: qrValue, size: 200 }),
                    React.createElement(react.Text, null, "Scan the QR above to import your Proofs from Reclaim app"))))));
};

exports.ImportReclaimProofs = ReclaimButton;
//# sourceMappingURL=index.js.map

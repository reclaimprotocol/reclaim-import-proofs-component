import React from 'react';

interface ButtonProps {
    webHook: string;
    bgColor?: string;
    isProofsReceived?: boolean;
    label?: string;
}
declare const ReclaimButton: (props: ButtonProps) => React.JSX.Element;

export { ReclaimButton as ImportReclaimProofs };

import React from 'react';

interface ButtonProps {
    webHook: string;
    bgColor?: string;
    textColor?: string;
    isProofsReceived?: boolean;
    label?: string;
    apiKey?: string;
}
declare const ReclaimButton: (props: ButtonProps) => React.JSX.Element;

export { ReclaimButton as ImportReclaimProofs };

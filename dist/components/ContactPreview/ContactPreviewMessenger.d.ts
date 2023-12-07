import React from 'react';
export declare type ContactPreviewUIComponentProps = {
    Avatar?: React.ComponentType;
    contact?: any;
    active?: boolean;
    avatarUrl?: string;
    title?: string;
    setActiveContact?: (contact: any) => void;
};
export declare const ContactPreviewMessenger: (props: ContactPreviewUIComponentProps) => React.JSX.Element;

import React from 'react';
export declare type ContactPreviewProps = {
    Preview?: React.ComponentType<ContactPreviewProps>;
    contact: any;
    activeContact: any | null;
    changeActiveContactEvent: (contact: any) => void;
};
export declare const ContactPreview: (props: ContactPreviewProps) => React.JSX.Element;

import React, { PropsWithChildren } from 'react';
export declare type MessageHeaderProps = {
    avatarName?: string;
    avatarImg?: string[];
    avatarSize?: number;
    title?: string;
};
export declare const MessageHeader: (props: PropsWithChildren<MessageHeaderProps>) => React.JSX.Element | null;

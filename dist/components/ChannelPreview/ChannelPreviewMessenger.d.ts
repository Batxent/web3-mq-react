import React from 'react';
export declare type ChannelPreviewUIComponentProps = {
    Avatar?: React.ComponentType;
    channel: any;
    unread: number;
    lastMessage: string;
    displayTitle: string;
    updatedAt: string;
    active: boolean;
    avatarUrl: string;
    setActiveChannel?: (channel: any) => void;
};
export declare const ChannelPreviewMessenger: (props: ChannelPreviewUIComponentProps) => React.JSX.Element;

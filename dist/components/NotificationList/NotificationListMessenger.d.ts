import React, { MutableRefObject, PropsWithChildren } from 'react';
import { ChatDownProps } from '../ChatDown';
export declare type ContactListMessengerProps = {
    listRef: MutableRefObject<HTMLDivElement | null>;
    error?: boolean;
    loading?: boolean;
    LoadingErrorIndicator?: React.ComponentType<ChatDownProps>;
    LoadingIndicator?: React.ComponentType;
};
export declare const NotificationListMessenger: (props: PropsWithChildren<ContactListMessengerProps>) => React.JSX.Element;

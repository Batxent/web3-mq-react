import React, { MutableRefObject, PropsWithChildren } from 'react';
import { ChatDownProps } from '../ChatDown';
export declare type ChannelListMessengerProps = {
    listRef: MutableRefObject<HTMLDivElement | null>;
    error?: boolean;
    loading?: boolean;
    LoadingErrorIndicator?: React.ComponentType<ChatDownProps>;
    LoadingIndicator?: React.ComponentType;
    visible?: boolean;
};
export declare const ChannelListMessenger: (props: PropsWithChildren<ChannelListMessengerProps>) => React.JSX.Element;

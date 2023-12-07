import React, { PropsWithChildren } from 'react';
export declare type MessageItem = any;
export declare type ChannelState = {
    messageList: MessageItem[] | null;
    threadList: MessageItem[] | null;
    allThreadList: MessageItem[] | null;
    message: MessageItem | null;
    replyMsgInfo: MessageItem | null;
    activeChannel: any | null;
    openAllThread: boolean;
    msgLoading: boolean;
    threadLoading: boolean;
};
export declare type ChannelStateContextValue = ChannelState;
export declare const ChannelStateContext: React.Context<ChannelState | undefined>;
export declare const ChannelStateProvider: ({ children, value, }: React.PropsWithChildren<{
    value: ChannelStateContextValue;
}>) => React.JSX.Element;
export declare const useChannelStateContext: (componentName?: string | undefined) => ChannelState;

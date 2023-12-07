import React, { PropsWithChildren } from 'react';
import type { ChannelActionContextValue } from './ChannelActionContext';
import type { MessageItem } from './ChannelStateContext';
export declare type MessageContextValue = {
    isThread: boolean;
    message: MessageItem;
    handleOpenThread: ChannelActionContextValue['handleOpenThread'];
    handleToReply: ChannelActionContextValue['handleToReply'];
};
export declare const MessageContext: React.Context<MessageContextValue | undefined>;
export declare const MessageProvider: ({ children, value, }: React.PropsWithChildren<{
    value: MessageContextValue;
}>) => React.JSX.Element;
export declare const useMessageContext: (componentName?: string | undefined) => MessageContextValue;

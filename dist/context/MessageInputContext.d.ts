import React, { PropsWithChildren } from 'react';
export declare type MessageInputContextValue = {
    isThread: boolean;
    sendMessage: (text: string, cipher_suite: string) => void;
    closeReply: () => void;
};
export declare const MessageInputContext: React.Context<MessageInputContextValue | undefined>;
export declare const MessageInputContextProvider: ({ children, value, }: React.PropsWithChildren<{
    value: MessageInputContextValue;
}>) => React.JSX.Element;
export declare const useMessageInputContext: (componentName?: string | undefined) => MessageInputContextValue;

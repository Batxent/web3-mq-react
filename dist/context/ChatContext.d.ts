import React, { PropsWithChildren } from 'react';
import type { Client, NotifyResponse } from '@web3mq/client';
import type { CommonUserInfoType, SearchDidType } from '../components/Chat/hooks/useQueryUserInfo';
export declare type ListComponentType = 'room' | 'chat';
export declare enum AppTypeEnum {
    'pc' = "pc",
    'h5' = "h5",
    'mobile' = "mobile"
}
export declare type ChatContextValue = {
    client: Client;
    containerId: string;
    appType: AppTypeEnum;
    activeNotification: NotifyResponse | null;
    setActiveNotification: (notification: NotifyResponse | null) => void;
    showListTypeView: ListComponentType | string;
    setShowListTypeView: (listType: ListComponentType | string) => void;
    logout: () => void;
    getUserInfo: (didValue: string, didType: SearchDidType) => Promise<CommonUserInfoType | null>;
    loginUserInfo: CommonUserInfoType | null;
};
export declare const ChatContext: React.Context<ChatContextValue | undefined>;
export declare const ChatProvider: ({ children, value, }: React.PropsWithChildren<{
    value: ChatContextValue;
}>) => React.JSX.Element;
export declare const useChatContext: (componentName?: string | undefined) => ChatContextValue;

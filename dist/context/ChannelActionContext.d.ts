import React, { Dispatch, PropsWithChildren } from 'react';
import type { ChannelStateReducerAction } from '../components/Channel/ChannelState';
export declare type ChannelActionContextValue = {
    dispatch: Dispatch<ChannelStateReducerAction>;
    handleOpenThread: (message: any, event: React.BaseSyntheticEvent) => void;
    handleToReply: (message: any, event: React.BaseSyntheticEvent) => void;
    closeThread: (event: React.BaseSyntheticEvent) => void;
    handleOpenAllThread: () => void;
    closeAllThreadList: () => void;
    closeReply: () => void;
};
export declare const ChannelActionContext: React.Context<ChannelActionContextValue | undefined>;
export declare const ChannelActionProvider: ({ children, value, }: React.PropsWithChildren<{
    value: ChannelActionContextValue;
}>) => React.JSX.Element;
export declare const useChannelActionContext: (componentName?: string | undefined) => ChannelActionContextValue;

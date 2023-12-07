import React, { PropsWithChildren } from 'react';
import { AppTypeEnum } from '../../context/ChatContext';
import type { ChannelActionContextValue } from '../../context/ChannelActionContext';
export declare type ThreadHeaderProps = {
    title: string;
    appType?: AppTypeEnum;
    close: ChannelActionContextValue['closeThread'] | ChannelActionContextValue['closeAllThreadList'];
};
export declare const ThreadHeader: React.MemoExoticComponent<(props: PropsWithChildren<ThreadHeaderProps>) => React.JSX.Element>;

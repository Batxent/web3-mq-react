import React, { PropsWithChildren } from 'react';
import type { Client } from '@web3mq/client';
import { AppTypeEnum } from '../../context/ChatContext';
export declare type ChatProps = {
    client: Client;
    containerId?: string;
    className?: string;
    appType?: AppTypeEnum;
    style?: React.CSSProperties;
    logout: () => void;
};
export declare const Chat: React.MemoExoticComponent<(props: PropsWithChildren<ChatProps>) => React.JSX.Element>;

import React, { PropsWithChildren } from 'react';
import type { ComponentContextValue } from '../../context/ComponentContext';
export declare type MessageListProps = {
    className?: string;
    Load?: React.ReactNode;
    Message?: ComponentContextValue['Message'];
    isThread?: boolean;
};
export declare const MessageList: React.MemoExoticComponent<(props: PropsWithChildren<MessageListProps>) => React.JSX.Element>;

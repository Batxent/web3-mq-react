import React, { PropsWithChildren } from 'react';
import type { MessageItem } from '../../context/ChannelStateContext';
export declare type MessageProps = {
    isThread?: boolean;
    message: MessageItem;
    Message?: React.ComponentType<any>;
};
export declare const Message: (props: PropsWithChildren<MessageProps>) => React.JSX.Element;

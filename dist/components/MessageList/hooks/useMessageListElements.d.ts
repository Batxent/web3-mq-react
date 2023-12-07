import React from 'react';
import type { ComponentContextValue } from '../../../context/ComponentContext';
import type { ChannelState } from '../../../context/ChannelStateContext';
declare type MessageListElementsProps = {
    Message?: ComponentContextValue['Message'];
    messageList: ChannelState['messageList'];
};
export declare const useMessageListElements: (props: MessageListElementsProps) => React.JSX.Element[] | null;
export {};

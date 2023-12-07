import React, { PropsWithChildren } from 'react';
import { ComponentContextValue } from '../../context/ComponentContext';
export declare type MessageInputProps = {
    isThread?: boolean;
    Input?: ComponentContextValue['Input'];
};
export declare const MessageInput: (props: PropsWithChildren<MessageInputProps>) => React.JSX.Element;

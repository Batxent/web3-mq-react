import React, { PropsWithChildren } from 'react';
export declare type ChatAutoCompleteProps = {
    rows?: number;
    placeholder?: string;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
    value?: string;
};
export declare const ChatAutoComplete: (props: PropsWithChildren<ChatAutoCompleteProps>) => React.JSX.Element;

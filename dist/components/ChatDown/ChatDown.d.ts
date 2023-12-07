import React from 'react';
export declare type ChatDownProps = {
    /** The type of error */
    type: string;
    /** The image url for this error */
    image?: string;
    /** The error message to show */
    text?: string;
};
export declare const ChatDown: (props: ChatDownProps) => React.JSX.Element;

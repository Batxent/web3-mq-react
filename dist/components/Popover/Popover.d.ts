import React, { PropsWithChildren } from 'react';
export declare type PopoverProps = {
    content: string | React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    distance?: number;
};
export declare const Popover: (props: PropsWithChildren<PopoverProps>) => React.JSX.Element;

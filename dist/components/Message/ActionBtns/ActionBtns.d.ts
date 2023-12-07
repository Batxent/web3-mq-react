import React from 'react';
export declare type ActionBtnItem = {
    key: string;
    com: React.ReactElement;
    msg?: string;
    onClick?: (event: React.BaseSyntheticEvent) => void;
};
export declare type ActionBtnsProps = {
    className?: string;
    style?: React.CSSProperties;
};
export declare const ActionBtns: (props: ActionBtnsProps) => React.JSX.Element;

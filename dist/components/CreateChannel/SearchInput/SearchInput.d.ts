import React from 'react';
export declare type SearchInputProps = {
    style?: React.CSSProperties;
    value?: string;
    onChange?: (value: string) => void;
};
export declare const SearchInput: React.MemoExoticComponent<(props: SearchInputProps) => React.JSX.Element>;

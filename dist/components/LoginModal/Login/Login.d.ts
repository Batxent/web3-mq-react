import React from 'react';
declare type IProps = {
    addressBox: React.ReactNode;
    styles: Record<string, any> | null;
    submitLogin: (password: string) => Promise<void>;
    errorInfo: string;
    showLoading: boolean;
};
export declare const Login: React.FC<IProps>;
export {};

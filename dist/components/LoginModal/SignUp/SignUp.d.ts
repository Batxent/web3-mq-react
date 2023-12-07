import React from 'react';
declare type IProps = {
    addressBox: React.ReactNode;
    styles: Record<string, any> | null;
    submitSignUp: (password: string) => Promise<void>;
    errorInfo: string;
    showLoading: boolean;
    isResetPassword?: boolean;
};
export declare const SignUp: React.FC<IProps>;
export {};

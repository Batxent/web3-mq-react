import React from 'react';
import { MainKeysType } from './hooks/useLogin';
import type { CommonIProps } from '../CommonOperationModal';
interface IProps extends CommonIProps {
    isResetPassword?: boolean;
    showWeb3MQBtn?: boolean;
    keys?: MainKeysType;
}
export declare const LoginModal: React.FC<IProps>;
export {};

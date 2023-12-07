import React from 'react';
import type { AuthStatusType } from '../../utils';
import { AuthToDappEnum } from '../../utils';
import type { CommonIProps } from '../CommonOperationModal';
declare type authScopeItem = Record<string, 'on' | 'off'>;
interface IProps extends CommonIProps {
    url: string;
    fastestUrl: string;
    dappId: string;
    authScopesType?: string;
    authScopesStatus?: AuthStatusType;
    authAudit?: AuthToDappEnum;
    propsAuthScopes?: authScopeItem;
}
export declare const AuthToReceiveModal: React.FC<IProps>;
export {};

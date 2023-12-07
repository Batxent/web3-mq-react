import React from 'react';
import type SignClient from '@walletconnect/sign-client';
import { AppTypeEnum } from '../../context';
import { ButtonSize } from '../../components';
import type { KeyPairsType } from '@web3mq/client';
import type { DappConnect as DappConnectType } from '@web3mq/dapp-connect';
import { UserAccountType } from './hooks/useBindDid';
import type { SessionTypes } from '@walletconnect/types';
export declare type EventDataTye = {
    msg: string;
    data: any;
    type: string;
};
export declare type CommonIProps = {
    env?: 'dev' | 'test';
    propsKeys?: KeyPairsType;
    client?: any;
    styles?: Record<string, any>;
    appType?: AppTypeEnum;
    containerId: string;
    modalClassName?: string;
    customBtnNode?: React.ReactNode;
    isShow?: boolean;
    handleOperationEvent: (eventData: any) => void;
    propWalletConnectClient?: SignClient;
    propWcSession?: SessionTypes.Struct;
    propDappConnectClient?: DappConnectType;
    propsUserAccount?: UserAccountType;
    auditBtnSize?: ButtonSize;
};
interface IProps extends CommonIProps {
    url: string;
    fastestUrl: string;
    operationType: string;
    operationValue: string;
    operationMode?: 'bind_did' | 'follow_user';
}
export declare type didItemType = {
    did_type: string;
    did_value: string;
    provider_id: string;
    bind_type: string;
    bind_value: string;
    bind_name?: string;
};
export declare type userPublicProfileType = {
    avatar_url: string;
    bind_did_list: didItemType[];
    is_my_following: boolean;
    nickname: string;
    stats: {
        total_followers: number;
        total_following: number;
    };
    timestamp: number;
    userid: string;
    wallet_address: string;
    wallet_type: string;
};
export declare const CommonOperationModal: React.FC<IProps>;
export {};

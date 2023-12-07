import React from 'react';
import type { WalletType, BlockChainType } from '@web3mq/client';
import { AppTypeEnum } from '../../../context';
import type { DappConnect } from '@web3mq/dapp-connect';
import SignClient from '@walletconnect/sign-client';
import type { SessionTypes } from '@walletconnect/types';
export declare type LoginEventType = 'login' | 'register' | 'error';
export declare type LoginEventDataType = {
    type: LoginEventType;
    msg: string;
    data: LoginResType | RegisterResType | null;
};
export declare type MainKeysType = {
    publicKey: string;
    privateKey: string;
    walletAddress: string;
};
export declare type UserAccountType = {
    userid: string;
    address: string;
    walletType: WalletType;
    userExist: boolean;
};
export declare type LoginResType = {
    privateKey: string;
    publicKey: string;
    tempPrivateKey: string;
    tempPublicKey: string;
    didKey: `${BlockChainType}:${string}`;
    userid: string;
    address: string;
    walletType: WalletType;
    pubkeyExpiredTimestamp: number;
};
export declare type RegisterResType = {
    privateKey: string;
    publicKey: string;
    address: string;
    walletType: WalletType;
};
declare type IProps = {
    client: any;
    dappConnectClient?: DappConnect;
    walletConnectClient: React.MutableRefObject<SignClient | undefined>;
    handleLoginEvent: (eventData: LoginEventDataType) => void;
    keys?: MainKeysType;
    account?: UserAccountType;
    appType?: AppTypeEnum;
    propWcSession?: SessionTypes.Struct;
    isResetPassword?: boolean;
};
declare const useLogin: (props: IProps) => {
    mainKeys: MainKeysType | undefined;
    registerSignRes: string;
    afterSignAndLogin: () => Promise<void>;
    login: (didType?: WalletType) => Promise<void>;
    getUserAccount: (didType?: WalletType, address?: string | undefined) => Promise<{
        address: string;
        userExist: boolean;
    }>;
    register: (didType?: WalletType, nickname?: string | undefined) => Promise<void>;
    userAccount: UserAccountType | undefined;
    loginByQrCode: () => Promise<void>;
    setMainKeys: React.Dispatch<React.SetStateAction<MainKeysType | undefined>>;
    registerByQrCode: (signature?: string | undefined) => Promise<void>;
    web3MqSignCallback: (signature: string) => Promise<void>;
    setUserAccount: React.Dispatch<React.SetStateAction<UserAccountType | undefined>>;
    confirmPassword: React.MutableRefObject<string>;
    create: () => Promise<void>;
    connect: () => Promise<SessionTypes.Struct>;
    closeModal: () => void;
    onSessionConnected: (_session: SessionTypes.Struct) => void;
    loginByWalletConnect: () => Promise<void>;
    registerByWalletConnect: (nickname?: string | undefined) => Promise<void>;
};
export default useLogin;

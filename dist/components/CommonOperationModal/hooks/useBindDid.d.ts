import React from 'react';
import { AppTypeEnum } from '../../../context';
import type { DappConnect } from '@web3mq/dapp-connect';
import SignClient from '@walletconnect/sign-client';
import type { WalletType } from '@web3mq/client';
import type { SessionTypes } from '@walletconnect/types';
export declare type UserAccountType = {
    userid: string;
    address: string;
    walletType: WalletType;
    userExist: boolean;
};
declare const useBindDid: (client: any, walletConnectClient: React.MutableRefObject<SignClient | undefined>, dappConnectClient?: DappConnect | undefined, appType?: AppTypeEnum | undefined, propsWcSession?: SessionTypes.Struct | undefined) => {
    sendSignByDappConnect: (signContent: string, address: string) => Promise<void>;
    normalSign: (signContent: string, address: string, walletType: WalletType) => Promise<void>;
    create: () => Promise<void>;
    connect: () => Promise<SessionTypes.Struct>;
    closeModal: () => void;
    sendSignByWalletConnect: (signContent: string, address: string) => Promise<void>;
    onSessionConnected: (_session: SessionTypes.Struct) => void;
    web3MqSignCallback: (signature: string) => Promise<void>;
    wcSession: React.MutableRefObject<SessionTypes.Struct | undefined>;
    signRes: string;
    didPubKey: string;
};
export default useBindDid;

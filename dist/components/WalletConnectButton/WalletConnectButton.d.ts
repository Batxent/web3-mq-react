import React from 'react';
import type { SessionTypes } from '@walletconnect/types';
declare type ConnectWalletInfoType = {
    address: string;
    walletType: 'walletConnect' | 'web3mq' | 'eth' | 'starknet';
    walletName: 'MetaMask' | 'Argent' | 'DappConnect' | 'WalletConnect';
};
declare type IProp = {
    handleConnectEvent: (event: ConnectWalletInfoType) => void;
    create: () => Promise<void>;
    connect: () => Promise<SessionTypes.Struct>;
    closeModal: () => void;
    onSessionConnected: (session: SessionTypes.Struct) => void;
    handleError: any;
    handleClientStep: any;
};
export declare const WalletConnectButton: React.FC<IProp>;
export {};

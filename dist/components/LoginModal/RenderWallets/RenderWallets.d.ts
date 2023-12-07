import React from 'react';
import type { WalletType } from '@web3mq/client';
declare type IProps = {
    showCount?: number;
    styles: Record<string, any> | null;
    showLoading: boolean;
    handleWalletClick: (walletType: WalletType) => Promise<void>;
    handleViewAll: () => void;
};
export declare const RenderWallets: React.FC<IProps>;
export {};

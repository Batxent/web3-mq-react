import React, { ReactNode } from 'react';
declare type IProps = {
    styles: Record<string, any> | null;
    WalletConnectBtnNode: ReactNode;
    handleWeb3MQClick: () => void;
    RenderWallets: ReactNode;
    SuiConnectBtn?: ReactNode;
    handleSuiConnect?: (type: any) => Promise<void>;
    showWeb3MQBtn?: boolean;
};
export declare const Home: React.FC<IProps>;
export {};

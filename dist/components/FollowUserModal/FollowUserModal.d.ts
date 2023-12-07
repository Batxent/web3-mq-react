import React from 'react';
import { CommonIProps } from '../CommonOperationModal';
interface IProps extends CommonIProps {
    url: string;
    fastestUrl: string;
    targetWalletType: string;
    targetWalletAddress: string;
}
export declare const FollowUserModal: React.FC<IProps>;
export {};

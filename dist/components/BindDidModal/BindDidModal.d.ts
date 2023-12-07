import React from 'react';
import { CommonIProps } from '../CommonOperationModal';
interface IProps extends CommonIProps {
    url: string;
    fastestUrl: string;
    didType: string;
    didValue: string;
}
export declare const BindDidModal: React.FC<IProps>;
export {};

import React from 'react';
import { GroupSettingsModalTypeEnum } from '../GroupSettings';
declare type IProps = {
    className?: string;
    style?: React.CSSProperties;
    handleModalTypeChange: (type?: GroupSettingsModalTypeEnum) => void;
    handleSetMsgChange: (msg: string) => void;
};
export declare const SelectNFTCollection: React.FC<IProps>;
export {};

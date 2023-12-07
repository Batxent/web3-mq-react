import React from 'react';
import { GroupSettingsModalTypeEnum } from '../GroupSettings';
declare type IProps = {
    className?: string;
    style?: React.CSSProperties;
    handleModalTypeChange: (type?: GroupSettingsModalTypeEnum) => void;
    setErrorMessage: any;
};
export declare const AddMember: React.FC<IProps>;
export {};

import React from 'react';
import { GroupSettingsModalTypeEnum } from '../GroupSettings';
declare type IProps = {
    className?: string;
    style?: React.CSSProperties;
    handleModalTypeChange: (type: GroupSettingsModalTypeEnum) => void;
};
export declare const RoomSettings: React.FC<IProps>;
export {};

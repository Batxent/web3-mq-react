import React from 'react';
export declare type CommonCenterStatusIProp = {
    styles: Record<string, any> | null;
    title: string;
    textContent: string;
    icon: React.ReactNode;
    customBtn?: React.ReactNode;
    btnText?: string;
    handleBtnClick?: () => void;
    showBtn?: boolean;
    addressBox?: React.ReactNode;
    authToDappList?: React.ReactNode;
};
export declare const CommonCenterStatus: React.FC<CommonCenterStatusIProp>;

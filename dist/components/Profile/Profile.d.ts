import React, { PropsWithChildren } from 'react';
import type { CommonUserInfoType } from '../Chat/hooks/useQueryUserInfo';
declare type IProps = {
    userInfo?: CommonUserInfoType;
    AvatarNode?: React.ReactNode;
    isTab?: boolean;
    isSelf?: boolean;
    hasLogout?: boolean;
};
export declare const Profile: React.MemoExoticComponent<(props: PropsWithChildren<IProps>) => React.JSX.Element>;
export {};

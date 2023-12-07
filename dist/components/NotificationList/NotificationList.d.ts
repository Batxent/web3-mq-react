import React from 'react';
import { PaginatorProps } from '../Paginator';
export declare type NotificationShowType = 'list' | 'modal';
export declare type NotificationListProps = {
    List?: React.ComponentType<NotificationListProps>;
    EmptyContaniner?: React.ReactNode;
    className?: string;
    Notification?: React.ComponentType<any>;
    Paginator?: React.ComponentType<PaginatorProps>;
    style?: React.CSSProperties;
};
export declare const NotificationList: React.FC<NotificationListProps>;

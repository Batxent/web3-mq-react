/// <reference types="react" />
import type { Client, EventTypes, NotifyResponse } from '@web3mq/client';
declare type StatusType = {
    error: boolean;
    loading: boolean;
};
export declare const usePaginatedNotifications: (client: Client) => {
    status: StatusType;
    loadNextPage: () => void;
    notifications: NotifyResponse[] | null;
    unReadCount: number | undefined;
    handleEvent: (props: {
        type: EventTypes;
    }) => void;
    handleFirendRequest: (targetIUserid: string, action: any) => Promise<void>;
    setNotifications: import("react").Dispatch<import("react").SetStateAction<NotifyResponse[] | null>>;
    refreshing: boolean;
};
export {};

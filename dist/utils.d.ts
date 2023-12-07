import type { FollowOperationApiParams } from '@web3mq/client';
import type { BlockChainType } from '@web3mq/client';
export declare const getEnsNameByAddress: (address: string) => Promise<string>;
export declare function getShortAddress(address?: string, num?: number, endNum?: number): string;
export declare const copyText: (text: string) => Promise<boolean>;
/**
 * 防反跳。fn函数在最后一次调用时刻的delay毫秒之后执行！
 * @param fn 执行函数
 * @param delay 时间间隔
 * @param isImmediate 为true，debounce会在delay时间间隔的开始时立即调用这个函数
 * @returns {Function}
 */
export declare function debounce<T extends {}>(fn: Function, delay: number, isImmediate: boolean): ([k]: string) => T | Promise<T>;
export declare const dateTransform: (time: number) => string;
export declare const formatUserInfoData: (data: any) => {
    avatar: any;
    title: any;
    user_id: any;
};
/**
 * channel格式化
 * @param channel
 */
export declare const formatMessageData: (channel: any) => any;
/**
 * File格式转换
 */
export declare const fileParse: (file: File, type?: string) => Promise<any>;
/**
 * 日期格式化
 * @param time
 * @param format
 */
export declare function dateFormat(time: number, format?: string): string;
export declare const toDate: (date: number | Date) => Date;
/** 比较两个日期，如果第一个日期晚于第二个日期，则返回 1；如果第一个日期早于第二个日期，则返回 -1；如果日期相等，则返回 0。
 *
 * @param dirtyDateLeft
 * @param dirtyDateRight
 * @returns
 *
 */
export declare const compareAsc: (dirtyDateLeft: Date | number, dirtyDateRight: Date | number) => number;
export declare const endOfDay: (dirtyDate: Date | number) => Date;
export declare const endOfMonth: (dirtyDate: Date | number) => Date;
export declare const isLastDayOfMonth: (dirtyDate: Date | number) => boolean;
export declare const getTimezoneOffsetInMilliseconds: (date: Date) => number;
export declare const differenceInCalendarMonths: (dirtyDateLeft: Date | number, dirtyDateRight: Date | number) => number;
export declare const differenceInMilliseconds: (dateLeft: Date | number, dateRight: Date | number) => number;
export declare const differenceInSeconds: (dateLeft: Date | number, dateRight: Date | number) => number;
export declare const differenceInMonths: (dirtyDateLeft: Date | number, dirtyDateRight: Date | number) => number;
export declare function newDateFormat(time: number, format?: string): string;
/**
 *
 * @param date
 * @returns
 * | Distance between dates                                            | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * |   0 <= seconds <= 60                                              | Just now            |
 * |   1 <= minutes < 60                                               | [1..60] min ago     |
 * |   1 <= hour < 24                                                  | [1..24] h ago       |
 * |   1 <= day < 7                                                    | [1..7] d ago        |
 * |   7 <= day < 30                                                   | [7..30] / 7 wk ago  |
 * |   1 <= month < 2                                                  | 1 mo ago            |
 * |   month >= 2                                                      | MM/DD，如：Apr 14    |
 * |  year > 1                                                         | MM/DD/YYYY          |
 */
export declare const formatDistanceToNow: (date: number | Date) => string;
/**
 * 获取wallet address默认头像
 */
export declare const getUserAvatar: (address: string) => string;
export declare const generateQrCode: (text: string) => Promise<string>;
export declare type bindDidV2Params = {
    userid: string;
    did_signature: string;
    did_type: BlockChainType;
    did_value: string;
    timestamp: number;
    sign_content: string;
    bind_type: string;
    bind_action: 'bind' | 'unbind';
    bind_value: string;
};
export declare type AuthToDappParams = {
    userid: string;
    dapp_id: string;
    scopes: any;
    signature_content: string;
    timestamp: number;
    did_signature: string;
    did_value: string;
    did_pubkey?: string;
    auth_status: AuthToDappEnum;
    did_type: BlockChainType;
};
export declare enum AuthToDappEnum {
    OFF = 0,
    ON = 1
}
export declare type AuthStatusType = 'off' | 'on' | 'clear';
export declare const selfRequest: (url: string, payload: bindDidV2Params | FollowOperationApiParams | AuthToDappParams) => Promise<any>;

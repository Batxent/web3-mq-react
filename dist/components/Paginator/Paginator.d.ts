import React, { PropsWithChildren } from 'react';
import { LoadingProps } from '../Loading';
export declare type PaginatorProps = {
    loadNextPage: () => any;
    element?: React.MutableRefObject<HTMLDivElement | null>;
    Loading?: React.ComponentType<LoadingProps>;
    showLoading?: boolean;
    reverse?: boolean;
    useCapture?: boolean;
};
export declare const UnMemoizedPaginator: (props: PropsWithChildren<PaginatorProps>) => React.JSX.Element;
export declare const Paginator: React.MemoExoticComponent<(props: PropsWithChildren<PaginatorProps>) => React.JSX.Element>;

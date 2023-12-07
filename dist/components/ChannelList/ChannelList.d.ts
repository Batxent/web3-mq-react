import React, { PropsWithChildren } from 'react';
import { ChannelListMessengerProps } from './ChannelListMessenger';
import { ChannelPreviewProps } from '../ChannelPreview';
import { EmptyStateIndicatorProps } from '../EmptyStateIndicator';
import { PaginatorProps } from '../Paginator';
export declare type ChannelListProps = {
    List?: React.ComponentType<ChannelListMessengerProps>;
    Preview?: React.ComponentType<ChannelPreviewProps>;
    DefaultEmptyStateIndicator?: React.ComponentType<EmptyStateIndicatorProps>;
    Paginator?: React.ComponentType<PaginatorProps>;
};
export declare const ChannelList: (props: PropsWithChildren<ChannelListProps>) => React.JSX.Element;

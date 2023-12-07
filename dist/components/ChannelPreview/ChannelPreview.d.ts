import React from 'react';
export declare type ChannelPreviewProps = {
    Preview?: React.ComponentType<ChannelPreviewProps>;
    channel: any;
    changeActiveChannelEvent: (channel: any) => void;
    activeChannel: any | null;
};
export declare const ChannelPreview: (props: ChannelPreviewProps) => React.JSX.Element;

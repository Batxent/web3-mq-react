import React, { PropsWithChildren } from 'react';
import { ComponentContextValue } from '../../context/ComponentContext';
export declare type ChannelProps = {
    className?: string;
    Message?: ComponentContextValue['Message'];
    Input?: ComponentContextValue['Input'];
    ThreadHeader?: ComponentContextValue['ThreadHeader'];
};
export declare const Channel: (props: PropsWithChildren<ChannelProps>) => React.JSX.Element;

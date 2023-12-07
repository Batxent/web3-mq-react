import React, { PropsWithChildren } from 'react';
import { ComponentContextValue } from '../../context/ComponentContext';
export declare type ThreadProps = {
    Input?: ComponentContextValue['Input'];
    Message?: ComponentContextValue['Message'];
};
export declare const Thread: React.MemoExoticComponent<(props: PropsWithChildren<ThreadProps>) => React.JSX.Element | null>;

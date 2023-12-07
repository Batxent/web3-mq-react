import React, { PropsWithChildren } from 'react';
import type { ThreadHeaderProps } from '../components/Thread/ThreadHeader';
export declare type ComponentContextValue = {
    Message: React.ComponentType<any>;
    Input: React.ComponentType<any>;
    ThreadHeader: React.ComponentType<ThreadHeaderProps>;
};
export declare const ComponentContext: React.Context<ComponentContextValue | undefined>;
export declare const ComponentProvider: ({ children, value, }: React.PropsWithChildren<{
    value: ComponentContextValue;
}>) => React.JSX.Element;
export declare const useComponentContext: (componentName?: string | undefined) => ComponentContextValue;

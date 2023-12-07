import React, { PropsWithChildren } from 'react';
import { ContactListMessengerProps } from './ContactListMessenger';
import { ContactPreviewProps } from '../ContactPreview';
import { EmptyStateIndicatorProps } from '../EmptyStateIndicator';
import { PaginatorProps } from '../Paginator';
export declare type ContactListProps = {
    List?: React.ComponentType<ContactListMessengerProps>;
    Preview?: React.ComponentType<ContactPreviewProps>;
    DefaultEmptyStateIndicator?: React.ComponentType<EmptyStateIndicatorProps>;
    Paginator?: React.ComponentType<PaginatorProps>;
    visible?: boolean;
};
export declare const ContactList: (props: PropsWithChildren<ContactListProps>) => React.JSX.Element;

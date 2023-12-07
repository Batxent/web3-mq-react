import React from 'react';
declare type SelectContactsProps = {
    className?: string;
    btnText?: string;
    contactList: Array<any>;
    selectedContacts: Array<any>;
    handleNext: () => void;
    needRequire?: boolean;
    onSelected: (contact: Array<any>) => void;
    onDeleted: (contact: Array<any>) => void;
};
export declare const SelectContacts: React.FC<SelectContactsProps>;
export {};

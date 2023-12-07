import React from 'react';
import { AvatarProps } from '../Avatar';
export interface AvatarGroupProps extends Omit<AvatarProps, 'image'> {
    images: string[];
}
export declare const AvatarGroup: (props: AvatarGroupProps) => React.JSX.Element;

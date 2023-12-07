/**
 * @file A round avatar image with fallback to username's first letter
 */
import React from 'react';
export declare type AvatarProps = {
    className?: string;
    style?: React.CSSProperties;
    /** Image URL or default is an image of the first initial of the name if there is one  */
    image?: string | null;
    /** Name of the image, used for title tag fallback */
    name?: string;
    /** Shape of the avatar - circle, rounded or square
     * @default circle
     */
    shape?: 'circle' | 'rounded' | 'square';
    /** Size in pixels
     * @default 32px
     */
    size?: number;
    /** click event handler */
    onClick?: (event: React.BaseSyntheticEvent) => void;
    /** mouseOver event handler */
    onMouseOver?: (event: React.BaseSyntheticEvent) => void;
};
export declare const Avatar: (props: AvatarProps) => React.JSX.Element;

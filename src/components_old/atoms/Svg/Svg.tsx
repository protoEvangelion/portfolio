import React from 'react';
import SvgsObject from './generatedSvgs';

interface ISvgProps {
    className?: string;
    fill?: string;
    height?: string;
    width?: string;
    name: string;
    style?: object;
    margin?: string;
    rotate?: number;
}

export const Svg = ({ className, fill, name, style, margin, rotate, ...props }: ISvgProps) => {
    const styles = {
        ...style,
        margin,
    };

    if (rotate) {
        styles.transform = `rotate(${rotate}deg)`;
        styles.transition = 'transform 0.5s';
    }

    const DynamicSvg = SvgsObject[name];

    if (!DynamicSvg) {
        console.log(`${name} Svg not found`);
    }

    return DynamicSvg ? (
        <DynamicSvg {...props} className={className} name={name} style={styles} />
    ) : (
        <span />
    );
};

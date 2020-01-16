import { color, space, styled } from '@/style';
import { IColorSpaceProps } from '@/interfaces';

export const Span = styled<IColorSpaceProps, 'span'>('span')`
    ${color};
    ${space};
`;

Span.defaultProps = {
    color: 'black',
};

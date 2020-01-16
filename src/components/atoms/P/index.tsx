import { color, space, styled } from '@/style';
import { IColorSpaceProps } from 'interfaces';

export const P = styled<IColorSpaceProps, 'p'>('p')`
    ${color};
    ${space};
`;

P.defaultProps = {
    color: 'black',
};

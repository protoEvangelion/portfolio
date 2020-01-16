import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { color, styled } from '@/style';

interface ILinkProps extends React.HTMLAttributes<Element> {
    color?: string;
    bg?: string;
    tabIndex: number;
    to: string;
}

const StyledLink = styled(GatsbyLink)`
    text-decoration: none;
    font-weight: light;
    z-index: 2;

    ${color};
`;

export const Link: React.SFC<ILinkProps> = ({
    alignItems,
    flexDirection,
    flexWrap,
    justifyContent,
    children,
    ...rest
}) => <StyledLink {...rest}>{children}</StyledLink>;

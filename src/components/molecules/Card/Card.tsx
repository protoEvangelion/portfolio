import * as React from 'react'
import { media, styled } from '@/style'
import { Flex, Heading, Link } from '@/components/atoms'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface ICardProps {
  bg?: string
  link: string
  title: string
}

const StyledLink = styled(Link)`
  text-decoration: none;
`

const CardWrapper = styled(Flex)`
  backface-visibility: hidden;
  background: ${({ bg = 'white', theme }) => theme.colors[bg]};
  border-radius: 8px;
  box-shadow: 0 50px 40px rgba(0, 0, 0, 0.7);
  color: black;
  flex-direction: column;
  margin: 3rem 2rem;
  overflow: hidden;
  padding: 3rem;
  position: relative;
  transform: translateZ(0);
  width: 90%;

  &:hover {
    color: ${props => props.theme.colors.foreground};

    &::before {
      transform: scale(2);
    }

    .heading {
      transform: translateY(-10px);
    }

    svg {
      transform: scale(1.5);
    }
  }

  &::before {
    background: ${props => props.theme.colors.green};
    content: '';
    position: absolute;
    z-index: -1;
    top: -50px;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 100%;
    transform: scale(0);
    transition: transform 0.4s ease-out;
  }

  .heading {
    color: currentColor;
    margin-bottom: 0;
    transition-duration: 0.4s;
    transition-timing-function: ease-out;
    transition-property: color, transform;
  }

  svg {
    background: ${props => props.theme.colors.green};
    color: ${props => props.theme.colors.foreground};
    height: 1.25em;
    border-radius: 50%;
    padding: 1rem;
    transition-duration: 0.4s;
    transition-timing-function: ease-out;
    transition-property: color, transform;
  }

  ${media.tablet`
    width: 40%;
  `};
`

export const Card = ({ link, title }: ICardProps) => (
  <CardWrapper as={StyledLink} bg="white" justifyContent="center" alignItems="center" to={link}>
    <FontAwesomeIcon icon="cogs" size="3x" />

    <Heading color="black" as="h3">
      {title}
    </Heading>
  </CardWrapper>
)

import { Box, Flex, Logo, Link } from 'components/atoms'
import * as React from 'react'
import { styled } from 'style'

// const LocationIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
//     <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
//     <path d="M0 0h24v24H0z" fill="none" />
//   </svg>
// )

interface INavbarProps {
  dark?: boolean
  hideText?: boolean
  tabIndex?: number
}

const StyledLink = styled(Link)`
  /* justify-self: flex-start; */
  position: absolute;
  left: 0;
`

const LinkWrapper = styled(Flex)`
  align-items: center;
  padding: 1rem 1rem 1rem 0;

  > a {
    padding: 0 2rem;
  }
`

export class Navbar extends React.Component<INavbarProps> {
  render() {
    const { dark, hideText, tabIndex } = this.props

    return (
      <Flex
        position="fixed"
        top={['2rem', '4rem', '8rem']}
        left={['1rem', '4rem', '8rem']}
        right={['1rem', '4rem', '8rem']}
        zIndex="1"
        justifyContent="center"
      >
        <StyledLink to="/" tabIndex={0}>
          <Logo dark={dark || false} />
        </StyledLink>

        <LinkWrapper hide={hideText}>
          <Link tabIndex={0} to="/">
            HOME
          </Link>
          <Link tabIndex={0} to="/projects">
            PROJECTS
          </Link>
          <Link tabIndex={0} to="/contact">
            CONTACT
          </Link>
        </LinkWrapper>
      </Flex>
    )
  }
}

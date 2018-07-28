import { Box, Flex } from 'components/atoms'
// import { MenuButton } from 'components/molecules'
import Link from 'gatsby-link'
import * as React from 'react'
import { connect } from 'react-redux'
import ReactSVG from 'react-svg'
import { toggleNav } from 'store/navbar/action'
import { Wrapper } from './styles'

const BaseNavbar: React.SFC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <Wrapper align={['flex-start', 'center']} bg="black" p={3} isOpen={isOpen}>
      {/* <MenuButton isOpen={props.isOpen} toggleNav={props.toggleNav} /> */}

      <Link to="/portfolio">
        <ReactSVG path="logo.svg" />
      </Link>

      <Flex align="space-around" width={1}>
        <Link to="/stack">Stack</Link>
        <Link to="/allApps">MicroApps</Link>
        <Link to="/apiApps">APIs</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </Flex>

      {/* <StyledIcon href="/allApps" name="briefcase" height={100} /> */}
    </Wrapper>
  )
}

// export const Navbar = () => <div>no</div>

const mapStateToProps = state => ({ isOpen: state.ui.navbarIsOpen })

export const Navbar = connect(
  mapStateToProps,
  { toggleNav },
)(BaseNavbar)

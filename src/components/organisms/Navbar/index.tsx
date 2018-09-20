import { Box, Flex, Logo, Link } from 'components/atoms'
// import { MenuButton } from 'components/molecules'
import * as React from 'react'
import { Col, Row } from 'style'

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
)

export const Navbar: React.SFC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <Row middle="xs">
      <Col xsOffset={1} xs={1}>
        <Link to="/">
          <Logo />
        </Link>
      </Col>

      <Col lg={6} lgOffset={1} md={false}>
        <Flex justify="space-around">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </Flex>
      </Col>
    </Row>
  )
}

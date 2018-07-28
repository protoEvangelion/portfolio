import { Icon, Link, Text } from 'components/atoms'
import * as React from 'react'
import styled from 'styled-components'
import { color } from 'styled-system'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  padding: 2rem;
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }

  ${color};
`

const Credits = styled(Text)`
  display: flex;
  margin: 0;
  @media (max-width: 640px) {
    padding: 10px;
  }
`

export const Footer = props => {
  return (
    <Wrapper {...props}>
      <Credits>
        Made with &nbsp;
        <Icon name="heart" />
        &nbsp; by &nbsp;
        <Link href="https://github.com/protoEvangelion">Ryan Garant</Link>
      </Credits>
      <Credits>Copyright © 2018</Credits>
    </Wrapper>
  )
}

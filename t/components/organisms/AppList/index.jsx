import Link from 'gatsby-link'

import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 100px 0;
`

const AppImage = styled.div`
  background: url(${props => props.src}) no-repeat center;
  background-size: 100% auto;
  margin: 15px;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  transition: all 1s ease-in-out;
  &:hover {
    box-shadow: inset 0 0 0 110px rgba(255, 255, 255, 0.4), inset 0 0 0 16px rgba(255, 255, 255, 0.8),
      0 1px 2px rgba(0, 0, 0, 0.1);
  }
`

export const AppList = ({ apps }) => {
  const renderAppIcons = () => {
    return apps.map(app => {
      return (
        <Link key={app.route} href={app.route}>
          <AppImage key={app.src} src={app.src} />
        </Link>
      )
    })
  }
  return <Wrapper>{renderAppIcons()}</Wrapper>
}

AppList.propTypes = {
  apps: PropTypes.array.isRequired,
}

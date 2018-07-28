import { space } from 'styled'
import { colors } from 'theme'
import icons from 'theme/icons.json'
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

const hasMultiplePaths = icon => icon.path.includes('|')

const attachFillColor = path => {
  if (path.includes('#')) {
    return {
      d: path.split('#')[0],
      key: path.slice(7),
      fill: '#' + path.split('#')[1],
    }
  }
  return { d: path }
}

const renderPaths = icon => {
  if (hasMultiplePaths(icon)) {
    const pathsArr = icon.path.split('|')
    const paths = pathsArr.map(path => <path {...attachFillColor(path)} />)
    return paths
  } else {
    return <path {...attachFillColor(icon.path)} />
  }
}

const StyledSvg = styled.svg`
  display: block;
`

const Base = ({ fill, name, size, ...props }) => {
  const icon = icons[name]

  if (!icon) return false

  return (
    <StyledSvg {...props} viewBox={icon.viewBox} width={size} height={size} fill={colors[fill]}>
      {renderPaths(icon)}
    </StyledSvg>
  )
}

export const Icon = styled(Base)`
  flex: none;
  ${space};
`

Icon.displayName = 'Icon'

Icon.defaultProps = {
  fill: 'white',
  size: 24,
}

Base.propTypes = {
  fill: PropTypes.string,
  name: PropTypes.oneOf(Object.keys(icons)).isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

// I import & export all my styled component related libraries for easy clean importing

import { Grid, Col, Row as GridRow } from 'react-styled-flexboxgrid'
import {
  alignItems,
  borderRadius,
  color,
  flexDirection,
  flexWrap,
  justifyContent,
  responsiveStyle,
  space,
  width,
} from 'styled-system'

import { ifProp, prop, switchProp } from 'styled-tools'
// import { IThemeInterface } from './theme'
import * as styledComponents from 'styled-components'

const { default: styled, createGlobalStyle, css, keyframes, ThemeProvider } = styledComponents

const Row = styled(GridRow)`
  ${space};
`

export {
  /* Grid */
  Grid,
  Col,
  Row,
  /* Styled Components */
  styled,
  createGlobalStyle,
  css,
  keyframes,
  ThemeProvider,
  /* Styled System */
  alignItems,
  borderRadius,
  color,
  flexDirection,
  flexWrap,
  justifyContent,
  responsiveStyle,
  space,
  width,
  /* Styled System */
  ifProp,
  prop,
  switchProp,
}

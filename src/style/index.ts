// I import & export all my styled component related libraries for easy clean importing

import { Grid, Col, Row as GridRow } from 'react-styled-flexboxgrid'
import {
  alignItems,
  alignSelf,
  borderRadius,
  bottom,
  color,
  flex,
  flexDirection,
  flexWrap,
  justifyContent,
  justifySelf,
  left,
  position,
  right,
  space,
  style,
  top,
  width,
  zIndex,
} from 'styled-system'

import { ifProp, prop, switchProp } from 'styled-tools'
import * as styledComponents from 'styled-components'
import { ThemedStyledComponentsModule } from 'styled-components'

import ThemeInterface from './theme'

const {
  default: styled,
  css,
  createGlobalStyle,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>

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
  alignSelf,
  borderRadius,
  bottom,
  color,
  flex,
  flexDirection,
  flexWrap,
  justifyContent,
  left,
  position,
  right,
  space,
  style,
  top,
  width,
  zIndex,
  justifySelf,
  /* Styled Tools */
  ifProp,
  prop,
  switchProp,
}

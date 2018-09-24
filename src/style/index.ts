// I import & export all my styled component related libraries for easy clean importing

import { Grid, Col, Row } from 'react-styled-flexboxgrid'
import {
  alignItems,
  color,
  flexDirection,
  flexWrap,
  justifyContent,
  responsiveStyle,
  space,
  width,
} from 'styled-system'

import { ifProp, prop, switchProp } from 'styled-tools'
import { IThemeInterface } from './theme'
import * as styledComponents from 'styled-components'
import { ThemedStyledComponentsModule } from 'styled-components'

const {
  default: styled,
  createGlobalStyle,
  css,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<IThemeInterface>

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

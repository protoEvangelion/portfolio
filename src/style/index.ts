// I import & export all my styled component related libraries for easy clean importing

import { Grid, Col, Row } from 'react-styled-flexboxgrid'
import styled, { css, injectGlobal, keyframes, ThemeProvider } from 'styled-components'
import styledTypes from 'styled-components-ts'
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

export {
  /* Grid */
  Grid,
  Col,
  Row,
  /* Styled Components */
  styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
  /* Typescript Support */
  styledTypes,
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

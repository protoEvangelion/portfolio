import { Box } from 'components/atoms'
import { IBoxProps } from 'interfaces'
import { styled, styledTypes } from 'style'
import theme from 'style/theme'

const getMaxWidth = em => em - 0.01

const breakpoints = props => ({
  lg: `@media screen and (min-width: ${props.theme.breakpoints[2]}em) and (max-width: ${getMaxWidth(
    props.theme.breakpoints[3]
  )}em)`,
  md: `@media screen and (min-width: ${props.theme.breakpoints[1]}em) and (max-width: ${getMaxWidth(
    props.theme.breakpoints[2]
  )}em)`,
  sm: `@media screen and (min-width: ${props.theme.breakpoints[0]}em) and (max-width: ${getMaxWidth(
    props.theme.breakpoints[1]
  )}em)`,
  xl: `@media screen and (min-width: ${props.theme.breakpoints[3]}em)`,
  xs: `@media screen and (max-width: ${getMaxWidth(props.theme.breakpoints[0])}em)`,
})

const hidden = key => props =>
  props[key]
    ? {
        [breakpoints(props)[key]]: {
          display: 'none',
        },
      }
    : null

interface IHide extends IBoxProps {
  xs: boolean
  sm: boolean
  md: boolean
  lg: boolean
  xl: boolean
}

export const Hide = styledTypes<IHide>(Box.extend)`
  ${hidden('xs')} ${hidden('sm')} ${hidden('md')} ${hidden('lg')} ${hidden('xl')};
`

Hide.defaultProps = {
  theme,
}

Hide.displayName = 'Hide'

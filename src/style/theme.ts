// This theme file is based on the styled-components styled system
// https://github.com/jxnblk/styled-system

export interface IThemeInterface {
  bold: number
  breakpoints: number[]
  colors: {
    [key: string]: string
  }
  flexboxgrid: object
  font: string
  fontSizes: number[]
  fontWeights: {
    [key: string]: number
  }
  monospace: string
  radii: number[]
  radius: string
  regular: number
  space: number[]
}

// export const breakpoints = ['576px', '767px', '979', '1280']

export const space = [0, 4, 8, 16, 32, 64, 128]

export const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72, 96]
export const regular = 400
export const bold = 600

// styled-system's `fontWeight` function can hook into the `fontWeights` object
export const fontWeights = {
  bold,
  regular,
}

export const radii = [0, 2, 5]
export const radius = '5px'
export const font = '-apple-system, BlinkMacSystemFont, sans-serif'
export const monospace = '"SF Mono", "Roboto Mono", Menlo, monospace'

// @media screen and (min-width: 40em) 640px
// @media screen and (min-width: 52em) 832px
// @media screen and (min-width: 64em) 1024px

const draculaTheme = {
  background: '#282a36',
  comment: '#6272a4',
  cyan: '#8be9fd',
  foreground: '#f8f8f2',
  green: '#50fa7b',
  orange: '#ffb86c',
  pink: '#ff79c6',
  purple: '#bd93f9',
  red: '#ff5555',
  yellow: '#f1fa8c',
}

export const colors = {
  ...draculaTheme,
  accent1: 'rgb(155, 155, 155)',
  accent2: 'rgb(250, 175, 0)',
  accent3: 'rgb(176, 69, 69)',
  active: 'rgb(23, 195, 169)',
  black: 'rgb(33, 33, 33)',
  facebook: 'rgb(59, 89, 152)',
  github: 'rgb(0, 0, 0)',
  google: 'rgb(221, 75, 57)',
  gray: '#adb4b9',
  gray0: '#f9f9fa',
  gray1: '#eceeef',
  gray2: '#dee1e3',
  gray3: '#cfd3d7',
  gray4: '#bfc5c9',
  gray5: '#adb4b9',
  gray6: '#98a1a8',
  gray7: '#7f8b93',
  gray8: '#606e79',
  gray9: '#374047',
  linkedin: 'rgb(0, 119, 181)',
  primary: 'rgb(23, 195, 169)',
  secondary: 'rgb(0, 125, 125)',
  twitter: 'rgb(85, 172, 238)',
  white: 'white',
}

const flexboxgrid = {
  // Defaults
  gridSize: 12, // columns
  gutterWidth: 1.5, // rem
  outerMargin: 8.25, // rem
  mediaQuery: 'only screen',
  container: {
    sm: 46, // rem
    md: 61, // rem
    lg: 76, // rem
  },
  breakpoints: {
    xs: 0, // em
    sm: 48, // em
    md: 64, // em
    lg: 75, // em
  },
}

const theme = {
  bold,
  colors,
  // flexboxgrid,
  font,
  fontSizes,
  fontWeights,
  monospace,
  radii,
  radius,
  regular,
  space,
}

export default theme

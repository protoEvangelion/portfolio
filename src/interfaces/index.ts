export interface IBoxProps extends IColorProps, ISpaceProps, IPositionProps, IWidthProps {
  center?: 'y' | 'x' | true
  cursor?: string
  borderRadius?: string
  opacity?: number
  height?: string
  transition?: string
  zIndex?: number
  justifySelf?: string
  alignSelf?: string
  flex?: string
}

export interface IFlexProps extends IBoxProps {
  alignItems?: string | string[]
  justifyContent?: string | string[]
  flexDirection?: string | string[]
  flexWrap?: string | string[]
  hide?: boolean
}

export interface IColorProps {
  color?: string
  bg?: string
}

export interface IPositionProps {
  position?: 'absolute' | 'fixed' | 'relative'
  top?: number
  left?: number
  right?: number
  bottom?: number
}

export interface ISpaceProps {
  /** Margin */
  m?: number | string[]
  mt?: number | string[]
  mr?: number | string[]
  mb?: number | string[]
  ml?: number | string[]
  mx?: number | string[]
  my?: number | string[]
  /** Padding */
  p?: number | string[]
  pt?: number | string[]
  pr?: number | string[]
  pb?: number | string[]
  pl?: number | string[]
  px?: number | string[]
  py?: number | string[]
}

export interface IWidthProps {
  width?: number[] | string[] | number | string
  w?: number[] | string[] | number | string
}

export interface IColorSpaceProps extends ISpaceProps, IColorProps {}

/* --- GraphQL --- */

export interface IAllMarkdownRemark {
  edges: Array<{
    node: {
      id: string
      fields: {
        slug: string
      }
      frontmatter: {
        title: string
      }
    }
  }>
}

/* --- Component Props --- */

export interface IIndexPageProps {
  data: {
    headshot: {
      childImageSharp: {
        fixed: {
          tracedSVG: string
        }
      }
    }
  }
}

export interface IIndexPageState {
  currentFrame: number
  hoverRectangleY: number
  totalFrames: number
  initialized: boolean
  isCTAHovered: boolean
  isSidebarActive: boolean
  inTransit: boolean
  menuOpen: boolean
}

export interface INotesPageProps {
  data: {
    allMarkdownRemark: IAllMarkdownRemark
  }
}

export interface INoteLayoutProps {
  data: {
    allMarkdownRemark: IAllMarkdownRemark
    markdownRemark: {
      html: string
      frontmatter: {
        title: string
      }
    }
  }
}

export interface ISidebarProps {
  currentFrame: number
  handleSidebarMouseEnter: () => {}
  handleSidebarMouseLeave: () => {}
  isSidebarActive: boolean
  moveToFrame: (hi: number) => {}
  totalFrames: number
  updateCoordinates: () => {}
}

export interface ITransitionProps {
  children: (styles: object) => {}
  type?: 'fade'
  duration?: number
  show: boolean
  opacity?: number
}

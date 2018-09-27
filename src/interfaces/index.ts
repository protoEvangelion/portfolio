export interface IColorProps {
  color?: string
  bg?: string
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
  width?: number | string[]
  w?: number | string[]
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

export interface IBoxProps extends IColorProps, ISpaceProps, IWidthProps {
  center?: 'y' | 'x' | true
  cursor?: string
  borderRadius?: string
  opacity?: number
  height?: string
  transition?: string
}

export interface IFlexProps extends IBoxProps {
  align?: string | string[]
  justify?: string | string[]
  flexDirection?: string | string[]
  flexWrap?: string | string[]
  hide?: boolean
}

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

export interface IH1 extends IColorSpaceProps {
  underline?: boolean
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

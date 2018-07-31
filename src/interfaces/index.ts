export interface IBoxProps extends IColorProps, ISpaceProps, IWidthProps {}

export interface IColorProps {
  color?: string
  bg?: string
}

export interface IFlexProps extends IColorProps, ISpaceProps, IWidthProps {
  align?: string | string[]
  justify?: string | string[]
  flexDirection?: string | string[]
  flexWrap?: string | string[]
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

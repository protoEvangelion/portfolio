// @flow
export type IColorProps = {
  color?: string,
  bg?: string,
}

export type ISpaceProps = {
  /** Margin */
  m?: number | string[],
  mt?: number | string[],
  mr?: number | string[],
  mb?: number | string[],
  ml?: number | string[],
  mx?: number | string[],
  my?: number | string[],
  /** Padding */
  p?: number | string[],
  pt?: number | string[],
  pr?: number | string[],
  pb?: number | string[],
  pl?: number | string[],
  px?: number | string[],
  py?: number | string[],
}

export type IWidthProps = {
  width?: number | string[],
  w?: number | string[],
}

export type IColorSpaceProps = ISpaceProps & IColorProps

/* --- GraphQL --- */

export type IAllMarkdownRemark = {
  edges: Array<{
    node: {
      id: string,
      fields: {
        slug: string,
      },
      frontmatter: {
        title: string,
      },
    },
  }>,
}

/* --- Component Props --- */

export type IBoxProps = IColorProps &
  ISpaceProps &
  IWidthProps & {
    center?: 'y' | 'x' | true,
    cursor?: string,
    borderRadius?: string,
    opacity?: number,
    height?: string,
    transition?: string,
  }

export type IFlexProps = IBoxProps & {
  align?: string | string[],
  justify?: string | string[],
  flexDirection?: string | string[],
  flexWrap?: string | string[],
  hide?: boolean,
}

export type IIndexPageProps = {
  data: {
    headshot: {
      childImageSharp: {
        fixed: {
          tracedSVG: string,
        },
      },
    },
  },
}

export type IH1 = IColorSpaceProps & {
  underline?: boolean,
}

export type INotesPageProps = {
  data: {
    allMarkdownRemark: IAllMarkdownRemark,
  },
}

export type INoteLayoutProps = {
  data: {
    allMarkdownRemark: IAllMarkdownRemark,
    markdownRemark: {
      html: string,
      frontmatter: {
        title: string,
      },
    },
  },
}

export type ISidebarProps = {
  currentFrame: number,
  handleSidebarMouseEnter: () => {},
  handleSidebarMouseLeave: () => {},
  isSidebarActive: boolean,
  moveToFrame: (hi: number) => {},
  totalFrames: number,
  updateCoordinates: () => {},
}

export type ITransitionProps = {
  type?: 'fade',
  duration?: number,
  show: boolean,
  opacity?: number,
}

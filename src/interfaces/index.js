// @flow
import * as React from 'react'

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
  children: React.Node,
  underline?: boolean,
}

export type IText = IColorSpaceProps & {
  children: React.Node,
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

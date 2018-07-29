import * as React from 'react'
import { graphql, Link, StaticQuery } from 'gatsby'

import '../../styles/notes/dracula-prism.css'
import '../../styles/notes/base.css'

const NoteLayout: React.SFC = ({ children, data }) => {
  return (
    <div>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      yolo
    </div>
  )
}

export default NoteLayout

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

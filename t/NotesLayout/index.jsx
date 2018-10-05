import * as React from 'react'
import { graphql } from 'gatsby'

import '../../../styles/notes/dracula-prism.css'
import '../../../styles/notes/base.css'

export const NotesLayout: React.SFC = ({ data }) => {
  const note = data.markdownRemark

  return (
    <div>
      <h1>{note.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: note.html }} />
    </div>
  )
}

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

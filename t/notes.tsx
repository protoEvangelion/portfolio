import * as React from 'react'
import { Link, graphql } from 'gatsby'

const NotesIndex: React.SFC = ({ data }) => {
  const notes = data.allMarkdownRemark.edges

  return (
    <div>
      <div>
        <h1>Notes</h1>
        <ul>
          {notes.map(note => (
            <li key={note.node.fields.slug}>
              <span>{note.node.frontmatter}</span>
              <Link to={note.node.fields.slug} className="link-underline">
                {note.node.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default NotesIndex

export const pageQuery = graphql`
  {
    allMarkdownRemark(limit: 2000) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

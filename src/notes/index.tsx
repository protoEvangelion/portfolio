import { graphql } from 'gatsby'
import * as React from 'react'

const Index: React.SFC = ({ data }) => {
  console.log('data', data)
  return <div>hi</div>
}

export default Index

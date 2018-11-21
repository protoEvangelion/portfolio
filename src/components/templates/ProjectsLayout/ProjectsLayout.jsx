import * as React from 'react'
import { Illustration } from './Illustration'

export const ProjectsLayout = ({ children }) => (
  <main>
    <Illustration />

    {children}
  </main>
)

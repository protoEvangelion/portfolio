import { Footer, Heading, ProjectHeader } from '~/components/organisms'
import { PageTemplate } from '~/components/templates'
import React from 'react'

const NotFoundPage = () => {
  return (
    <PageTemplate header={<ProjectHeader />} footer={<Footer />}>
      <Heading>404 Not Found</Heading>
    </PageTemplate>
  )
}

export default NotFoundPage

import { HorizontalRule } from '~/components/atoms'
import { Banner } from '~/components/molecules'
import { AppList, Footer, Navbar } from '~/components/organisms'
import { PageTemplate } from '~/components/templates'
import React from 'react'

const UtilityPage = () => (
  <PageTemplate header={<Navbar />} footer={<Footer />}>
    <Banner image="/static/images/utilityBanner.png" size="300px" />
    <HorizontalRule />
    <AppList
      apps={[
        { src: '/static/images/gameOfLife.png', route: 'gameOfLife' },
        { src: '/static/images/markdown.png', route: 'markdown' },
        { src: '/static/images/simon.png', route: 'simon' },
      ]}
    />
  </PageTemplate>
)

export default UtilityPage

import { Hero } from 'components/organisms'
import { graphql } from 'gatsby'
import * as React from 'react'
import { MainLayout } from 'components/templates'
import { IIndexPageProps } from 'interfaces'

import 'styles/semantic.min.css'
import 'styles/global.css'

// import { Button } from 'semantic-ui-react'

// import { forceImg } from '@images/force.png'
// import tradeshowImg from '@images/tradeshow.png'
// import weatherImg from '@images/weather.png'
// import gameOfLifeImg from '@images/gameOfLife.png'

const Index: React.SFC<IIndexPageProps> = ({ data }) => {
  console.log('data', data)
  return (
    <MainLayout>
      <div>hi</div>
      <Hero fixed={data.headshot.childImageSharp.fixed} />
    </MainLayout>
  )
}

// const Index = () => <div>hello</div>

export default Index

// const Index: React.SFC = ({ data, ...props }) => (
//   <React.Fragment>
//     <Hero resolutions={data.headshot.resolutions} />
//     <div>hello</div>
//     <ProjectHeader
//       absolute
//       image={tradeshowImg}
//       header="A blazingly fast static site built upon stable modern technologies like React and Firebase with a goal to simplify the trade show management process"
//       linkText="Live Tradeshow App"
//       href="https://tradeshow-floorplan.firebaseapp.com/lb/"
//     />
//     <ProjectHeader
//       image={gameOfLifeImg}
//       header="A cool collection consisting of simple game projects and utilities like a Markdown previewer..."
//       linkText="Gaming & Utility Projects"
//       href="utilityApps"
//       flip
//     />
//     <ProjectHeader
//       image={weatherImg}
//       header="An interesting group of API projects that span from a Pinterest recipe box to syndicating the coolest channels on Twitch..."
//       linkText="API Projects"
//       href="apiApps"
//     />
//     <ProjectHeader
//       image={forceImg}
//       header="A dynamic collection of D3 projects implementing cutting edge data visualization technology..."
//       linkText="D3 Projects"
//       href="d3Apps"
//       flip
//     />
//   </React.Fragment>
// )

export const query = graphql`
  {
    headshot: file(relativePath: { regex: "/headshot/" }) {
      childImageSharp {
        fixed(width: 75) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`

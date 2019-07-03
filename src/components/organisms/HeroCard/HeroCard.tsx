import { Flex, Heading, P } from '@/components/atoms'
import { media, styled } from '@/style'
import * as React from 'react'
import Typist from 'react-typist'
import Astronaut from './Astronaut'
import CardBlob from './CardBlob'
import Rocket from './Rocket'
import { SyntaxCtn } from './styles'

const CardWrapper = styled.div`
  position: relative;
  height: 71.4vw;
  width: 100vw;
  z-index: 1;
`

const HeadingWrapper = styled.div`
  @media (min-width: 40em) and (max-width: 62em) {
    .heading {
      font-size: 1.8em;
    }
  }

  ${media.desktop`
    .heading {
      font-size: 4vw;
    }
  `};
`

const HeadingsLeft = styled(HeadingWrapper)`
  padding: 25vw 0 0 5vw;

  ${media.tablet`
    max-width: 50%;
  `};
`

const HeadingsRight = styled(HeadingWrapper)`
  height: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1vw 15vw 0 50vw;
  max-width: 100%;

  @media (max-width: 75em) {
    padding-right: 7vw;
    font-size: 0.5em;
  }
`

export const HeroCard = ({ y }) => {
  const ref = React.useRef(null)

  const pixelsFromTop = React.useMemo(
    () => (ref.current ? ref.current.getBoundingClientRect().height : 0),
    [ref.current]
  )

  const percentageFromTop = pixelsFromTop === 0 ? 0 : y / pixelsFromTop

  console.log('pixelsFromTop', y, pixelsFromTop, percentageFromTop)

  return (
    <section>
      <Astronaut percentageFromTop={percentageFromTop} />

      <CardWrapper>
        <CardBlob />

        <HeadingsLeft>
          <Heading color="#BEC4C8" level={1}>
            Ryan Garant "r2"
          </Heading>

          <Heading level={2}>Full Stack JS Web Dev</Heading>
        </HeadingsLeft>
      </CardWrapper>

      <CardWrapper>
        <CardBlob left ref={ref} />

        <HeadingsRight>
          <Flex alignItems="flex-end">
            <div>
              <Heading level={1}>Journey</Heading>

              <Heading color="#BEC4C8" level={2}>
                to Tech
              </Heading>
            </div>

            <Rocket />
          </Flex>

          <SyntaxCtn>
            <Typist>
              <span key={1} className="orange">
                &#40;
              </span>
              <span key={2} className="green">
                Path
              </span>
              <span key={3} className="orange">
                &#41;
              </span>
              <span key={4} className="pink">
                &nbsp;&rArr;&nbsp;
              </span>
              <span key={5} className="cyan">
                Finance
              </span>
              <span className="pink">&nbsp;&rArr;&nbsp;</span>
              <span key={6} className="cyan">
                Real Estate
              </span>
              <span key={7} className="pink">
                &nbsp;&rArr;&nbsp;
              </span>
              <span key={8} className="purple">
                React + Node.js
              </span>
            </Typist>
          </SyntaxCtn>

          <P>
            With roots in Finance & Real Estate, I discovered the joy of solving real business
            problems with code.
          </P>

          <P>
            Since then, I have been voraciously studying JavaScript, computer science, and modern
            tools in the web development space.
          </P>

          <P>
            Overall, I'm about serving others, software performance, long-term scalability, team
            success, balancing stakeholder ambitions with business goals, & writing code with a
            smile on my face :)
          </P>
        </HeadingsRight>
      </CardWrapper>
    </section>
  )
}

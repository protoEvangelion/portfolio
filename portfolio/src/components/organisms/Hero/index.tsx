// import { Avatar, Block, Text as Paragraph } from 'components'
// import { SocialBtns } from 'components'
import { Avatar } from 'components/atoms'
import * as React from 'react'
// import styled from 'styled-components'
// import { palette } from 'styled-theme'

// const Text = styled(Paragraph)`
//   color: ${palette('grayscale', 0)};
//   max-width: 800px;
//   font-weight: 300;
//   font-size: 1.35rem;
//   line-height: 1.35em;
//   letter-spacing: 0.07em;
//   @media screen and (max-width: 640px) {
//     font-size: 1rem;
//   }
// `

export const Hero = ({ resolutions }) => (
  <div>
    <Avatar resolutions={resolutions} />
  </div>
)

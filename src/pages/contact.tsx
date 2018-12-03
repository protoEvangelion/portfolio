import * as React from 'react'
import galaxy from '@/assets/galaxy.jpg'
import { styled, media } from '@/style'

const Img = styled.div`
  background: url(${galaxy}) no-repeat center center fixed;
  background-size: cover;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    position: fixed;
    bottom: 5rem;
    left: 50%;
    transform: translateX(-50%);

    ${media.tablet`
      bottom: 1rem;
      right: 1rem;
      left: unset;
      transform: translateX(0);
    `};
  }
`

const Email = styled.div`
  background: white;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(0);
  transition: transform 0.5s;
  padding: 5rem;
  max-width: 90%;

  &:hover {
    transform: translateY(-30px);
  }

  ${media.giant`
    padding: 10rem;
  `};
`

const ContactPage = () => (
  <Img>
    <Email>
      <h4>ryantgarant@gmail.com</h4>
    </Email>

    <a href="https://www.freepik.com/free-vector/lovely-galaxy-background-with-flat-design_2859825.htm">
      Link to illustration
    </a>
  </Img>
)

export default ContactPage

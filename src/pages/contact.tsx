import * as React from 'react'
import galaxy from '@/assets/galaxy.jpg'
import { styled } from '@/style'

const Img = styled.div`
  background: url(${galaxy}) no-repeat center center fixed;
  background-size: cover;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
`

const ContactPage = () => (
  <Img>
    <Email>
      <h4>ryantgarant@gmail.com</h4>
    </Email>
  </Img>
)

export default ContactPage

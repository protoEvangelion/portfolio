import React from 'react'
import styled from 'styled-components'
import Particles from 'react-particles-js'
import { Link } from 'react-router-dom'
import Radium from 'radium'
import SocialBtns from './SocialBtns'
import config from './particlesjs-config.json'

const Container = styled.div`
  width: 100%;
  padding: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Headshot = styled.img`
  margin-left: -5px;
`

const Info = styled.h5`
  color: white;
`

const ParticleBoard = styled(Particles)`
  background: #000428;
  background: linear-gradient(to left, #000428 , #004e92);
  position: absolute;
  top: 0;
  left: 0;ParticleBoard
`

let Banner = () => {
  return (
    <div>
      <Container>
        <ParticleBoard
          width={'100%'}
          params={config}
        />
        <div className="ih-item circle effect1">
          <Link to="">
            <div className="spinner" />
            <div className="img">
              <Headshot
                src={require('./head.png')}
                alt="head shot"
              />
            </div>
            <div className="info">
              <div className="info-back">
                <h3>Ryan Garant</h3>
                <Info>Full Stack Web Dev</Info>
              </div>
            </div>
          </Link>
        </div>
        <SocialBtns />
      </Container>
    </div>
  )
}

export default Banner = Radium(Banner)

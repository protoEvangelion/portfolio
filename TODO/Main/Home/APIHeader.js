import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 75px 0 75px 0;
  @media (max-width: 758px) {
    flex-direction: column;
  }
`

const Block = styled.div`
  margin-top: 20px;
  max-width: 50%;
  text-align: center;
`

const Header = styled.h5`
  font-family: "Coda", cursive;
  font-size: 1.7em;
`

const APIHeader = () => {
  return (
    <section id="apiProjects" className="animated fadeInLeft">
      <Container>
        <div className="ih-item square effect4">
          <Link to="weather">
            <div className="img">
              <img src={require('../Projects/images/weather.png')} alt="img" />
            </div>
            <div className="mask1" />
            <div className="mask2" />
            <div className="info">
              <h3>Cool weather API forecaster</h3>
              <p>Geolocation forecasts!</p>
            </div>
          </Link>
        </div>
        <Block>
          <Header>A fun collection of API projects that span from building a Pinterest recipe box to viewing the coolest channels on Twitch...</Header>
          <br />
          <Link to="apiProjects">
            <p>View my API Projects</p>
          </Link>
        </Block>
      </Container>
    </section>
  )
}

export default APIHeader

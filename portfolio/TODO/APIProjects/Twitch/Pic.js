import React from 'react'
import styled from 'styled-components'
import Radium from 'radium'

let styles = {
  height: 'auto',
  float: 'left',
  display: 'inline-block',
  borderTop: 0,
  paddingTop: 0,
  marginTop: 0,
  marginRight: '15px',
  minHeight: '150px',
  minWidth: '269.33px',
  maxWidth: '269.33px',
  maxHeight: '150px'
}

let Pic = (props) => {
  return (
    <img className="img-responsive" src={props.src} alt={props.alt} style={styles}/>
  )
}

export default Pic = Radium(Pic)

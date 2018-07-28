import React from 'react'
import Radium from 'radium'

const styles = {
  container: {
    zIndex: 9999,
		marginTop: '35px',
    marginBottom: '-30px',
  },
  btn: {
    padding: '0 10px 0 10px',
    color: 'white',
    ':hover': {
      cursor: 'pointer',
      color: '#00ffc0'
    }
  }
}

let SocialBtns = () => {
  return (
    <div style={styles.container}>
      <a href="http://stackoverflow.com/users/story/6502003">
        <i key="stackoverflowBtn"
          className="fa fa-stack-overflow fa-2x"
          aria-hidden="true"
          style={styles.btn}>
        </i>
      </a>
      <a href="https://github.com/protoEvangelion">
        <i key="githubBtn"
          className="fa fa-github fa-2x"
          aria-hidden="true"
          style={styles.btn}>
        </i>
      </a>
      <a href="https://www.freecodecamp.com/protoevangelion">
        <i key="freecodecampBtn"
          className="fa fa-free-code-camp fa-2x"
          aria-hidden="true"
          style={styles.btn}>
        </i>
      </a>
    </div>
  )
}

export default SocialBtns = Radium(SocialBtns)

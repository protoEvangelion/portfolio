import React from 'react'
import Radium from 'radium'

const styles = {
  area: {
    display: 'inline-block',
    width: '50%',
    height: '90%',
    borderRadius: '0',
    paddingTop: '10px',
    resize: 'none',
  }
}

let TextArea = ({onInputChange, markdown}) => {
  return(
    <textarea
      style={styles.area}
      className="form-control"
      value={markdown}
      onChange={(e) => onInputChange(e)}></textarea>
  )
}

TextArea.propTypes = {
  onInputChange: React.PropTypes.func.isRequired,
  markdown: React.PropTypes.string.isRequired
}

export default TextArea = Radium(TextArea)

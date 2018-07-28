import React from 'react'
import Radium from 'radium'

// TODO: import './style.css'

let Toggle = ({turnOnOff}) => {
  return (
    <div>
      <div className="toggle toggle--switch">
        <input type="checkbox" id="toggle--switch" className="toggle--checkbox" onClick={() => turnOnOff()}/>
        <label className="toggle--btn" htmlFor="toggle--switch"><span className="toggle--feature" data-label-on="on"  data-label-off="off"></span></label>
      </div>
    </div>
  )
}

Toggle.propTypes = {
  turnOnOff: React.PropTypes.func.isRequired,
}

export default Toggle

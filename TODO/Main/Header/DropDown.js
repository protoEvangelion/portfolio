import React from 'react'
import Radium from 'radium'

const styles = {
  btn: {
		padding: '0',
  }
}

let DropDown = () => {
  return (
		<i className="fa fa-caret-square-o-down" aria-hidden="true"></i>
  )
}

// App.propTypes = {
//   prop: React.PropTypes.func.isRequired,
// }

export default DropDown = Radium(DropDown)

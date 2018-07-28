import React, {Component} from 'react'
import Box from './Box'
import smoothScroll from '../../../helpers/scroll'


class RecipeBox extends Component {
  componentDidMount() {
		smoothScroll(document.getElementById("recipeBoxContainer"))
  }
  render() {
    return (
      <div id="recipeBoxContainer" style={{marginBottom: '250px'}}>
        <Box />
      </div>
    )
  }
}

export default RecipeBox

import React from 'react'
import Radium from 'radium'
import Collapse from 'react-collapse'
import EditRecipe from './EditRecipe'

const styles = {
  container: {
    margin: '0 auto',
    textAlign: 'center',
  },
  ingredientsContainer: {
    display: 'inline-block',
    margin: '10px 20px'
  },
  default: {
    fontFamily: "'Grand Hotel', cursive",
    color: 'black',
    fontSize: '3em'
  },
  header: {
    lineHeight: '100%',
    color: 'white',
    fontSize: '2em',
    background: '#16f9ae',
    padding: '5px',
    marginTop: '10px',
    fontFamily: "'Coiny', cursive",
    cursor: 'pointer',
    outline: 'none',
  },
  icon: {
    marginTop: '-45px',
    marginRight: '10px',
    float: 'right',
    display: 'block',
    color: 'red',
  }
}

let color1 = 'rgb(255, 179, 71)'
let color2 = 'rgb(255, 204, 51)'
let background={
	background: color1,
	background: `webkit-linear-gradient(to left, ${color1} , ${color2})`,
	background: `linear-gradient(to left, ${color1} , ${color2})`
}

let Recipes = ({recipes, collapse, expand, deleteRecipe, editRecipe}) => {
  const clickHandler = (i) => {
    recipes[i]['expanded'] === false ? collapse(i) : expand(i)
  }
  return (
    <div>
      <h4 style={styles.default}>Default Recipes: </h4>
      {recipes.map((recipe, i) => {
        return (
          <div
            key={'container' + recipe.title}
            style={styles.container}>
            <h4
              value={i}
              onClick={clickHandler.bind(this, i)}
              style={[styles.header, background]}
              key={'header' + recipe.title}
              >
              {recipe.title}
            </h4>
            <i
              style={styles.icon}
              className="fa fa-times fa-2x"
              aria-hidden="true"
              onClick={() => deleteRecipe(recipe.title)}>
            </i><br/>
            <Collapse key={'collapse' + recipe.title} isOpened={recipe.expanded}>
              <div style={styles.ingredientsContainer} key={'container' + recipe.title}>
                <EditRecipe
                  editRecipe={editRecipe}
                  recipe={recipe}
                  index={i}/>
                <table
                  className="table table-hover"
                  key={'table' + recipe.title}
                  id={'table' + recipe.title}
                  >
                  <thead key={'tablehead' + recipe.title}>
                    <tr key={'tablerow' + recipe.title}>
                      <th key={'measure' + recipe.title}>Ingredients</th>
                      <th key={'ingredient' + recipe.title}>Measurements</th>
                    </tr>
                  </thead>
                  <tbody key={'tablebody' + recipe.title}>
                    {recipe.ingredients.map((ingredient, i) => {
                      return (
                        <tr
                          key={'row' + i + recipe.title}
                          className={i % 2 === 0 ? "table-info" : ""}>
                          <td key={recipe.title + ingredient.name}>
                            {ingredient.name}
                          </td>
                          <td key={recipe.title + ingredient.measurement}>
                            {ingredient.measurement}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </Collapse>
          </div>
        )
      })}
    </div>
  )
}

Recipes.propTypes = {
  recipes: React.PropTypes.array.isRequired,
  collapse: React.PropTypes.func.isRequired,
  expand: React.PropTypes.func.isRequired,
  deleteRecipe: React.PropTypes.func.isRequired,
  editRecipe: React.PropTypes.func.isRequired,
}

export default Recipes = Radium(Recipes)

import React, {Component} from 'react'
import Radium from 'radium'

const styles = {
  container: {
    margin: '0 auto 30px auto',
  },
  well: {
    marginTop: '10px',
    padding: '20px',
    background: '#eff0f2',
    textAlign: 'left',
    borderRadius: '10px',
    boxShadow: 'inset 2px 2px 1px rgba(0,0,0,.05)',
  },
  text: {
    fontFamily: "'Grand Hotel', cursive",
    fontSize: '1.5em',
    marginBottom: '-10px'
  },
  btn: {
    cursor: 'pointer',
    margin: '-10px 0 10px 0',
    display: 'inline-block',
  },
  formBtn: {
    cursor: 'pointer',
    margin: '10px',
    outline: 'none',
  }
}

class EditRecipe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: false,
      count: this.props.recipe.ingredients.length,
      recipe: this.props.recipe,
      index: this.props.index,
    }
  }
  handleNameChange(e) {
    const value = e.target.value
    const recipe = this.state.recipe
    recipe.title = value
    this.setState({recipe})
  }
  handleIngredientChange(e, i) {
    const target = e.target
    const value = target.value
    const name = target.name

    let recipe = this.state.recipe
    recipe.ingredients[i] = Object.assign({}, recipe.ingredients[i], {[name]: value})

    this.setState({ recipe })
  }
  incrementCount() {
    let recipe = this.state.recipe
    recipe.ingredients.push({
      name: '',
      measurement: ''
    })
    this.setState({
      count: this.state.count + 1,
      recipe
    })
  }
  decrementCount() {
    if(this.state.count > 1) {
      let recipe = this.state.recipe
      recipe.ingredients.pop()
      this.setState({
        count: this.state.count - 1,
        recipe
      })
    }
  }
  renderCount() {
    let arr = this.state.recipe.ingredients

    return arr.map((ingredient, i) => {
      return (
        <div key={'container' + i}>
          <label key={'ingredientHeader' + i}>Ingredient Name #{i+1}</label>
          <input
            key={'ingredientName' + i}
            type="text"
            className="form-control"
            name="name"
            onChange={(e) => this.handleIngredientChange(e, i)}
            defaultValue={ingredient.name}/>
          <label key={'amountHeader' + i}>Amount / Quantity</label>
          <input
            key={'amountName' + i}
            type="text"
            className="form-control"
            name="measurement"
            onChange={(e) => this.handleIngredientChange(e, i)}
            defaultValue={ingredient.measurement}
          />
        </div>
      )
    })
  }
  showForm() {
    this.setState({form: !this.state.form})
  }
  renderForm() {
    let form = this.state.form === false
      ? ''
      : (
        <form style={styles.well}>
          <div className="form-group">
            <label>Recipe Name</label>
            <input
              type="text"
              className="form-control"
              name="recipeName"
              placeholder="Enter name"
              defaultValue={this.state.recipe.title}
              onChange={(e) => this.handleNameChange(e)}/>
            {this.renderCount()}
          </div>
          <div style={styles.container}>
            <p style={styles.text}>Add or Remove another ingredient: </p>
            <button
              style={styles.formBtn}
              type="button"
              className="btn btn-primary"
              onClick={this.incrementCount.bind(this)}
              >
              +
            </button>
            <button
              style={styles.formBtn}
              type="button"
              className="btn btn-primary"
              onClick={this.decrementCount.bind(this)}
              >
              -
            </button>
          </div>
          <button
            style={styles.formBtn}
            type="button"
            className="btn btn-primary"
            onClick={() => this.submitHandler()}>Submit</button>
        </form>
      )
    return form
  }
  submitHandler() {
    let recipe = this.state.recipe
    recipe.expanded = true
    this.props.editRecipe(recipe, this.props.index)
    this.setState({form: false})
  }
  render() {
    return(
      <div>
        <button style={styles.btn} className="btn btn-info" onClick={this.showForm.bind(this)}>
          Edit Recipe
        </button>
        {this.renderForm()}
      </div>
    )
  }
}

export default EditRecipe = Radium(EditRecipe)

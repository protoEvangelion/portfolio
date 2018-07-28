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
    marginTop: '10px',
    display: 'inline-block',
    background: 'rgb(201, 34, 40)'
  },
  formBtn: {
    cursor: 'pointer',
    margin: '10px',
    outline: 'none',
  }
}

class Btn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: false,
      count: 1,
      recipeName: '',
      ingredients: []
    }
  }
  handleNameChange(e) {
    const value = e.target.value

    this.setState({ recipeName: value})
  }
  handleIngredientChange(e, i) {
    const target = e.target
    const value = target.value
    const name = target.name

    let ingredients = this.state.ingredients
    ingredients[i] = Object.assign({}, ingredients[i], {[name]: value})

    this.setState({ ingredients })
  }
  submitHandler() {
    this.props.submit(this.state.recipeName, this.state.ingredients)
    this.setState({form: false})
  }
  incrementCount() {
    this.setState({count: this.state.count + 1})
  }
  decrementCount() {
    if(this.state.count > 1) {
      this.setState({count: this.state.count - 1})
    }
  }
  renderCount() {
    let arr = Array(this.state.count).fill(0)

    return arr.map((nothingness, i) => {
      return (
        <div key={'container' + i}>
          <label key={'ingredientHeader' + i}>Ingredient Name #{i+1}</label>
          <input
            key={'ingredientName' + i}
            type="text"
            className="form-control"
            name="name"
            onChange={(e) => this.handleIngredientChange(e, i)}/>
          <label key={'amountHeader' + i}>Amount / Quantity</label>
          <input
            key={'amountName' + i}
            type="text"
            className="form-control"
            name="measurement"
            onChange={(e) => this.handleIngredientChange(e, i)}/>
        </div>
      )
    })
  }
  showForm() {
    this.setState({ form: !this.state.form })
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
  render() {
    return(
      <div>
        {this.renderForm()}
        <button style={styles.btn} className="btn btn-primary" onClick={this.showForm.bind(this)}>
          Add Recipe
        </button>
      </div>
    )
  }
}

export default Btn = Radium(Btn)

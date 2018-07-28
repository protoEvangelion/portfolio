import React, {Component} from 'react'
import Radium from 'radium'
import TextArea from './TextArea'
// TODO: import Transformed from './Transformed'
import defaultText from './defaultText'
// import './styles.css'

const styles = {
  container: {
    width: '100%',
    height: '100vh',
    position: 'relative',
  },
  label: {
    display: 'block',
    width: '100%',
    lineHeight: '100%',
    color: 'white',
    fontSize: '20px',
    background: '#00ffc0',
    marginBottom: '0',
    padding: '20px',
    fontFamily: "'Grand Hotel', cursive",
    fontSize: '3em',
    textAlign: 'center',
  },
}

class Markdown extends Component {
  constructor(props) {
    super(props)

    this.state = {
      markdown: defaultText
    }
    this.onInputChange = this.onInputChange.bind(this)
  }
  onInputChange(e) {
    this.setState({markdown: e.target.value})
  }
  render() {
    return(
      <div id="markdownContainer" style={styles.container}>
        <label style={styles.label} htmlFor="exampleTextarea">Type markdown below</label>
        <TextArea onInputChange={this.onInputChange} markdown={this.state.markdown}/>
        {/* <Transformed markdown={this.state.markdown} /> */}
      </div>
    )
  }
}

export default Markdown = Radium(Markdown)

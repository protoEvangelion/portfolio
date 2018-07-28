import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class PumpBtn extends Component {
  constructor(props) {
    super(props)
    this.state = {isLoading: false}
 		this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({isLoading: true});
    this.props.fetch()
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 2000);
  }
  render() {
    let isLoading = this.state.isLoading;
    return (
      <Button
        style={{margin: '30px', cursor: 'pointer'}}
        bsSize="large"
        bsStyle="primary"
        disabled={isLoading}
        onClick={!isLoading ? this.handleClick : null}>
        {
          (isLoading)
              ?  <i className="fa fa-spinner fa-pulse" aria-hidden="true"></i>
              : 'Pump Quote'
         }
      </Button>
    )
  }
}

import React, {Component} from 'react'
import Radium from 'radium'
import ContactForm from './ContactForm'
import Success from './Success'
import Failure from './Failure'
import Recaptcha from 'react-grecaptcha'
import axios from 'axios'
import proxyUrl from '../../../api'

const styles = {
  container: {
		display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '100px',
  },
  header: {
    marginBottom: '50px',
    fontFamily: 'Rock Salt'
  },
  form: {
    minWidth: '50%'
  }
}

class Contact extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: 'no',
      firstName: '',
      email: '',
      mailgunMessage: '',
		}
	}
	handleSubmit(values) {
    console.log('handling', values)
    this.setState({
      loading: 'captcha',
      firstName: values.firstName,
      email: values.email,
      mailgunMessage: values.message
    })
  }
  nextStage(payload) {
    //shows success or failure
    console.log('payload', payload)
    this.setState({loading: 'waiting'}, () => {
      const message = this.state.mailgunMessage.replace(/ /g,"%20")
      const url = 'mailgunMessage=' + message
      axios.get(proxyUrl, {
          params: {
            firstName: this.state.firstName,
            email: this.state.email,
            mailgunMessage: message,
            payload: payload
          }
        })
        .then((res) => {
          res.data === 'success'
            ? this.setState({loading: 'success'})
            : this.setState({loading: 'failure'})
          console.log('here"s the response', res)
        })
        .catch((err) => console.log('here"s the error', err))
    })
  }
  renderContent() {
    if(this.state.loading === 'no') {
      return (
        <div>
          <h2 style={styles.header}>You Can Ping Me Below :)</h2>
          <ContactForm onSubmit={this.handleSubmit.bind(this)}/>
        </div>
      )
    } else if(this.state.loading === 'captcha') {
        return (
          <Recaptcha
            sitekey="6Le_nhcUAAAAAB0R3QbGXN7Bu14LvJPihAkiYqtP"
            callback={this.nextStage.bind(this)}/>
        )
    } else if(this.state.loading === 'waiting') {
        return (
          <i style={{color: '#33adff', marginTop: '50px'}} className="fa fa-spinner fa-pulse fa-3x" aria-hidden="true"></i>
        )
    } else if(this.state.loading === 'success'){
        return <Success />
    } else {
       return <Failure />
    }
  }
  render () {
    return (
      <div style={styles.container}>
        {this.renderContent()}
      </div>
    )
  }
}

export default Contact = Radium(Contact)

import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form'
import Radium from 'radium'

const styles = {
  formCtn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  message: {
    minWidth: '400px',
    width: '440px',
  },
  btn: {
    marginBottom: '100px'
  }
}

class ContactForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">Name</label>
          <Field name="firstName" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="email">Email&nbsp;</label>
          <Field name="email" component="input" type="email"/>
        </div><br/>
        <div>
          <label>Message</label>
          <div>
            <Field style={styles.message} name="message" component="textarea"/>
          </div>
        </div><br/>
        <button style={styles.btn} className="btn btn-primary" type="submit">Submit</button>
      </form>
    );
  }
}

// ContactForm.propTypes = {
//   handleSubmit: React.PropTypes.func.isRequired
// }

export default reduxForm({
  form: 'simple'  // a unique identifier for this form
})(Radium(ContactForm))

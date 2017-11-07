/**
 * Created by LLGZONE on 2017/11/4.
 */
import React from 'react'
import {Link} from 'react-router-dom'
import LogInType from './LogInType'
import FormField from './FormField'

import './index.scss'

class LogIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: '',
      account: '',
      password: '',
    }
  }

  componentWillMount() {
    const type = this.props.match.params
    this.setState({type})
  }

  handleInputChange(e) {
    const target = e.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  signUp() {
    console.log(this.state.account, this.state.password)
  }

  render() {
    const type = this.props.match.params
    let to = '/';

    switch (type) {
      case 'company':
        to = '/management/company/signup'
        break
      case 'school':
        to = '/management/company/signup'
        break
      case 'person':
        to = '/person/signup'
        break
      default:
        break
    }

    return (
      <section className="login-container">
        <LogInType type={type}/>
        <FormField
          onSubmit={() => this.signUp()}
          onChange={(e) => this.handleInputChange(e)}
          to={to}
        />
      </section>
    )
  }
}

export default LogIn
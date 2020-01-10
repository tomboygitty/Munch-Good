// Standard React import to make this a React Component
import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

// THIS COMPONENT - Login form row with Username Password and submit
class Login extends React.Component {
  constructor() {
    super()
    this.state = {
        username: '',
        password: '',
        redirectTo: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

}

handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    })
}

handleSubmit(event) {
    event.preventDefault()
    console.log('handleSubmit')

    axios
        .post('/user/login', {
            username: this.state.username,
            password: this.state.password
        })
        .then(response => {
            console.log('login response: ')
            console.log(response)
            if (response.status === 200) {
                // update App.js state
                this.props.updateUser({
                    loggedIn: true,
                    username: response.data.username
                })
                // update the state to redirect to home
                this.setState({
                    redirectTo: '/welcome'
                })
            }
        }).catch(error => {
            console.log('login error: ')
            console.log(error);
        })
}


  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
        <div className="row">
        <div className="col-md-3 spacer">
        </div>
        <div className="col-md-6">
            <form id="login">
            <input type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChange} />
            <input placeholder="password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange} />
            <button type="submit"
              onClick={this.handleSubmit}> LOGIN </button>
            </form>
        </div>
        </div>

      )
    }
  }
}

export default Login;
import React from 'react'
import Axios from 'axios'

class RegisterForm extends React.Component {
    constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			email: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
        })
        console.log(this.state)
	}
	handleSubmit(event) {
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault()


		request to server to add a new username/password
		Axios.post("/user", {
			username: this.state.username,
            password: this.state.password,
            email: this.state.email
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/welcome'
					})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)
			})
    }
    
  render() {
    return (
        <>
            <div className="col-md-4 registerForm">
                <form className="border border-light p-5" action="/welcome">
                <a href="index.html"><img className="register-logo" src="img/logoNallison.png" alt="Allison the health-conscious unicorn" /></a>
                <p className="h4 mb-4 text-center">Register / Create Account</p>
                <input
                    type="text"
                    id="usernameNew"
                    name="username"
                    className="form-control mb-4"
                    placeholder="Username – what can we call you?"
                    value={this.state.username}
                    onChange={this.handleChange} />
                <input
                    type="password"
                    id="registerPass"
                    name="password"
                    className="form-control mb-4"
                    placeholder="Password – make it good!" 
                    value={this.state.password}
                    onChange={this.handleChange} />
                {/* <input type="password" id="registerPassConfirm" className="form-control mb-4" placeholder="Confirm Password – just to be sure." />
                <div className="d-flex justify-content-between">
                    <div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember" />
                        <label className="custom-control-label" htmlFor="defaultLoginFormRemember">Check this box if you're over 13.</label>
                    </div>
                    </div>
                </div>
                <br /> */}
                <input
                    type="email"
                    id="defaultLoginFormEmail"
                    name="email"
                    className="form-control mb-4"
                    placeholder="E-mail"
                    value={this.state.email}
                    onChange={this.handleChange} />
                <button
                    className="btn btn-info btn-block my-4 registerSubmit"
                    type="submit"
                    onClick={this.handleSubmit} >Register!</button>
                </form>
            </div>
        </>
    )
  }
}
export default RegisterForm
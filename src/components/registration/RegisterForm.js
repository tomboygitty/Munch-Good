import React from 'react';
import axios from 'axios';

class RegisterForm extends React.Component {
    constructor() {
		super()
		this.state = {
			username: '',
			password: '',
            confirmPassword: '',
            checkbox: false,
			email: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
        });
        console.log(this.state)
    }
    
    handleCheckbox(event) {
		this.setState({
			checkbox: event.target.checked
		})
	}
	handleSubmit(event) {
		event.preventDefault()
        console.log('sign-up-form, username: ');
        console.log(this.state.username);
        //request to server here
        if (this.state.checkbox === true) {
            if (this.state.username && this.state.password && this.state.confirmPassword && this.state.email) {
                if (this.state.password === this.state.confirmPassword) {
                    axios.post('/user/', {
                        username: this.state.username,
                        password: this.state.password,
                        email: this.state.email
                    })
                    .then(response => {
                        console.log(response)
                        if (!response.data.errmsg) {
                            console.log('successful signup')
                            this.setState({
                                redirectTo: '/welcome'
                            })
                        } else {
                                console.log('Sign-up error');	
                            }
                    }).catch(error => {
                        console.log('Sign up server error: ')
                        console.log(error);
                    })
                }
                else {
                    alert('Please make sure you have entered the password correctly.')
                }
            }
            else {
                alert('Please fill out all fields.')
            }
        }
        else {
            alert('You must be 13 years or older to use this site.');
        }
    }
    
  render() {
    return (
        <>
            <div className="col-md-4 registerForm">
                <form className="border border-light p-5" action="/welcome">
                <a href="index.html"><img className="register-logo" src="img/logoNallison.png" alt="Allison the health-conscious unicorn" /></a>
                <p className="h4 mb-4 text-center">Register / Create Account</p>
                <input type="text"
					name="username"
					value={this.state.username}
                    onChange={this.handleChange}
                    id="usernameNew"
                    className="form-control mb-4"
                    placeholder="Username – what can we call you?" />
                <input type="password"
					name="password"
					value={this.state.password}
					onChange={this.handleChange}
                    id="registerPass"
                    className="form-control mb-4"
                    placeholder="Password – make it good!" />
                <input type="password"
                	name="confirm"
                    value={this.state.confirmPassword}
                    onChange={this.handleChange}
                    id="registerPassConfirm"
                    className="form-control mb-4"
                    placeholder="Confirm Password – just to be sure." />
                <div className="d-flex justify-content-between">
                    <div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox"
                            className="custom-control-input"
                            id="defaultLoginFormRemember"
                            checked={this.state.checkbox}
                            onChange={this.handleCheckbox} />
                        <label className="custom-control-label" htmlFor="defaultLoginFormRemember">Check this box if you're over 13.</label>
                    </div>
                    </div>
                </div>
                <br />
                <input type="email"
                	name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    id="defaultLoginFormEmail"
                    className="form-control mb-4"
                    placeholder="E-mail" />
                <button className="btn btn-info btn-block my-4 registerSubmit"
                    type="submit"
                    onclick={this.handleSubmit}>Register!</button>
                </form>
            </div>
        </>
    )
  }
}
export default RegisterForm
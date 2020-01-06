import React from 'react'

class Team extends React.Component {
  render() {
    return (
        <>
            <div className="col-md-4 registerForm">
                <form className="border border-light p-5">
                <a href="index.html"><img className="register-logo" src="img/logoNallison.png" alt="Allison the health-conscious unicorn" /></a>
                <p className="h4 mb-4 text-center">Register / Create Account</p>
                <input type="text" id="usernameNew" className="form-control mb-4" placeholder="Username – what can we call you?" />
                <input type="password" id="registerPass" className="form-control mb-4" placeholder="Password – make it good!" />
                <input type="password" id="registerPassConfirm" className="form-control mb-4" placeholder="Confirm Password – just to be sure." />
                <div className="d-flex justify-content-between">
                    <div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember" />
                        <label className="custom-control-label" htmlFor="defaultLoginFormRemember">Check this box if you're over 13.</label>
                    </div>
                    </div>
                </div>
                <br />
                <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="E-mail" />
                <button className="btn btn-info btn-block my-4 registerSubmit" type="submit">Register!</button>
                </form>
            </div>
        </>
    )
  }
}
export default Team
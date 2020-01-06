// Standard React import to make this a React Component
import React from 'react';

// THIS COMPONENT - Login form row with Username Password and submit
class Login extends React.Component {
  render() {
    return (
        <div className="row">
        <div className="col-md-3 spacer">
        </div>
        <div className="col-md-6">
            <form id="login">
            <input placeholder="Username" />
            <input placeholder="Password" />
            <button type="submit"> LOGIN </button>
            </form>
        </div>
        </div>

    )
  }
}

export default Login;
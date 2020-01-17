// Standard React import to make this a React Component
import React from 'react';
import $ from 'jquery';

// THIS COMPONENT - Login form row with Username Password and submit
class Login extends React.Component {

  render() {
    return (
        <div className="row">
        <div className="col-md-3 spacer">
        </div>
        <div className="col-md-6">
            <form id="login" action="/welcome">
            <input id="usernameLS" placeholder="Username" />
            <input id="passwordLS" type="password" placeholder="Password" />
            <button type="submit"> LOGIN </button>
            </form>
        </div>
        </div>

    )
  }
  componentDidMount() {

    $('#login button').on('click', function(){
        let usernameLS = document.getElementById("usernameLS").value
        let passwordLS = document.getElementById("passwordLS").value
        localStorage.setItem('UserName', usernameLS)
        localStorage.setItem('Password', passwordLS)
    })

    
  }
}

export default Login;
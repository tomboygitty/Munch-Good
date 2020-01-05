import React from 'react'
// Components
import Login from '../../components/Login'
import Register from '../../components/home/Register'

class Rainbow extends React.Component {
  render() {
    return (
        <>
          <div className="col-md-12 rainbow">
            <div className="row">
              <div className="col-md-4">
                <img className="allison-logo" src={require('./../../img/logo.png')} alt="Allison, the health-conscious, marginally annoying unicorn" />
              </div>
              <div className="col-md-4 spacer">
                {/* spacer */}
              </div>
              <Register />
            </div>
            <Login />
          </div>
        </>
    )
  }
}
export default Rainbow
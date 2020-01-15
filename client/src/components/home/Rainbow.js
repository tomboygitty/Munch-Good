import React from 'react'
// Components
import Login from './Login'
import Register from './Register'
import Spacer4 from '../shared/Spacer4'

class Rainbow extends React.Component {
  render() {
    return (
        <>
          <div className="col-md-12 rainbow">
            <div className="row">
              <div className="col-md-4">
                <img className="allison-logo" src={require('./../../img/logo.png')} alt="Allison, the health-conscious, marginally annoying unicorn" />
              </div>
              <Spacer4 />
              <Register />
            </div>
            <Login />
          </div>
        </>
    )
  }
}
export default Rainbow
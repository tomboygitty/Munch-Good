// Standard React import to make this a React Component
import React from 'react';
import Radial from './shared/Radial';
import RegisterForm from './registration/RegisterForm';
import MainNav from './shared/MainNav';
import Footer from './shared/Footer';

// THIS COMPONENT - Register / Account Creation page
class Registration extends React.Component {
  render() {
    return (
        <>
          <div>
            <Radial />
            <div className="container-fluid appBody">
              <MainNav />
              <div className="row">
                <div className="col-md-4">
                  {/* spacer */}
                </div>
                <RegisterForm />
                <div className="col-md-4">
                  {/* spacer */}
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </>
    )
  }
}

export default Registration;
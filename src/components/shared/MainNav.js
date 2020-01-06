import React from 'react';


class MainNav extends React.Component {
  render() {
    return (
        <div className="row logo-row">
            <div className="col-md-4">
              {/* spacer */}
            </div>
            <div className="col-md-4">
              <a href="/">
                <img className="small-logo" src={require('./../../img/logo.png')} alt="Allison the Health-conscious Unicorn" />
              </a>
            </div>
            <div className="col-md-4">
              {/* spacer */}
            </div>
        </div>
    )
  }
}

export default MainNav;




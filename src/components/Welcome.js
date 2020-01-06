import React from 'react'

import Radial from './shared/Radial'
import Spacer4 from './shared/Spacer4'
import Footer from './shared/Footer'

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <Radial />
        <div className="container-fluid appBody welcomeBkgrd">
          <div className="row">
            <Spacer4 />
            <div className="col-md-4">
              <a href="/">
                <img className="small-logo" src="img/logo.png" alt="Allison the Health-conscious Unicorn" />
              </a>
              <div className="row welcomeBtns">
                <div className="col-md-6 play-btn">
                  <a href="/play">
                    <h1>let's<br />play!</h1>
                  </a>
                </div>
                <div className="col-md-6 my-btn">
                  <a href="/welcome">
                    <h1>my<br />profile!</h1>
                  </a>
                </div>
                <div className="col-md-6 healthy-btn">
                  <a href="/welcome">
                    <h1>healthy<br />tips!</h1>
                  </a>
                </div>
                <div className="col-md-6 story-btn">
                  <a href="story.html">
                    <h1>Allison's<br />story!</h1>
                  </a>
                </div>
              </div>
            </div>
            <Spacer4 />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default Welcome
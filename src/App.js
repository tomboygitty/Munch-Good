import React from 'react';
import './App.css';
import Users from './components/Users'
import Contact from './components/Contact'
import {Route, BrowserRouter, Link}from 'react-router-dom';

class App extends React.Component {

  componentDidMount() {
    //const refreshRate = 1000 / 60;
    const maxXPosition = 180;
    let rect = document.getElementById('radial');
    let speedX = 1 / 10;
    let positionX = 0;
    function step() {
      positionX = positionX + speedX;
      if (positionX > maxXPosition || positionX < 0) {
        speedX = speedX * (-1);
      }
      rect.style.transform = 'rotate(' + positionX + 'deg)';
      window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }
  
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={Users} />
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
          <link rel="stylesheet" type="text/css" href="style.css" />
          <link href="https://fonts.googleapis.com/css?family=Poppins:500,800&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:700&display=swap" rel="stylesheet" />
          <title>Document</title>
          <div className="primaryBkgrd">
            <img id="radial" src={require('./img/radial.png')} alt="radial" />
          </div>
          <div className="container-fluid appBody">
            <div className="container-fluid rainbow">
              <div className="row">
                <div className="col-md-4">
                  <img className="allison-logo" src={require('./img/logo.png')} alt="Allison, the health-conscious, marginally annoying unicorn" />
                </div>
                <div className="col-md-4 spacer">
                  {/* spacer */}
                </div>
                <div className="col-md-4 register">
                  <h1>
                    <span className="h1blackDescriptive text-only">An App for Teaching</span>
                    <span className="h1kids">kids</span>
                    <span className="h1about">about</span>
                    <span className="h1handw">health <br className="mbl-only" />+<br className="mbl-only" /> wellness</span>
                  </h1>       
                  <br />    
                
                   <Link to='/portfolio'><button>REGISTER!<br/><span class="askParent">kids, ask a parent!</span></button></Link>
                   
                
                </div>
              </div>
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
            </div>
          </div>
          <div className="appFooter">
            <p className="footerLinks" id="arcText">
              developed by <Link to='/portfolio'><b>team</b>awesomest</Link>| view the <Link to='/portfolio'>github repo</Link>
            </p>
          </div>
           </BrowserRouter>
        </div>
    );
  }
}

export default App;

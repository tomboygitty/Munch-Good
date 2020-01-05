import React from 'react'
import FoodList from './data/FoodList'

import '../src/index.css';
import './css/App.css';
import './css/bootstrap.css';
import './css/fonts.css';


class Play extends React.Component {
  
  render() {    
    return (
      <div>
        <div className="primaryBkgrd">
          <img id="radial" src={require('./img/radial.png')} alt="fun radial animation" />
        </div>
        <div className="container-fluid appBody welcomeBkgrd">
          <div className="row logo-row">
            <div className="col-md-4">
              {/* spacer */}
            </div>
            <div className="col-md-4">
              <a href="index.html">
                <img className="small-logo" src={require('./img/logo.png')} alt="Allison the Health-conscious Unicorn" />
              </a>
            </div>
            <div className="col-md-4">
              {/* spacer */}
            </div>
          </div>
          {/* PLAY BODY --------------------------------------------------------------------- */}
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4 interactive">
                {/* THIS DIV IS USED TO HOUSE THE APP BUTTONS (SEE DOMJS.JS) */}
                <FoodList key="0" />
              </div>
              <div className="col-md-4 actionWrap">
                <h3>You just fed Allison: <br /><span className="foodEaten" /></h3>
                <h4>It's provides a boost to <br /> <span className="mainMacro" /></h4>
                {/* spacer ------------------------------------------------- */}                    
              </div>
              <div className="col-md-4 stats">
                <h1>Current Mood: <span id="mood" /> Riffic!</h1>
                <h2>Stats</h2>
                <div className="macroStats column">
                  <div className="col-md-12 carbStat">
                    <div className="carbMeter">
                    </div>
                  </div>
                  <div className="col-md-12 proStat">
                    <div className="proMeter" />
                  </div>
                  <div className="col-md-12 fatStat">
                    <div className="fatMeter" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="appFooter">
          <p className="footerLinks" id="arcText">
            developed by <b>team</b>awesomest| view the github repo
          </p>
        </div>
        <audio id="chimeSound">
          <source src="mp3/Magic Wand Noise-SoundBible.com-375928671.mp3" type="audio/mpeg" />
        </audio>
      </div>
    );
  }
}

export default Play
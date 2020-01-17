import React from 'react'

import Radial from './shared/Radial'
import Footer from './shared/Footer'

import $ from 'jquery';
import MainNav from './shared/MainNav';

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <Radial />
        <div className="container-fluid appBody welcomeBkgrd">
          <div className="row">
            <MainNav />
          </div>
          <div className="row">
            <div className="col-md-4">
            </div>
            <div className="col-md-4 username">
                <h2>Username</h2>
                <h3>{localStorage.getItem('UserName')}'s muncher has eaten <br/><span className="calories"></span> total energy units!</h3>
                <h3><span className="carbs"></span>% <br />of Allison's diet is bread, sugar, and starch</h3>
                <h3><span className="protiens"></span>% <br />of Allison's diet is meat, nuts, or grain</h3>
                <h3><span className="fats"></span>% <br />of Allison's diet kinda greasy</h3>
            </div>
            <div className="col-md-4">
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  componentDidMount() {
    let uname = localStorage.getItem('UserName')
    let ucarbs = localStorage.getItem('Carbs')
    let ufats = localStorage.getItem('intFat')
    let upros = localStorage.getItem('Protien')
    let ucals = ( parseInt(ucarbs) + parseInt(upros) + parseInt(ufats) )
    let perCarbs = Math.floor( (parseInt(ucarbs) / ucals) * 100 )
    let perProtiens = Math.floor( (parseInt(upros) / ucals) * 100)
    let perFats = Math.floor( (parseInt(ufats) / ucals) * 100)
    $('.calories').html(ucals);
    $('.username h2').html(uname)
    $('.carbs').html(perCarbs);
    $('.protiens').html(perProtiens);
    $('.fats').html(perFats);
  }

}
export default Welcome
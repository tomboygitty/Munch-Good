import React from 'react'

import MainNav from './shared/MainNav';
import Radial from './shared/Radial'
import Footer from './shared/Footer'

import $ from 'jquery';

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
                <h3><span className="carbs"></span> <br />of Allison's diet is bread, sugar, and starch</h3>
                <h3><span className="protiens"></span> <br />of Allison's diet is meat, nuts, or grain</h3>
                <h3><span className="fats"></span> <br />of Allison's diet kinda greasy</h3>
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
     
      let uname = localStorage.getItem('UserName');
      let ucarbs = localStorage.getItem('CumCarbs');
      let ufats = localStorage.getItem('CumFat');
      let upros = localStorage.getItem('CumProtien');
      let ucals = parseInt(ucarbs) + parseInt(upros) + parseInt(ufats);

      $('.calories').html(ucals);
      $('.username h2').html(uname);
      $('.carbs').html( (parseInt(ucarbs) + ' units'));
      $('.protiens').html(parseInt(upros) + ' units');
      $('.fats').html(parseInt(ufats) + ' units');
     
  }
}
export default Welcome
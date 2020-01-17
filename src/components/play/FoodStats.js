import React from 'react'

class FoodStats extends React.Component {
  
  render() {    
    return (
      <div className="col-md-4 stats">
        <h1>Allison is feeling 
          <span id="mood"> Riffic!
          </span>
          <span className="carbMood">
          </span>
          <span className="protienMood"><br/>
          </span>
          <span className="fatMood"><br/>
          </span>
        </h1>
        <div className="macroStats column">
          <div className="col-md-12 status carbStat">
            <div className="carbMeter">
              <h4>Allison's total carbohydrates<br />
                <span id="carbStat"></span>
              </h4>
            </div>
          </div>
          <div className="col-md-12 status proStat">
            <div className="proMeter">
              <h4>Allison's total protien<br />
                <span id="proStat"></span>
              </h4>
            </div>
          </div>
          <div className="col-md-12 status fatStat">
            <div className="fatMeter">
              <h4>Allison's total fat<br />
                <span id="fatStat"></span>
              </h4>
            </div>
          </div>
        </div>
      </div> 
    )
  }
}

export default FoodStats;
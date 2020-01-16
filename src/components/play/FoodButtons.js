import React from 'react'
import FoodList from './../../data/FoodList'

class FoodButtons extends React.Component {
  
  render() {    
    return (
        <div className="col-md-4 col-sm-12 interactive">
        {/* THIS DIV IS USED TO HOUSE THE APP BUTTONS (SEE DOMJS.JS) */}
            <FoodList />
        </div>
    )
  }
}

export default FoodButtons;
import React from 'react'

class FoodEffect extends React.Component {
  
  render() {    
    return (
       <div className="col-md-4 actionWrap">
             <h3>You just fed Allison: <br /><span className="foodEaten" /></h3>
            <h4>It's provides a boost to <br /> <span className="mainMacro" /></h4>
            {/* spacer ------------------------------------------------- */}                    
        </div>
    )
  }
}

export default FoodEffect;
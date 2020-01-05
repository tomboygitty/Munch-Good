import React from 'react'
import {Link} from 'react-router-dom'
// Components
import Radial from '../shared/Radial'
import Rainbow from '../home/Rainbow'

class HomeAppBody extends React.Component {
  render() {
    return (
        <>
         
          <Rainbow />
        <Radial /> 
        
           <div className="container-fluid appBody">
          </div>
          <div className="appFooter">
            <p className="footerLinks" id="arcText">
              developed by <Link to='/play'><b>team</b>awesomest</Link>| view the <Link to='/play'>github repo</Link>
            </p>
          </div>
        
        
        </>
    )
  }
}
export default HomeAppBody
import React from 'react'
// Components
import Radial from '../shared/Radial'
import Rainbow from './Rainbow'
import Footer from '../shared/Footer'

class HomeAppBody extends React.Component {
  render() {
    return (
        <>
          <Rainbow />
          <Radial /> 
          <div className="container-fluid appBody">
          </div>
          <Footer />
        </>
    )
  }
}
export default HomeAppBody
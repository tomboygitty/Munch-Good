// Standard React import to make this a React Component
import React from 'react'
// Import Main Home Component
import HomeAppBody from './home/HomeAppBody'

// THIS COMPONENT - Primary Application INDEX (defined as "/" in Routes.js)
class Home extends React.Component {
  render() {
    return (
      <>
        <HomeAppBody /> {/* -- COMPONENT - Main Component containing a shared (Footer, Radial, Login) components -------------- */}
      </>
    );
  }
}
export default Home;

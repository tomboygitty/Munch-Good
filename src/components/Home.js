// Standard React import to make this a React Component
import React from 'react'
// React Routing Extension via React
// Import of CSS files (bootstrap and Google Fonts CSS has been downloaded to css directory for performance)
import HomeAppBody from './home/HomeAppBody'

class Home extends React.Component {
  render() {
    return (
      <>
        <HomeAppBody />
      </>
    );
  }
}
export default Home;

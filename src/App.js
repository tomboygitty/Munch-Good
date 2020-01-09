// Standard React import to make this a React Component
import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Routes from './components/Routes'
import HomeAppBody from './components/home/HomeAppBody'
// React Routing Extension via React
// Import of CSS files (bootstrap and Google Fonts CSS has been downloaded to css directory for performance)
import '../src/index.css';
import './css/App.css';
import './css/bootstrap.css';
import './css/fonts.css';
// Import of individual referenced components

class App extends React.Component {

  render() {
    return (
      <>
        <BrowserRouter>
          <Routes />
          <HomeAppBody /> {/* -- COMPONENT - Main Component containing a shared (Footer, Radial, Login) components -------------- */}
        </BrowserRouter>,
      </>
    );
  }
}
export default App;

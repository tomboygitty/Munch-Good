// Standard React import to make this a React Component + React Router to allow proper HTML routing out-of-the-box from React
import React from 'react'
import {Route}from 'react-router-dom';
// Import of PAGE level components
import Registration from '../components/Registration';
import Home from '../components/Home';
import Play from '../components/Play';
import Team from '../components/Team';
import Welcome from '../components/Welcome';

// THIS COMPONENT - Routing for specific urls to specific PAGE LEVEL components
class Routes extends React.Component {
  render() {
    return (
        <>
            <Route exact path="/">            <Home />        </Route>
            <Route exact path="/welcome">     <Welcome />     </Route>
            <Route exact path="/registration"><Registration /></Route>
            <Route exact path="/play">        <Play />        </Route>
            <Route exact path="/team">        <Team />        </Route>
        </>
    )
  }
}

export default Routes
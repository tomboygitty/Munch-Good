import React from 'react'
import {Route}from 'react-router-dom';
import Contact from './Contact';
import Home from '../components/Home';
import Play from '../Play';
import Welcome from '../components/Welcome';
import Register from '../components/Register';

class Routes extends React.Component {
  render() {
    return (
        <>
            <Route exact path="/">          <Home />      </Route>
            <Route exact path="/welcome">   <Welcome />   </Route>
            <Route exact path="/register">     <Register />     </Route>
            <Route exact path="/contact">   <Contact />   </Route>
            <Route exact path="/play">      <Play />      </Route>
        </>
    )
  }
}
export default Routes
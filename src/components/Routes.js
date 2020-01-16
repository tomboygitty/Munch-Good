// Standard React import to make this a React Component + React Router to allow proper HTML routing out-of-the-box from React
import React, {useContext} from 'react';
import {
  BrowserRouter as Router,
  Route, 
  Switch, 
  Link, 
  __RouterContext
} from 'react-router-dom';
import {animated, useTransition} from 'react-spring';
// Import of PAGE level components
import Registration from './Registration';
import App from '../App';
import Play from './Play';
// import Team from '../components/Team';
import Welcome from './Welcome';
import Testimonial from './testimonial/TestimonialCard';

function useRouter() {
  return useContext(__RouterContext);
};

const Routes = () => {
  return (
    <Router>
      <ul className="router-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/play">Play</NavLink>
        <NavLink to="/registration">Registration</NavLink>
        <NavLink to="/registration">Registration</NavLink>
        <NavLink to="/testimonials">Testimonials</NavLink>
        <NavLink to="/welcome">Welcome</NavLink>
        {/* <NavLink to="/team">Team</NavLink> */}
      </ul>
      <Main/>
    </Router>
 

  );
};

const Main = () => {
  const {location} = useRouter();

  const transitions = useTransition(location, location => location.key, {
    from: {
    opacity: 0, 
    position:'absolute', 
    width:'100%',
    transform: 'translate3d(100%, 0%, 0)'
  },
    enter: {opacity: 1, transform: 'translate3d(0%, 0%, 0)'},
    leave: {opacity: 0, transform: 'translate3d(0%, 100%, 0)'}
  });

return transitions.map(({item, props:transition, key}) => (
  <animated.div key={key} style={transition}>
        <Switch location={item}>
 {/* // THIS COMPONENT - Routing for specific urls to specific PAGE LEVEL components */}
          <Route exact path="/" component={App}></Route>
          <Route path="/play" component={Play}></Route>
          <Route path="/registration" component={Registration}></Route> 
          <Route path="/testimonial" component={Testimonial}></Route>
          {/* <Route path="/Team" component={Team}></Route>   */}
        </Switch>
  </animated.div>
));
};

function NavLink(props) {
  return (
    <li>
      <Link {...props} />
    </li>
  );
}



export default Routes;


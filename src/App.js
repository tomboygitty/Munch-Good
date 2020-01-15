// Standard React import to make this a React Component
import React,{useState} from 'react';
// import {BrowserRouter} from 'react-router-dom';
import {useSpring, animated} from 'react-spring';
import Routes from './components/Routes';
import HomeAppBody from './components/home/HomeAppBody';
import Nav from './components/home/Nav';

// React Routing Extension via React
// Import of CSS files (bootstrap and Google Fonts CSS has been downloaded to css directory for performance)
import '../src/index.css';
import './css/App.css';
import './css/bootstrap.css';
import './css/fonts.css';
// Import of individual referenced components

// class App extends React.Component {
const App = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const navAnimation = useSpring({
    transform: isNavOpen
     ? `translate3d(0,0,0) scale(1)`
     :`translate3d(100%,0,0) scale(0.5)`
    });
  const fade = useSpring({
    from: {
      opacity:0
    },
    opacity:1
  });


  
    return (
      // <>
      //   <BrowserRouter>
      //     <Routes />
      //     <HomeAppBody /> {/* -- COMPONENT - Main Component containing a shared (Footer, Radial, Login) components -------------- */}
      //   </BrowserRouter>,
        <animated.div className="App" style={fade}>
        <header className="App-header">
        <button onClick={() => setNavOpen(!isNavOpen)}
        className="menu-button">Munch Good</button>
        <Nav style={navAnimation}/>
        </header>
        </animated.div>
        
      // </>
      
    );
  };

export default App;

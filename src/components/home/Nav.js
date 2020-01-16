import React from 'react';
import {animated} from 'react-spring';


const Nav = ({style}) => {
    return (
        <animated.div className="nav-wrapper" style={style}>
            {/* <nav>
                {/* eslint-disable-next-line */}
                {/* <a href="#">Home</a>
                {/* eslint-disable-next-line */}
                {/* <a href="#">Play</a> */}
                {/* eslint-disable-next-line */}
                {/* <a href="#">Registration</a> */}
                {/* eslint-disable-next-line */}
                {/* <a href="#">Testimonials</a> */}
            {/* </nav> */}  
        </animated.div>
    );
};

export default Nav;

import React from 'react';
import {animated} from 'react-spring';

const Nav = ({style}) => {
    return (
        <animated.div className="nav-wrapper" style={style}>
            <nav>
                {/* eslint-disable-next-line */}
                <a href="../../img/allisonNhill.png"></a>
            </nav>
        </animated.div>
    );
};

export default Nav;
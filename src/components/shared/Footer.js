import React from 'react';
import {Link} from 'react-router-dom';


class Footer extends React.Component {
  render() {
    return (
        <div className="appFooter">
            <p className="footerLinks" id="arcText">
              developed by <Link to='/team'><b>team</b>awesomest</Link> | view the <a href='https://github.com/tomboygitty/Final-Project' rel="noopener noreferrer" target="_blank">github repo</a>
            </p>
          </div>

    )
  }
}

export default Footer;
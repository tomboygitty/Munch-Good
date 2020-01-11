// Standard React import to make this a React Component
import React from 'react';
import axios from 'axios';
// React Routing Extension via React
import {BrowserRouter} from 'react-router-dom';
import Routes from './components/Routes';

// Import of CSS files (bootstrap and Google Fonts CSS has been downloaded to css directory for performance)
import '../src/index.css';
import './css/App.css';
import './css/bootstrap.css';
import './css/fonts.css';
// Import of individual referenced components

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }


  render() {
    return (
      <>
          <BrowserRouter>
          <Routes />
          <App />
        </BrowserRouter>,
      </>
    );
  }
}
export default App;

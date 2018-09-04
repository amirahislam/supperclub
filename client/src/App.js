import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';


import Home from './pages/Home/Home.jsx';
import Chef from './pages/Chef/Chef.jsx';
import Patron from './pages/Patron/Patron.jsx';
import Reservation from './pages/Reservations/Reservations.jsx';
import Events from './pages/Events/Events.jsx'
import Signup from './pages/Signup/Signup.jsx'
import Login from './pages/Login/Login';
import Navbar from './components/Navbar';



class App extends Component {

  state = {
    loggedIn: false,
    username: null
  }

  updateUser = (userObject) => {
    console.log("Update user");
    this.setState(
        userObject
    )
    console.log(this.state.loggedIn);
    console.log(this.state.username);
  };

  componentDidMount() {

  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home}/>
          <Route exact path='/Chef' component={Chef}/>
          <Route exact path='/Patron' component={Patron}/>
          <Route exact path='/Reservations' component={Reservation}/>
          <Route exact path='/Events' component={Events}/>
          <Route exact path='/Signup' component={Signup}/>
          <Route
            exact path='/Login'
            render={() =>
              <Login
                updateUser={this.updateUser}
              />}
          />
        </div>
      </Router>
    );
  }
}

export default App;

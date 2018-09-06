import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import API from './utils/API';


import Home from './pages/Home/Home.jsx';
import Chef from './pages/Chef/Chef.jsx';
import Patron from './pages/Patron/Patron.jsx';
import Profile from './pages/Profile/Profile.jsx';
import Reservation from './pages/Reservations/Reservations.jsx';
import Events from './pages/Events/Events.jsx'
import Signup from './pages/Signup/Signup.jsx'
import Login from './pages/Login/Login';



class App extends Component {

  state = {
    loggedIn: false,
    username: null,
    sessionID: null,
    redirect: false
  }

  componentDidMount() {
    // console.log(req.session)
    this.getUser()
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  };

  renderRedirect = () => {
      if (this.state.redirect) {
        return <Redirect to='/login' />
      }
  };

  updateUser = (userObject) => {
    this.setState(
        userObject
    )
    localStorage.setItem("user", this.state.username);
    localStorage.setItem("sessionID", this.state.sessionID);
    console.log("Logged in: " + this.state.loggedIn);
    console.log("Username: " + this.state.username);
    console.log("Session ID: " + this.state.sessionID);
  };

  getUser = () => {
    let localsessionUser = localStorage.getItem("user")
    let localsessionID = localStorage.getItem("sessionID")
    let sessionData = {
      sessionUserID: localsessionUser,
      sessionID: localsessionID
    };
    API.checkSession(sessionData)
    .then(response => {
      if (response.data._id && response.data.sessionUserID) {
        console.log("Login confirmed: ")
        console.log(response);
      } else {
        console.log("No matching sessions")
      }
  }).catch(error => {
      console.log('Login error: ')
      console.log(error);
      console.log(this)
      this.setRedirect();
  })
  }

  render() {
    return (
      <Router>
        <div>
          {this.renderRedirect()}
          <Route exact path='/' component={Home}/>
          <Route exact path='/Chef' component={Chef}/>
          <Route exact path='/Patron' component={Patron}/>
          <Route exact path='/Profile' component={Profile}/>
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

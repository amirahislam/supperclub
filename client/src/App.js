import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch, Redirect } from 'react-router-dom';
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
    loggedIn: "",
    username: null,
    sessionID: null,
    userObject: {}
  }

  componentDidMount() {
    this.getUser();
    // console.log(this.getUser());
    // this.checkLogin = () => {
    //   this.getUser()
    // }
  }

  componentDidUpdate() {
    // console.log(this.state);
    // console.log(this.checkLogin(this.state.loggedIn));
    // console.log(this.getUser());
  }

  updateUser = (userObject) => {
    this.setState(
        userObject
    )
    localStorage.setItem("user", this.state.username);
    localStorage.setItem("sessionID", this.state.sessionID);
  };

  // checkLogin = (loggedIn) => {
  //   return (loggedIn ? true : false)
  // }

  getUser = () => {
    let localSessionID = localStorage.getItem("sessionID")
    // console.log(localSessionID);
    if (!localSessionID || localSessionID === "null") {
      // console.log("Session null");
      this.setState({
        loggedIn: false
      });
      const isLoggedin = false;
      console.log(isLoggedin);
      console.log(this.state.loggedIn);
      return (isLoggedin ? true : false)
    } else {
      // console.log("Session not null")
      API.checkSession(localSessionID)
      .then(response => {
        // console.log(response);
        if (response.data._id === localSessionID) {
          // console.log("Login confirmed");
          this.setState({
            loggedIn: true
          });
          const isLoggedin = true;
          console.log(isLoggedin);
          console.log(this.state.loggedIn);
          return (isLoggedin ? true : false)    
        } else {
          // console.log("No matching sessions");
          this.setState({
            loggedIn: false
          });
          const isLoggedin = false;
          console.log(isLoggedin);
          console.log(this.state.loggedIn);
          return (isLoggedin ? true : false)
        }
      }).catch(error => {
          // console.log('Login error: ')
          // console.log(error);
          // this.setState({
          //   loggedIn: false
          // });
          // const isLoggedin = false;
          // console.log(isLoggedin);
          // return (isLoggedin ? true : false)
      })
    }
  }

  render() {
    return (
      <Router>
        <div>
          {/* {this.getUser()} */}
          <Switch>
            <Route exact path='/'
              render={() =>
                <Home
                  updateUser={this.updateUser}
                />}
            />
            <Route 
              exact path='/Signup'
              render={() =>
                <Signup
                  updateUser={this.updateUser}
                />}
            />
            <Route
              exact path='/Login'
              render={() =>
                <Login
                  updateUser={this.updateUser}
                />}
            />
            <Route exact path='/Chef' component={Chef}/>
            <Route exact path="/Chef" render={() => (
              this.state.loggedIn === true ? (
                <Chef />
              ) : this.state.loggedIn === false ? (
                <Redirect to="/"/>
              ) : (
                null
              )
            )}/>            
            <Route exact path='/Patron' component={Patron} />
            <Route exact path="/Patron" render={() => (
              this.state.loggedIn === true ? (
                <Patron />
              ) : this.state.loggedIn === false ? (
                <Redirect to="/"/>
              ) : (
                null
              )
            )}/>
            <Route exact path='/Profile' component={Profile}/>
            <Route exact path="/Profile" render={() => (
              this.state.loggedIn === true ? (
                <Profile />
              ) : this.state.loggedIn === false ? (
                <Redirect to="/"/>
              ) : (
                null
              )
            )}/>
            {/* <Route exact path='/Reservations' component={Reservation}/> */}
            <Route exact path="/Reservations" render={() => (
              this.state.loggedIn === true ? (
                <Reservation />
              ) : this.state.loggedIn === false ? (
                <Redirect to="/"/>
              ) : (
                null
              )
            )}/>
            {/* <Route exact path='/Events' component={Events}/> */}
            <Route exact path="/Events" render={() => (
              this.state.loggedIn === true ? (
                <Events />
              ) : this.state.loggedIn === false ? (
                <Redirect to="/"/>
              ) : (
                null
              )
            )}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

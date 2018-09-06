import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import BuzzInput from '../../components/BuzzInput';
import SubmitButton from '../../components/SubmitButton';
import API from "../../utils/API";

class Login extends Component {

    state = {
        username: "",
        password: "",
        redirect: false
    };

    setRedirect = () => {
        this.setState({
          redirect: true
        })
    };

    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/patron' />
        }
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(event.target.value);
    };

    handleFormSubmit = event => {
        event.preventDefault();
        let patronData = {
            username: this.state.username,
            password: this.state.password,
            
        };
        API.loginPatron(patronData)
        .then(response => {
            if (response.status === 200) {
                console.log("Authenticated!")
                // update App.js state
                this.props.updateUser({
                    loggedIn: true,
                    username: response.data.username
                })
                let sessionData = {
                    sessionUserID: response.data.username
                }
                API.createSession(sessionData)
                .then(response => {
                    console.log("Session response: ")
                    console.log(response);
                    this.props.updateUser({
                        sessionID: response.data._id
                    })
                }).catch(error => {
                    console.log('Login error: ')
                    console.log(error);  
                })
                this.setRedirect();
            }
        }).catch(error => {
            console.log('Login error: ')
            console.log(error);  
        })
    };

    render() {
        return (
            <div>
                {this.renderRedirect()}
                <h1>Login Page</h1>
                <BuzzInput
                    value={this.state.username}
                    name="username"
                    placeholder="Username"
                    onChange={this.handleInputChange}
                />
                <BuzzInput
                    value={this.state.password}
                    name="password"
                    placeholder="Password"
                    onChange={this.handleInputChange}
                />
                <SubmitButton
                    onClick={this.handleFormSubmit}
                />
                <h3>Don't have a login? <a href="/signup">Sign up here!</a></h3>
            </div>
        )
    };
};

export default Login;
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import BuzzInput from '../../components/BuzzInput';
import SubmitButton from '../../components/SubmitButton';
import API from "../../utils/API";

class Login extends Component {

    state = {
        username: "",
        password: "",
        redirect: false,
        userType: "",
    };

    componentDidMount() {
        // this.props.updateUser({
        //     onLogin: true
        // })
    };

    setRedirect = (userType) => {
        this.setState({
            userType: userType,
            redirect: true
        })
    };

    renderRedirect = () => {
        if (this.state.redirect === true && this.state.userType === "Patron") {
            return <Redirect to='/patron' />
        }
        else if (this.state.redirect === true && this.state.userType === "Chef") {
            return <Redirect to='/chef' />
        } else {}
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
                console.log("Login response: ")
                console.log(response);
                let thisUser = response.data.username;
                // // update App.js state
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
                API.getPatron(thisUser)
                .then(response => {
                    console.log(response);
                    let userType = response.data[0].userType;
                    this.setRedirect(userType);
                })
            }
        }).catch(error => {
            console.log('Login error: ')
            console.log(error);  
        })
    };

    render() {
        return (
            <div id="login-page">
                {this.renderRedirect()}
                <div className="container">    
                    <form className="form-login" action="index.html">
                        <h2 className="form-login-heading">sign in now</h2>
                        <div className="login-wrap">
                            <input
                                value={this.state.username}
                                name="username"
                                onChange={this.handleInputChange}
                                type="text"
                                className="form-control"
                                placeholder="Username"
                                autoFocus
                            />
                            <br/>
                            <input
                                value={this.state.password}
                                name="password"
                                onChange={this.handleInputChange}
                                type="password"
                                className="form-control"
                                placeholder="Password"
                            />
                            <label className="checkbox">
                                <span className="pull-right">
                                    <a data-toggle="modal" href="login.html#myModal">Forgot Password?</a>               
                                </span>
                            </label>
                            <button
                                className="btn btn-primary btn-block"
                                href="index.html"
                                type="submit"
                                onClick={this.handleFormSubmit}
                                >
                                <i className="fa fa-lock"></i>
                                SIGN IN
                            </button>
                            <hr/>
                            <div className="login-social-link centered">
                            <p>or you can sign in via your social network</p>
                                <button className="btn btn-facebook" type="submit"><i className="fa fa-facebook"></i> Facebook</button>
                                <button className="btn btn-twitter" type="submit"><i className="fa fa-twitter"></i> Twitter</button>
                            </div>
                            <div className="registration">
                                Don't have an account yet?<br/>
                                <a className="" href="/signup">
                                    Create an account
                                </a>
                            </div>            
                        </div> 
                        {/* <!-- Modal --> */}
                        <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex="-1" id="myModal" className="modal fade">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                        <h4 className="modal-title">Forgot Password ?</h4>
                                    </div>
                                    <div className="modal-body">
                                        <p>Enter your e-mail address below to reset your password.</p>
                                        <input type="text" name="email" placeholder="Email" autoComplete="off" className="form-control placeholder-no-fix"/>
                
                                    </div>
                                    <div className="modal-footer">
                                        <button data-dismiss="modal" className="btn btn-default" type="button">Cancel</button>
                                        <button className="btn btn-theme" type="button">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- modal --> */}
                    </form>	  	
                </div>
            </div>
            // <h2>Login Page</h2>
            // <BuzzInput
            //     value={this.state.username}
            //     name="username"
            //     placeholder="Username"
            //     onChange={this.handleInputChange}
            // />
            // <BuzzInput
            //     value={this.state.password}
            //     name="password"
            //     placeholder="Password"
            //     onChange={this.handleInputChange}
            // />
            // <SubmitButton
            //     onClick={this.handleFormSubmit}
            // />
            // <h3>Don't have a login? <a href="/signup">Sign up here!</a></h3>
        )
    };
};

export default Login;
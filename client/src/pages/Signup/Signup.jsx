import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import BuzzInput from '../../components/BuzzInput';
import SubmitButton from '../../components/SubmitButton';
import DropDown from '../../components/DropDown';
import API from "../../utils/API";
import SignUpPage from '../../components/SignUpPage';

class Signup extends Component {

    state = {
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        userType: "",
        password: "",
        img: "",
        redirect: false
    };

    setRedirect = () => {
        console.log("Redirect");
        this.setState({
          redirect: true
        })
    };

    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/login' />
        }
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(event.target.value);
    };

    handleDropDown = event => {
        const userType = event.target.value;
        this.setState({
            userType: userType
        });
        console.log(event.target.value);
    };

    handleFormSubmit = event => {
        event.preventDefault();
        let patronData = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            username: this.state.username,
            userType: this.state.userType,
            password: this.state.password,
            img: this.state.img
        };
        console.log(patronData);
        API.getPatron(patronData.username)
        .then(res => {
            console.log(res)
            if (!res.data[0]) {
                console.log("Username available");
                API.savePatron(patronData)
                .then(res => {
                    console.log(res)
                    if (res.data) {
                        console.log("Successful signup!")
                        this.setRedirect();
                    } else {
                        console.log("Signup error")
                    }
                })
                .catch(error => {
                    console.log(error)
                })
            } else {
                console.log("Username taken");
            }
        })
        .catch(error => {
            console.log(error)
        })
    };

    render() {
        return (
            <div id="login-page">
                {this.renderRedirect()}
                <div className="container">
                    <form className="form-login" action="index.html">
                        <h2 className="form-login-heading">sign up now</h2>
                        <div className="login-wrap">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                    <input 
                                    value={this.state.firstName}
                                    name="firstName"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    placeholder="First name"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                    <input
                                        value={this.state.lastName}
                                        name="lastName"
                                        onChange={this.handleInputChange}
                                        type="text"
                                        className="form-control"
                                        id="lastName"
                                        placeholder="Last name"                                        
                                    />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input
                                        value={this.state.email}
                                        name="email"
                                        onChange={this.handleInputChange}
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter email"
                                    />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input
                                    value={this.state.username}
                                    name="username"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    placeholder="Username"                                        
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="image">Image</label>
                                <input
                                    value={this.state.img}
                                    name="img"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    className="form-control"
                                    id="img"
                                    placeholder="Image URL"                                        
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input
                                    value={this.state.password}
                                    name="password"
                                    onChange={this.handleInputChange}
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="form-group">
                                <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">Chef/Patron</label>
                                    <select
                                        className="custom-select my-1 mr-sm-2"
                                        id="inlineFormCustomSelectPref"
                                        onChange={this.handleDropDown}
                                    >
                                        <option>Choose...</option>
                                        <option value="Chef">Chef</option>
                                        <option value="Patron">Patron</option>
                                    </select>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={this.handleFormSubmit}
                            >
                            Submit
                            </button>
                        </div>
                    </form>
                </div>   
                {/* <h2>Signup Page</h2>
                <BuzzInput
                value={this.state.firstName}
                name="firstName"
                placeholder="First name"
                onChange={this.handleInputChange}
                />
                <BuzzInput
                value={this.state.lastName}
                name="lastName"
                placeholder="Last name"
                onChange={this.handleInputChange}
                />
                <BuzzInput
                value={this.state.email}
                name="email"
                placeholder="Email address"
                onChange={this.handleInputChange}
                />
                <BuzzInput
                value={this.state.username}
                name="username"
                placeholder="Username"
                onChange={this.handleInputChange}
                />
                <BuzzInput
                value={this.state.img}
                name="img"
                placeholder="Image URL (optional)"
                onChange={this.handleInputChange}
                />
                <BuzzInput
                value={this.state.password}
                name="password"
                placeholder="Password"
                onChange={this.handleInputChange}
                />
                <DropDown
                value={this.state.userType}
                name="userType"
                onChange={this.handleDropDown}
                />
                <SubmitButton
                onClick={this.handleFormSubmit}
                />
                <h3>Already have a login? <a href="/login">Log in here!</a></h3> */}
            </div>
        )
    };
};

export default Signup;
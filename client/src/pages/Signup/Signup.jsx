import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import BuzzInput from '../../components/BuzzInput';
import SubmitButton from '../../components/SubmitButton';
import DropDown from '../../components/DropDown';
import API from "../../utils/API";

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
    };

    render() {
        return (
            <div>
                {this.renderRedirect()}
                <h2>Signup Page</h2>
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
                <h3>Already have a login? <a href="/login">Log in here!</a></h3>
            </div>
        )
    };
};

export default Signup;
import React, { Component } from 'react';
// import Navbar from '../../components/Navbar';
// import SignInModals from '../../components/SignInModals'
// import PatronPP from '../../components/PatronPP';
import BuzzInput from '../../components/BuzzInput';
import SubmitButton from '../../components/SubmitButton';
import API from "../../utils/API";

class Signup extends Component {

    state = {
        firstName: "",
        lastName: "",
        username: "",
    }

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
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            username: this.state.username
        };
        API.savePatron(patronData)
    }

    render() {
        return (
            <div>
                {/* <Navbar /> */}
                <h1>Signup Page</h1>
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
                    value={this.state.username}
                    name="username"
                    placeholder="Username"
                    onChange={this.handleInputChange}
                />

                <SubmitButton
                    onClick={this.handleFormSubmit}
                />

  {/* username: { type: String, required: true },
  img: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true }, */}
  
                {/* <SignInModals
                    key={this.state.firstName}
                    firstName={this.state.firstName}
                    onChange={this.handleInputChange}
                    onClick={this.handleFormSubmit}
                /> */}
            </div>
        )
    }
}

export default Signup;
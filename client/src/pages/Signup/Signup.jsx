import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import SignInModals from '../../components/SignInModals'

class Signup extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <h1>Signup Page</h1>
                <SignInModals />
            </div>
        )
    }
}

export default Signup;
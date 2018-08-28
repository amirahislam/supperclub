import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import BootstrapTemplate from '../components/BootstrapTemplate.jsx';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <BootstrapTemplate />
                <h1>Welcome</h1>
            </div>
        )
    }
}

export default Home;
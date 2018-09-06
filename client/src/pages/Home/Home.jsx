import React, { Component } from 'react';
import Navbar from '../../components/navigation/Navbar';
import BootstrapTemplate from '../../components/BootstrapTemplate';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <BootstrapTemplate />
                
            </div>
        )
    }
}

export default Home;
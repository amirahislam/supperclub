import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import SideToolBar from '../../components/SideToolBar';

class Chef extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <SideToolBar />
            </div>
        )
    }
}

export default Chef;
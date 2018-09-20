import React, { Component } from 'react';
import Navbar from '../../components/navigation/Navbar';
import BootstrapTemplate from '../../components/BootstrapTemplate';
import Footer from '../../components/navigation/Footer';
import FooterPages from '../../components/navigation/FooterPages';

class Home extends Component {

    componentDidMount() {

    };

    render() {
        return (
            <div>
                <Navbar />
                <BootstrapTemplate />
                {/* <Footer /> */}
                <FooterPages />
                
            </div>
        )
    }
}

export default Home;
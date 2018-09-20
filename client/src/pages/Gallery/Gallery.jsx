import React, { Component } from 'react';
import GalleryGrid from '../../components/GalleryGrid';
import Navbar from '../../components/navigation/Navbar';
import FooterPages from '../../components/navigation/FooterPages';


class Gallery extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <GalleryGrid />
                <FooterPages />
            </div>
           
        )
    }

}

export default Gallery;
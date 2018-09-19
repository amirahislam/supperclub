import React, { Component } from 'react';
import GalleryGrid from '../../components/GalleryGrid';
import Navbar from '../../components/navigation/Navbar';


class Gallery extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <GalleryGrid />
            </div>
           
        )
    }

}

export default Gallery;
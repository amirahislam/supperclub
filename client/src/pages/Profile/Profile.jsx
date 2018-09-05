import React, { Component } from 'react';
import NavbarPages from '../../components/NavbarPages';
import ProfilePage from '../../components/ProfilePage';
import SocialMedia from '../../components/SocialMedia';
import Badges from '../../components/Badges';
import City from '../../components/City';


class Profile extends Component {

    render() {
        return (
            <div>
            <NavbarPages />
            <ProfilePage />
            <SocialMedia />
            <Badges />
            <City />
            </div>

            
        )
    }

}

export default Profile;
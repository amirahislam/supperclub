import React, { Component } from 'react';
import NavbarPages from '../../components/navigation/NavbarPages';
import ProfilePage from '../../components/ProfilePage';
import SocialMedia from '../../components/SocialMedia';
import Badges from '../../components/BadgesComponent';
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
import React, { Component } from 'react';
import NavbarPages from '../../components/navigation/NavbarPages';
import ProfilePage from '../../components/ProfilePage';



class Profile extends Component {

    render() {
        return (
            <div>
            <NavbarPages />
            <ProfilePage />
            </div>

            
        )
    }

}

export default Profile;
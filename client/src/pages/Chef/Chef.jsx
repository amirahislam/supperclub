import React, { Component } from 'react';
import NavbarPages from '../../components/navigation/NavbarPages';
import UpcomingEventsTest from '../../components/UpcomingEventsTest';
import SocialMedia from '../../components/SocialMedia';
import Badges from '../../components/BadgesComponent';
import ActivitiesPanel from '../../components/containers/ActivitiesPanel';
import Notifications from '../../components/Notifications';
import SideBar from '../../components/navigation/SideBar';
import FriendCard from '../../components/FriendCard';
import ToDoPanel from '../../components/ToDoPanel';
// import Revenue from '../../components/Revenue';

import './Chef.css'
import  Flexbox from 'flexbox-react';



class Chef extends Component {

    componentDidMount() {
        console.log('mounted');
    }

    render() {
        const instaPanel = {
            paddingRight: "300px"
        };

        const rightSide = {
            marginRight: "200px"
        };
        return (
            <div>
                <NavbarPages />
                <SideBar
                    
                />
                <div className='wrapper chefPage'>
                    {/* <SideToolBar /> */}
                    {/* <UpcomingEventsTest /> */}
                    {/* <Revenue /> */}
                    <Badges />
                    <SocialMedia />
                    <ActivitiesPanel />
                    <ToDoPanel />
                    {/* <Notifications /> */}
                
                   
                </div>
                
                    
                    {/* <FriendCard /> */}
                {/* <DashboardComponents /> */}
            </div>
        )
    }
}

export default Chef;
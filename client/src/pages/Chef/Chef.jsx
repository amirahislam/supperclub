import React, { Component } from 'react';
import NavbarPages from '../../components/NavbarPages';
import SideToolBar from '../../components/SideToolBar';
import UpcomingEventsTest from '../../components/UpcomingEventsTest';
import SocialMedia from '../../components/SocialMedia';
import Badges from '../../components/Badges';
import ActivitiesPanel from '../../components/ActivitiesPanel';
import Notifications from '../../components/Notifications';
import SideBar from '../../components/SideBar';
import FriendCard from '../../components/FriendCard';
import ToDoPanel from '../../components/ToDoPanel';
// import Revenue from '../../components/Revenue';

import './Chef.css'
import  Flexbox from 'flexbox-react';



class Chef extends Component {

    

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
                <SideBar />
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
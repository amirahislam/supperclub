import React, { Component } from 'react';
import NavbarPages from '../../components/NavbarPages';
import SideToolBar from '../../components/SideToolBar';
import UpcomingEventsTest from '../../components/UpcomingEventsTest';
import SocialMedia from '../../components/SocialMedia';
import ActivitiesPanel from '../../components/ActivitiesPanel';
import Notifications from '../../components/Notifications';
import SideBar from '../../components/SideBar';
// import ToDoList from '.../../components/ToDoList';

class Chef extends Component {

    

    render() {
        return (
            <div>
                <NavbarPages />
                <SideBar />
                <Notifications />
                {/* <SideToolBar /> */}
                {/* <UpcomingEventsTest /> */}
                <SocialMedia />
                <ActivitiesPanel />
                {/* <ToDoList /> */}

                
            </div>
        )
    }
}

export default Chef;
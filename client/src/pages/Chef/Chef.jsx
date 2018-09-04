import React, { Component } from 'react';
import NavbarPages from '../../components/NavbarPages';
import UpcomingEventsTest from '../../components/UpcomingEventsTest';
import SocialMedia from '../../components/SocialMedia';
import ActivitiesPanel from '../../components/ActivitiesPanel';
import Notifications from '../../components/Notifications';
import SideBar from '../../components/SideBar';
// import ToDoList from '.../../components/ToDoList';
import './Chef.css'

class Chef extends Component {

    componentDidMount() {
        console.log('mounted');
    }

    render() {
        return (
            <div>
                <NavbarPages />
                <SideBar 
                    
                />
                <div className='wrapper chefPage'>
                    <Notifications />
                    {/* <SideToolBar /> */}
                    {/* <UpcomingEventsTest /> */}
                    <SocialMedia />
                    <ActivitiesPanel />
                    {/* <ToDoList /> */}
                </div>

                
            </div>
        )
    }
}

export default Chef;
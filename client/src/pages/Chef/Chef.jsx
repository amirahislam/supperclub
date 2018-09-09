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
import API from "../../utils/API";

import './Chef.css'
import  Flexbox from 'flexbox-react';



class Chef extends Component {

    state = {
        username: '',
        profpic: '',
        firstName: '',
        lastName: '',
        badges: '',
        buzzVal: '',
        currentBuzz: [],
        newBuzz: '',
        placeholder: '',
        img1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA8BLAglQRn7puP_PCHyGx5LzPed7oZTYab1JObhFprzdVwQMdsA',
        img2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTINIEB01_NAsc6vlMZB2jMOXQzWeOAX-ykhRTfezZFqXVPtOtuVg',
        img3: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6tulBsRVy8aTCCsdwQFGkumZva_jZ_hvsZHJVlBUoZEwXeAseVw'
    }

    componentDidMount() {
        console.log('mounted');
        this.getUser();
    }

    getUser = () => {
        let localsessionUser = localStorage.getItem("user")
        console.log("hi " + localsessionUser)
        API.getPatron(localsessionUser)
        .then(response => {
            console.log(response);
            this.setState({
                firstName: response.data[0].firstName,
                lastName: response.data[0].lastName,
                username: response.data[0].username,
                profpic: response.data[0].img
            })
        })
        .catch(err => console.log(err))
        console.log(this.state.loggedIn);
        console.log(this.state.username);   
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
                
                    
                    <FriendCard />
                {/* <DashboardComponents /> */}
            </div>
        )
    }
}

export default Chef;
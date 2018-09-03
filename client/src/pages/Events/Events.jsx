import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import SideToolBar from '../../components/SideToolBar';
import EventsContainer from '../../components/EventsContainer';
import API from "../../utils/API";
import './Events.css';

class Events extends Component {

    state = {
        username: 'jtrimble6',
        profpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA8BLAglQRn7puP_PCHyGx5LzPed7oZTYab1JObhFprzdVwQMdsA',
        firstName: 'Joshua',
        lastName: 'Trimble',
        currentEvents: []
    }

    componentDidMount() {
        console.log('mounted');
        this.getEvents()
    }

    getEvents = () => {
        API.getEvents()
          .then(res => {
            this.setState({ currentEvents: res.data });
            console.log('we got the events')
            console.log(this.state.currentEvents)
            }
        )
          .catch(err => console.log(err))
    }


    render() {
        return (
            <div>
                <Navbar />
                <h1>Events Page</h1>
                <div className='wrapper eventsPage'>
                    <EventsContainer 
                    currentEvents={this.state.currentEvents}
                    />
                </div>
                <SideToolBar 
                    userPP={this.state.profpic}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    badges={this.state.badges}
                    userFullName={this.state.firstName + '' + this.state.lastName}
                />
                
            </div>
        )
    }
}

export default Events;
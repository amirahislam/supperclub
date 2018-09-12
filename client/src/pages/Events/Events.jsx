import React, { Component } from 'react';
import NavbarPages from '../../components/navigation/NavbarPages';
import PatronSideBar from '../../components/navigation/PatronSideBar';
import EventsContainer from '../../components/containers/EventsContainer';
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

    joinEvent = (event) => {
        console.log(event.target.value)
        API.getEvent(event.target.value)
        .then(res => {
            let totalGuests = res.data[0].guestArray.length;
            let maxGuests = res.data[0].guests
            if (totalGuests <= maxGuests) {
                this.sendGuestData(res.data[0]._id);                
            } else {
                console.log("Sorry, the event is full!")
            }
        })
        .catch(err => console.log(err))

    };

    sendGuestData = (id) => {
        console.log(id);
        let attendeeData = {
            username: this.state.username,
            firstName: this.state.firstName,
            lastName: this.state.lastName
        }
        API.joinEvent(id, attendeeData)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
    }


    render() {
        return (
            <div>
                <NavbarPages />
                <PatronSideBar 
                    userPP={this.state.profpic}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    badges={this.state.badges}
                    userFullName={this.state.firstName + ' ' + this.state.lastName}
                />
                <EventsContainer 
                currentEvents={this.state.currentEvents}
                joinEvent={this.joinEvent}
                /> 
            </div>
        )
    }
}

export default Events;
import React, { Component } from 'react';
import NavbarPages from '../../components/navigation/NavbarPages';
import PatronSideBar from '../../components/navigation/PatronSideBar';
import EventsContainer from '../../components/containers/EventsContainer';
import API from "../../utils/API";
import './Events.css';

class Events extends Component {

    state = {
        id: '',
        username: '',
        profpic: '',
        firstName: '',
        lastName: '',
        currentEvents: [],
        currentPatrons: [],
        thisPatron: {},
        newFollow: ''
    }

    componentDidMount() {
        console.log('mounted');
        this.getUserData()
        this.getEvents()
        this.getPatrons()
    }

    getUserData = () => {
        let localsessionUser = localStorage.getItem("user")
        API.getPatron(localsessionUser)
        .then(response => {
            this.setState({
                id: response.data[0]._id,
                firstName: response.data[0].firstName,
                lastName: response.data[0].lastName,
                username: response.data[0].username,
                profpic: response.data[0].img
            })
            console.log(response.data)
        })
        .catch(err => console.log(err))
        console.log(this.state.username);
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

    getPatrons = () => {
        API.getPatrons()
          .then(res => {
              this.setState({ currentPatrons: res.data })
              console.log('we got the patrons')
              console.log(this.state.currentPatrons)
          })
          .catch(err => console.log(err))
    }

    handleFollow = event => {
        console.log("I want to follow you")
        console.log(event.target.getAttribute('patronName'))
        let patronName = event.target.getAttribute('patronName')
        this.setState({
            patronName: patronName
        })
        let id = this.state.id
        console.log('Patron name: ', patronName)
        console.log("ID: ", id)

        API.saveFollow(id, this.state.patronName)
          .then(res => this.setState({ newFollow: res.data }))
          .catch(err => console.log(err));
        console.log("New Follow: ")
        console.log(this.state.newFollow)
        // this.getPatrons()
        this.setState({
            newFollow: ''
        })

    }

    render() {
        return (
            <div>
                <NavbarPages />
                <PatronSideBar 
                    userPP={this.state.profpic}
                    username={this.state.username}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    badges={this.state.badges}
                    userFullName={this.state.firstName + ' ' + this.state.lastName}
                    currentPatrons={this.state.currentPatrons}
                    onClick={this.handleFollow}
                />
                <EventsContainer 
                patronId={this.state.id}
                currentEvents={this.state.currentEvents}
                joinEvent={this.joinEvent}
                /> 
            </div>
        )
    }
}

export default Events;
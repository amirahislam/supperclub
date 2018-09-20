import React, { Component } from 'react';
import NavbarPages from '../../components/navigation/NavbarPages';
import SideBar from '../../components/navigation/SideBar';
import ChefEventsContainer from '../../components/containers/ChefEventsContainer';
import API from "../../utils/API";
import './ChefEvents.css';
import Calendar from "../../components/Calendar";
import FooterPages from '../../components/navigation/FooterPages';

class ChefEvents extends Component {

    state = {
        id: '',
        username: '',
        profpic: '',
        firstName: '',
        lastName: '',
        userType: '',
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
                profpic: response.data[0].img,
                userType: response.data[0].userType
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
            let alreadyJoined = false;
            res.data[0].guestArray.forEach((event) => {
                if (event.username === this.state.username) {
                    alreadyJoined = true
                } else {
                    console.log("all good")
                }
            })
            if (totalGuests < maxGuests && alreadyJoined === false) {
                    this.sendGuestData(res.data[0]._id);
            } else {
                console.log("Sorry, the event is full or you've already joined!")
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
            this.getEvents();
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
                <SideBar 
                    userPP={this.state.profpic}
                    username={this.state.username}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    userType={this.state.userType}
                    badges={this.state.badges}
                    userFullName={this.state.firstName + ' ' + this.state.lastName}
                    currentPatrons={this.state.currentPatrons}
                    onClick={this.handleFollow}
                />
                <ChefEventsContainer 
                patronId={this.state.id}
                currentEvents={this.state.currentEvents}
                joinEvent={this.joinEvent}
                username={this.state.username}
                /> 
                {/* <Calendar
                /> */}
                <FooterPages />
            </div>
        )
    }
}

export default ChefEvents;
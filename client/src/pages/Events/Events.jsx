import React, { Component } from 'react';
import NavbarPages from '../../components/navigation/NavbarPages';
import PatronSideBar from '../../components/navigation/PatronSideBar';
import EventsContainer from '../../components/containers/EventsContainer';
let uuidv4 = require('uuid/v4')
import API from "../../utils/API";
import './Events.css';

class Events extends Component {

    state = {
        redirect: false,
        id: '',
        username: '',
        profpic: '',
        firstName: '',
        lastName: '',
        userType: '',
        badges: '',
        buzzVal: '',
        patron: '',
        availablePatrons: [],
        myUnfollowedPatrons: [],
        currentBuzz: [],
        currentPatrons: [],
        currentFollowings: [],
        dataFollowings: [],
        theseDataFollowings: [],
        currentEvents: [],
        thisPatron: {},
        newBuzz: '',
        newFollow: '',
        placeholder: '',
    }

    componentDidMount() {
        this.getUserData();
        this.getPatrons();
        this.getEvents();
    }

    getUserData = () => {
        this.getPatrons()
        let localsessionUser = localStorage.getItem("user")
        API.getPatron(localsessionUser)
        .then(response => {
            this.setState({
                id: response.data[0]._id,
                firstName: response.data[0].firstName,
                lastName: response.data[0].lastName,
                username: response.data[0].username,
                profpic: response.data[0].img,
                currentFollowings: response.data[0].following,
                userType: response.data[0].userType
            })
            
            this.getFollowing();
            
        })
        .catch(err => console.log(err))
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

    joinEvent = (event, callback) => {
        let value = event.target.getAttribute("value")
        API.getEvent(value)
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
                    this.sendGuestData(res.data[0]._id, callback);
            } else {
                console.log("Sorry, the event is full or you've already joined!")
            }
        })
        .catch(err => console.log(err))

    };

    sendGuestData = (id, callback) => {
        console.log(id);
        let attendeeData = {
            username: this.state.username,
            firstName: this.state.firstName,
            lastName: this.state.lastName
        }
        API.joinEvent(id, attendeeData, callback)
        .then(res => {
            console.log(res)
            this.getEvents();
            callback();
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

    getFollowing = () => {
        console.log("CURRENT PATRONS", this.state.currentPatrons)
        let unfollowed = this.state.currentPatrons
        let following = this.state.currentFollowings
        let theseDataFollowings = []
        for (let m=0; m<unfollowed.length; m++) {
            let thisPatron = unfollowed[m]
            let thisPatronUsername = unfollowed[m].username
            for (let v=0; v<following.length; v++) {
                let thisUser = following[v]
                let thisUserUsername = following[v].patronName
                console.log("THIS USERNAME", thisUser)
                if (thisPatronUsername === thisUserUsername) {
                    unfollowed.splice(m, 1)
                }
                else if (thisUser !== thisPatron && thisUserUsername !== undefined && thisUserUsername !== null) {
                    // theseDataFollowings.splice(m, 1)
                    API.getPatron(thisUserUsername)
                    .then(response => {
                        if (response.data[0] !== undefined && response.data[0] !== null && thisUser !== thisPatron)   {
                            theseDataFollowings.push(response.data[0])
                        }
                    })
                    .catch(err => console.log(err))
                    } 
                
            }
        }
        
        console.log("NEW UNFOLLOWED: ", unfollowed)
        console.log("NEW FOLLOWED: ", theseDataFollowings)
        // console.log("FOLLOWING", following)
        let currentPatrons = unfollowed
        let dataFollowings = following
        
        // const uniquePatrons = Array.from(new Set(currentPatrons));
        const uniquePatrons = currentPatrons.filter(function (el, i, arr) {
            return arr.indexOf(el) === i;
        });
        const uniqueFollowings = dataFollowings.filter(function (el, i, arr) {
            return arr.indexOf(el) === i;
        });
        console.log("UNIQUE Patrons:")
        console.log(uniquePatrons)
        console.log("UNIQUE Followings:")
        console.log(uniqueFollowings)
        this.setState({myUnfollowedPatrons: unfollowed})
        this.setState({dataFollowings: dataFollowings})
        this.getAvailPatrons(currentPatrons, dataFollowings);
    }

    getAvailPatrons = (currentPatrons, dataFollowings) => {
        console.log("GETTING AVAIL PATRONS")
        let unfollowedPatrons = currentPatrons
        console.log("UNFOLLOWED PATRONS:", currentPatrons)
        console.log("FOLLOWED PATRONS:", dataFollowings)
        let newDataFollowings = this.removeDups(dataFollowings)
        console.log("NEW FOLLOWED PATRONS:", newDataFollowings)
        for(let z=0; z<currentPatrons.length; z++) {
            let data = currentPatrons[z]
            for (let y = dataFollowings.length - 1; y >= 0; y--) {
                let following = dataFollowings[y]
                if (data.username !== following.username) {
                    // console.log("Not a match", data)
                } else if (data.username === following.username) {
                    // console.log("I already follow you", data)
                    unfollowedPatrons.splice(z, 1)
                } else {
                    console.log("must not be anything")
                }
            }
        }
        console.log("My unfollowed patrons:", unfollowedPatrons)
        console.log("-----------------------------------------")
        
        this.setState({ myUnfollowedPatrons: unfollowedPatrons })
        console.log("Passing Array", this.state.myUnfollowedPatrons)
        console.log("Passing Other Array", this.state.dataFollowings)
        // let currentFollowings = this.state.currentFollowings
        
    }

    handleFollow = event => {
        event.preventDefault()
        let thisFollow =  {
            patronId: event.target.getAttribute('patronid'),
            patronName: event.target.getAttribute('patron'),
            patronImg: event.target.getAttribute('patronimg'),
            patronEmail: event.target.getAttribute('patronemail')
        }
        let id = this.state.id
        this.savingFollow(id, thisFollow)
    }

    savingFollow = (id, thisFollow) => {
        console.log("NEW UNFOLLOWED STATE:", this.state.myUnfollowedPatrons)
        API.saveFollow(id, thisFollow)
          .then(res => this.setState({ newFollow: res.data }))
          .catch(err => console.log(err));
          console.log("New Follow: ")
          console.log(thisFollow)
          this.getUserData()
          this.setState({
            // myUnfollowedPatrons: this.state.myUnfollowedPatrons.splice(thisFollow, 1),
            newFollow: ''
          })
        // console.log("NEW UNFOLLOWED STATE:", this.state.myUnfollowedPatrons)
    }

    handleUnfollow = event => {
        event.preventDefault()
        let thisUnfollow =  {
            patronId: event.target.getAttribute('patronId'),
            patronName: event.target.getAttribute('patron'),
            patronImg: event.target.getAttribute('patronImg'),
            patronEmail: event.target.getAttribute('patronEmail')
        }
        let id = this.state.id
        this.savingUnfollow(id, thisUnfollow)
    }

    savingUnfollow = (id, thisUnfollow) => {
        console.log("NEW FOLLOWED STATE:", this.state.dataFollowings)
        console.log("MY ID:", id)
        console.log("NEW UNFOLLOW:", thisUnfollow)
        let unfollowId = thisUnfollow.patronId
        console.log("NEW UNFOLLOW ID:", unfollowId)
        API.saveUnfollow(id, unfollowId)
          .then(res => console.log("HUGE RESULT:", res))
          .catch(err => console.log(err));
          this.getUserData()
          this.setState({
            // myUnfollowedPatrons: this.state.myUnfollowedPatrons.splice(thisFollow, 1),
            newUnfollow: ''
          })
        // console.log("NEW UNFOLLOWED STATE:", this.state.myUnfollowedPatrons)
    }


    render() {
        return (
            <div>
                <NavbarPages />
                <PatronSideBar 
                    key={uuidv4()}
                    userPP={this.state.profpic}
                    username={this.state.username}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    userType={this.state.userType}
                    badges={this.state.badges}
                    userFullName={this.state.firstName + ' ' + this.state.lastName}
                    currentPatrons={this.state.myUnfollowedPatrons}
                    dataFollowings={this.state.dataFollowings}
                    onClick={this.handleFollow}
                    onUnfollowClick={this.handleUnfollow}
                    onFollowClick={this.getUserData}
                    onFollowingClick={this.getUserData}
                />
                <EventsContainer 
                patronId={this.state.id}
                currentEvents={this.state.currentEvents}
                joinEvent={this.joinEvent}
                username={this.state.username}
                /> 
                {/* <Calendar
                /> */}
            </div>
        )
    }
}

export default Events;
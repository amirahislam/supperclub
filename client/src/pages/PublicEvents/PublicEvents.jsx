import React, { Component } from 'react';
import Navbar from '../../components/navigation/Navbar';
// import PatronSideBar from '../../components/navigation/PatronSideBar';
import PublicEventsContainer from '../../components/containers/PublicEventsContainer';
import API from "../../utils/API";
import './PublicEvents.css';
import Calendar from "../../components/Calendar";

class PublicEvents extends Component {

    state = {
        currentEvents: [],
    }

    componentDidMount() {
        this.getEvents()
    }

    getEvents = () => {
        API.getEvents()
          .then(res => {
            this.setState({ currentEvents: res.data });
            console.log(this.state.currentEvents)
            }
        )
          .catch(err => console.log(err))
    }


    render() {
        return (
            <div>
                <Navbar />
                <PublicEventsContainer 
                currentEvents={this.state.currentEvents}
                /> 
            </div>
        )
    }
}

export default PublicEvents;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import '../css/DashboardStyles/DashboardCalendar.css';
import '../css/DashboardStyles/fullcalendar.css';
import '../css/DashboardStyles/fullcalendar.print.css';
import '../css/DashboardStyles/fullcalendar.min.css';
import '../css/DashboardStyles/Calendar.css';
import API from "../utils/API";

import $ from "jquery";
import moment from 'moment';

import FullCalendar from 'fullcalendar-reactwrapper';

class Calendar extends Component {

    state = {
        currentEvents: [],
    }

    componentDidMount() {
        this.getEvents();
    }

    getEvents = () => {
        API.getEvents()
          .then(res => {
            let events = [];
            res.data.forEach((event) => {
                console.log(event.username);
                let localsessionUser = localStorage.getItem("user");
                console.log(localsessionUser);
                if (event.username === localsessionUser) {
                    let splitDate = event.date.split("T")
                    let eventDate = splitDate[0];
                    let eventInfo = {
                        title: event.eventName,
                        start: eventDate
                    };
                    events.push(eventInfo)
                }
            })
            this.setState({ currentEvents: events });
            console.log('we got the events')
            console.log(this.state.currentEvents)
            }
        )
          .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="container" id="calendarCont">
            <div className="calendarDiv">
                
            <FullCalendar
                id = "your-custom-ID"
                header = {{
                    left: 'prev,next today myCustomButton',
                    center: 'title',
                    right: 'month,basicWeek,basicDay'
                }}
                navLinks= {true} // can click day/week names to navigate views
                editable= {true}
                eventLimit= {true} // allow "more" link when too many events
                events = {this.state.currentEvents}
            />
            </div>
            </div>
        )
    }
}

export default Calendar;
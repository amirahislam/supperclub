import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import '../css/DashboardStyles/DashboardCalendar.css';
import '../css/DashboardStyles/fullcalendar.css';
import '../css/DashboardStyles/fullcalendar.print.css';
import '../css/DashboardStyles/fullcalendar.min.css';
import '../css/DashboardStyles/Calendar.css';

import $ from "jquery";
import moment from 'moment';

import FullCalendar from 'fullcalendar-reactwrapper';

class Calendar extends Component {
    render() {
        return (
            <div className="container" id="calendarCont">
            <div className="calendarDiv">
                
                <FullCalendar />
            </div>
            </div>
        )
    }
}

export default Calendar;
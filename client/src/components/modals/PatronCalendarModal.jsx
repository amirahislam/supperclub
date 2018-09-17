import React, { Component } from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
// import '../css/DashboardStyles/DashboardCalendar.css';
import '../../css/DashboardStyles/fullcalendar.css';
import '../../css/DashboardStyles/fullcalendar.print.css';
import '../../css/DashboardStyles/fullcalendar.min.css';
import '../../css/DashboardStyles/Calendar.css';
import API from "../../utils/API";

import $ from "jquery";
import moment from 'moment';

import FullCalendar from 'fullcalendar-reactwrapper';


class ChefCalendarModal extends React.Component {

    componentDidMount() {
        console.log('mounted');
        this.getUserData();
    }

        constructor(props, context) {
        super(props, context);  
      
        this.state = {
          showModal: false,
          currentEvents: []

        };

        // this.handleSaveEvent = this.handleSaveEvent.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        // this.getUserData = this.getUserData.bind(this);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
      }
      componentDidMount() {
        this.getEvents();
        }

        getEvents = () => {
            API.getEvents()
              .then(res => {
                let events = [];
                res.data.forEach((event) => {
                    let splitDate = event.date.split("T")
                    let eventDate = splitDate[0];
                    let eventInfo = {
                        title: event.eventName,
                        start: eventDate
                    };
                    events.push(eventInfo)
                })
                this.setState({ currentEvents: events });
                console.log('we got the events')
                console.log(this.state.currentEvents)
                }
            )
              .catch(err => console.log(err))
        }
      
      open() {
        this.setState({showModal: true});
      }
      
      close() {
        this.setState({showModal: false});
      }
      
  
    render() {
      return (
        <div>
            <li className="sub-menu">
                <a href="javascript:;">
                <span className="addEvent" onClick={this.open}>
                    <i className="fa fa-calendar"></i>
                    Calendar
                </span>
                <div>
                    <Modal className="modal-container" 
                    show={this.state.showModal} 
                    onHide={this.close}
                    animation={true} 
                    bsSize="small">

                    <Modal.Body>
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
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                        
                    </Modal.Footer>         
                    </Modal> 
                </div>
                </a>
            </li>
        </div>
      );
    }
  }

export default ChefCalendarModal
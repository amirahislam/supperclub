import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class AttendingAlert extends Component {
    render() {
        console.log(this.props.justJoined);
        if (this.props.justJoined === true) {
            return (
                <div className="alert alert-success alert-dismissible" role="alert">
                    Got it! You're attending this Supper Club! Woot Woot!
                </div>
            )
        } else if (this.props.justJoined === "Cancel") {
            return (
                <div className="alert alert-warning alert-dismissible" role="alert">
                    Your reservation has been canceled. Sorry to see you go!
                </div>
            )
        } else if (this.props.justJoined === false) {
            return (
                <div className="alert alert-danger alert-dismissible" role="alert">
                    Sorry, the event is full. Try another event!
                </div>
            )
        } else {
            return (
                <div>

                </div>
            )
        }
    }
}

export default AttendingAlert;
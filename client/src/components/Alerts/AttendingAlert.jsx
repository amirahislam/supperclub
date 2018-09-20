import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class AttendingAlert extends Component {
    render() {
        if (this.props.justJoined === true) {
            return (
                <div className="alert alert-success alert-dismissible" role="alert">
                    Got it! You're attending this Supper Club! Woot Woot!
                </div>
            )
        } else if (this.props.justJoined === false) {
            return (
                <div className="alert alert-warning alert-dismissible" role="alert">
                    Sorry, you can't join this event! Make sure it's not full and that you haven't already joined.
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}

export default AttendingAlert;
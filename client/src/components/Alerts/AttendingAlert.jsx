import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class AttendingAlert extends Component {
    render() {
        return (
            <div className="alert alert-success" role="alert">
                Got it! You're attending this Supper Club! Woot Woot!
            </div>
        )
    }
}

export default AttendingAlert;
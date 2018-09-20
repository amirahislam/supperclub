import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class OnListAlert extends Component {
    render() {
        return (
            <div className="alert alert-info" role="alert">
                Looks like you're already on the waiting list!
            </div>
        )
    }
}

export default OnListAlert;
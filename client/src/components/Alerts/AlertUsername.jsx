import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class AlertUsername extends Component {
    render() {
        return (
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Holy guacamole!</strong> Looks like you already have an account with us!
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        )
    }
}

export default AlertUsername;
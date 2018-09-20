import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class AlertUsername extends Component {
    render() {
        console.log(this.props.loginError);
        if (this.props.loginError === true) {
            return (
                <div className="alert alert-warning" role="alert">
                    <strong>Oops!</strong> We couldn't log you in. Check your username and password and try again.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            )
        } else {
            return <div></div>
        }
    }
}

export default AlertUsername;
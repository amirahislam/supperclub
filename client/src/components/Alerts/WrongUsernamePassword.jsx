import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class WrongUsernamePassword extends Component {
    render() {
        return (
            <div className="alert alert-danger" role="alert">
                Sorry, the username and password your entered doesn't match!
            </div>
        )
    }

}

export default WrongUsernamePassword;
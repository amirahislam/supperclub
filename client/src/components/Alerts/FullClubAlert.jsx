import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class FullClubAlert extends Component {
    render() {
        return (
            <div className="alert alert-danger" role="alert">
                Uh oh! Looks like this Supper Club is full!
            </div>
        )
    }

}
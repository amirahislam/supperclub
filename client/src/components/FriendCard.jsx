import React, { Component } from 'react';
import '../css/DashboardStyles/DashboardStyle.css';
import '../css/DashboardStyles/DashboardStyle-responsive.css';
import '../css/DashboardStyles/DashboardBootstrap.css';
import '../css/DashboardStyles/FriendCard.css'
import FollowComponent from './FollowComponent'

import { Link } from 'react-router-dom';

class FriendCard extends Component {

    render() {
        return (
            <div className="friendCard">

                {
                    
                this.props.currentPatrons.map(patron => {
                    return(
                    <div className="friendCard content-panel pn col-lg-3 col-md-3 col-sm-3 mb">
                    
                        <div id="patronImg">
                            <a href="#">
                                <img className="profilePic" src={patron.img} alt={patron.username} />
                            </a>
                        </div>
                        <FollowComponent 
                        key={this.props.key}
                        data-tag={this.props.patronName}
                        name={this.props.name}
                        patronName={this.props.patronName}
                        onClick={this.props.onClick}
                        />
                        <div className="centered">
                            <h3>{patron.username}</h3>
                            <h6>{patron.email}</h6>
                        </div>
                    
                </div>
                )})

                }

            </div>

        )
    }
}

export default FriendCard;
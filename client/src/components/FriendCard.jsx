import React, { Component } from 'react';
import '../css/DashboardStyles/DashboardStyle.css';
import '../css/DashboardStyles/DashboardStyle-responsive.css';
import '../css/DashboardStyles/DashboardBootstrap.css';
import '../css/DashboardStyles/FriendCard.css'
import FollowComponent from './FollowComponent'
import ViewProfileComponent from './ViewProfileComponent'

class FriendCard extends Component {

    render() {
        let uuidv4 = require('uuid/v4');
        return (
            
            <div className="friendCard">

                {
                    
                this.props.currentPatrons.map(patron => {
                    return (
                    <div key={patron.username} className="friendCard content-panel pn col-lg-3 col-md-3 col-sm-3 mb">
                    
                        <div id="patronImg">
                            <a href="#">
                                <img className="profilePic" src={patron.img} alt={patron.username} />
                            </a>
                        </div>
                        
                        <div className="centered">
                            <h3>{patron.username}</h3>
                            <h6>{patron.email}</h6>
                        </div>

                        <div className="row">
                          <div className="col-md-1"></div>
                            <div className="col-md-10">
                              <div className="row">
                                <FollowComponent 
                                key={uuidv4()}
                                patronname={patron.username}
                                patronid={patron.id}
                                onClick={this.props.onClick}
                                />
                                <ViewProfileComponent 
                                key={uuidv4()}
                                // patronname={patron.username}
                                // onClick={this.props.onClick}
                                />
                              </div>
                            </div>
                          <div className="col-md-1"></div>
                        </div>
                    
                </div>
                )})

                }

            </div>

        )
    }
}

export default FriendCard;
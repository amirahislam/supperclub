import React, { Component } from 'react';
import '../css/DashboardStyles/DashboardStyle.css';
import '../css/DashboardStyles/DashboardStyle-responsive.css';
import '../css/DashboardStyles/DashboardBootstrap.css';
import '../css/DashboardStyles/FriendCard.css'
import FollowingComponent from './FollowComponent'
import ViewProfileComponent from './ViewProfileComponent'

class FollowingCard extends Component {

    render() {
        let uuidv4 = require('uuid/v4');
        return (
            
            <div className="friendCard">

                {/* {
                    
                this.props.currentFollowing.map(following => {
                    return(
                    <div className="friendCard content-panel pn col-lg-3 col-md-3 col-sm-3 mb">
                    
                        <div id="followingImg">
                            <a href="#">
                                <img className="profilePic" src={following.img} alt={following.username} />
                            </a>
                        </div>
                        
                        <div className="centered">
                            <h3>{following.username}</h3>
                            <h6>{following.email}</h6>
                        </div>

                        <div className="row">
                          <div className="col-md-1"></div>
                            <div className="col-md-10">
                              <div className="row">
                                <FollowingComponent 
                                key={uuidv4()}
                                followingname={following.username}
                                followingid={following.id}
                                onClick={this.props.onClick}
                                currentFollowing={this.props.currentFollowing}
                                />
                            
                              </div>
                            </div>
                          <div className="col-md-1"></div>
                        </div>
                    
                </div>
                )})

                } */}

            </div>

        )
    }
}

export default FollowingCard;
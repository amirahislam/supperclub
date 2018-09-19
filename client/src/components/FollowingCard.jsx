import React, { Component } from 'react';
import '../css/DashboardStyles/DashboardStyle.css';
import '../css/DashboardStyles/DashboardStyle-responsive.css';
import '../css/DashboardStyles/DashboardBootstrap.css';
import '../css/DashboardStyles/FriendCard.css'
import UnfollowComponent from './UnfollowComponent'
import ViewProfileModal from './modals/ViewProfileModal'

class FollowingCard extends Component {

    render() {
        let uuidv4 = require('uuid/v4')
        return (
            
            <div className="friendCard">

                {
                    
                this.props.dataFollowings.map(dataFollowing => {
                    return (
                    <div key={uuidv4()} className="friendCard content-panel pn col-lg-3 col-md-3 col-sm-3 mb">
                    
                        <div id="patronImg">
                            <a href="#">
                                <img className="profilePic" src={dataFollowing.patronImg} alt={dataFollowing.patronName} />
                            </a>
                        </div>
                        
                        <div className="centered">
                            <h3>{dataFollowing.patronName}</h3>
                            <h6>{dataFollowing.patronEmail}</h6>
                        </div>

                        <div className="row">
                          <div className="col-md-1"></div>
                            <div className="col-md-10">
                              <div className="row">
                                <UnfollowComponent 
                                key={uuidv4()}
                                patron={dataFollowing.patronName}
                                patronid={dataFollowing.patronId}
                                patronimg={dataFollowing.patronImg}
                                patronemail={dataFollowing.patronEmail}
                                onClick={this.props.onClick}
                                />
                                <ViewProfileModal 
                                key={uuidv4()}
                                patron={dataFollowing.patronName}
                                patronid={dataFollowing.patronId}
                                patronimg={dataFollowing.patronImg}
                                patronemail={dataFollowing.patronEmail}
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

export default FollowingCard;
import React, { Component } from 'react';
import '../css/DashboardStyles/DashboardStyle.css';
import '../css/DashboardStyles/DashboardStyle-responsive.css';
import '../css/DashboardStyles/DashboardBootstrap.css';
import '../css/DashboardStyles/FriendCard.css'
import FollowingComponent from './FollowComponent'
import ViewProfileComponent from './ViewProfileComponent'

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
                            <h6>{dataFollowing.patronName}</h6>
                        </div>

                        <div className="row">
                          
                            <div className="col-md-8">
                              <button>View Profile</button>
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-4">
                              <button>Unfollow</button>
                            </div>
                          
                        </div>
                    
                </div>
                )})

                }

            </div>

        )
    }
}

export default FollowingCard;
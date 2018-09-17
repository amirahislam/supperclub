import React, { Component } from 'react';
import '../../css/DashboardStyles/DashboardStyle.css';
import '../../css/DashboardStyles/DashboardStyle-responsive.css';
import '../../css/DashboardStyles/DashboardBootstrap.css';
import '../../css/DashboardStyles/Dashboard-custom.css';
import AddEventModal from '../modals/AddEventModal';
import FollowModal from '../modals/FollowModal';
import FollowingModal from '../modals/FollowingModal';
import EventsButton from '../EventsButton';
import HomeButton from '../HomeButton';
import PatronCalendarModal from '../modals/PatronCalendarModal';
let uuidv4 = require('uuid/v4');

class PatronSideBar extends Component {

    componentDidMount() {
        // console.log('mounted');
     
    }

    ProfilePic = props => (
  
        <div className='col-md-4'>
          <div className="row">
            <div className="card profileCard">
              <img className="card-img-top" src={this.props.userPP} alt={this.props.userName} />
                <div className="card-body">
                  <h5 className="card-title">{this.props.userFullName}</h5>
                  <p className="card-text">Add your bio here</p>
                  <a href="#" className="btn btn-primary">Find suppers!!!</a>
                </div>
            </div>
          </div>
        </div>
    
    )
    
    render() {
        return (
            <aside>
          <div id="sidebar" className="nav-collapse ">
              {/* <!-- sidebar menu start--> */}
              <ul  className="sidebar-menu" id="nav-accordion">
              
                <p  className="centered"><a href="profile.html"><img src={this.props.userPP} alt={this.props.userFullName} className="img-circle" width="60"/></a></p>
                <h5  className="centered">{this.props.username}</h5>
                <h6  className="centered">{this.props.userType}</h6>
                
                <HomeButton 

                />

                <EventsButton 

                />

                <div>
                    <AddEventModal 
                      key={uuidv4()}
                      onClick={this.props.onClick}
                    />
                </div>
                    <PatronCalendarModal
                      onClick={this.props.onClick}
                    />
                <div>
                    <FollowModal 
                      key={uuidv4()}
                      onClick={this.props.onClick}
                      currentPatrons={this.props.currentPatrons}
                      patronName={this.props.patron}
                    />
                </div>
                <div>
                    <FollowingModal 
                      key={uuidv4()}
                      onClick={this.props.onUnfollowClick}
                      dataFollowings={this.props.dataFollowings}
                      patronName={this.props.patron}
                    />
                </div>
              </ul>
              {/* <!-- sidebar menu end--> */}
              
          </div>
      </aside>
        )
    }

}

export default PatronSideBar;
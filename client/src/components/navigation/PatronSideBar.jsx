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
import ChefCalendarModal from '../modals/ChefCalendarModal'
let uuidv4 = require('uuid/v4');

class PatronSideBar extends Component {

    componentDidMount() {
        console.log('mounted');
     
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
              	  	
                  <HomeButton 
                
                  />

                  <EventsButton 
                    
                  />

                  <ChefCalendarModal
                  onClick={this.props.onClick}
                  />
                    <div>
                        <AddEventModal 
                            key={uuidv4()}
                            onClick={this.props.onClick}
                        />
                    </div>
                    <div>
                        <FollowModal 
                            key={uuidv4()}
                            onClick={this.props.onClick}
                            currentPatrons={this.props.currentPatrons}
                            patronName={this.props.patronName}
                        />
                    </div>
                    <div>
                        <FollowingModal 
                            key={uuidv4()}
                            onClick={this.props.onFollowClick}
                            currentFollowing={this.props.currentFollowing}
                            patronName={this.props.patronName}
                        />
                    </div>
                  <li  className="sub-menu">
                      <a href="javascript:;" >
                          <i  className=" fa fa-bar-chart-o"></i>
                          <span>Revenue</span>
                      </a>
                      <ul  className="sub">
                          <li><a  href="morris.html">Morris</a></li>
                          <li><a  href="chartjs.html">Chartjs</a></li>
                      </ul>
                  </li>

              </ul>
              {/* <!-- sidebar menu end--> */}
          </div>
      </aside>
        )
    }

}

export default PatronSideBar;
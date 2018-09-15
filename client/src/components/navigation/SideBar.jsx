import React, { Component } from 'react';
import '../../css/DashboardStyles/DashboardStyle.css';
import '../../css/DashboardStyles/DashboardStyle-responsive.css';
import '../../css/DashboardStyles/DashboardBootstrap.css';
import '../../css/DashboardStyles/Dashboard-custom.css';
import AddEventModal from '../modals/AddEventModal';

class SideBar extends Component {
    
    render() {
        return (
            <aside>
          <div id="sidebar"   className="nav-collapse ">
              {/* <!-- sidebar menu start--> */}
              <ul  className="sidebar-menu" id="nav-accordion">
              
              	  <p  className="centered"><a href="profile.html"><img src={this.props.userPP}  className="img-circle" width="60"/></a></p>
              	  <h5  className="centered">{this.props.username}</h5>
              	  	
                  <li  className="mt">
                      <a  className="active" href="index.html">
                          <i  className="fa fa-dashboard"></i>
                          <span>Dashboard</span>
                      </a>
                  </li>

                  <li  className="sub-menu">
                      <a href="javascript:;" >
                          <i  className="fa fa-star"></i>
                          <span>Reviews</span>
                      </a>
                  </li>

                  <li  className="sub-menu">
                      <a href="javascript:;" >
                          <i  className="fa fa-calendar-o"></i>
                          <span>Calender</span>
                      </a>
                  </li>
                    <AddEventModal 
                    
                    />
                  <li  className="sub-menu">
                      <a href="javascript:;" >
                          <i  className="fa fa-list-ul"></i>
                          <span>Guests</span>
                      </a>
                      <ul  className="sub">
                          <li><a  href="form_component.html">Form Components</a></li>
                      </ul>
                  </li>
                  <li  className="sub-menu">
                      <a href="javascript:;" >
                          <i  className="fa fa-fast-backward"></i>
                          <span>Past Events</span>
                      </a>
                  </li>
                  {/* <li  className="sub-menu">
                      <a href="javascript:;" >
                          <i  className=" fa fa-line-chart"></i>
                          <span>Revenue</span>
                      </a>
                  </li> */}

              </ul>
              {/* <!-- sidebar menu end--> */}
          </div>
      </aside>
        )
    }

}

export default SideBar;
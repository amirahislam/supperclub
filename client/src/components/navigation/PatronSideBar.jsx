import React, { Component } from 'react';
import '../../css/DashboardStyles/DashboardStyle.css';
import '../../css/DashboardStyles/DashboardStyle-responsive.css';
import '../../css/DashboardStyles/DashboardBootstrap.css';
import '../../css/DashboardStyles/Dashboard-custom.css';

import AddEventModal from '../modals/AddEventModal';

class PatronSideBar extends Component {

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
          <div id="sidebar"   className="nav-collapse ">
              {/* <!-- sidebar menu start--> */}
              <ul  className="sidebar-menu" id="nav-accordion">
              
              	  <p  className="centered"><a href="profile.html"><img src={this.props.userPP} alt={this.props.userFullName} className="img-circle" width="60"/></a></p>
              	  <h5  className="centered">{this.props.username}</h5>
              	  	
                  <li  className="mt">
                      <a  className="active" href="index.html">
                          <i  className="fa fa-dashboard"></i>
                          <span>Dashboard</span>
                      </a>
                  </li>

                  <li  className="sub-menu">
                      <a href="javascript:;" >
                          <i  className="fa fa-desktop"></i>
                          <span>Reviews</span>
                      </a>
                      <ul  className="sub">
                          <li><a  href="general.html">General</a></li>
                          <li><a  href="buttons.html">Buttons</a></li>
                          <li><a  href="panels.html">Panels</a></li>
                      </ul>
                  </li>

                  <li  className="sub-menu">
                      <a href="javascript:;" >
                          <i  className="fa fa-cogs"></i>
                          <span>Calender</span>
                      </a>
                      <ul  className="sub">
                          <li><a  href="calendar.html">Calendar</a></li>
                          <li><a  href="gallery.html">Gallery</a></li>
                          <li><a  href="todo_list.html">Todo List</a></li>
                      </ul>
                  </li>
                    <AddEventModal 
                    
                    />
                  <li  className="sub-menu">
                      <a href="javascript:;" >
                          <i  className="fa fa-tasks"></i>
                          <span>Guests</span>
                      </a>
                      <ul  className="sub">
                          <li><a  href="form_component.html">Form Components</a></li>
                      </ul>
                  </li>
                  <li  className="sub-menu">
                      <a href="javascript:;" >
                          <i  className="fa fa-th"></i>
                          <span>Location</span>
                      </a>
                      <ul  className="sub">
                          <li><a  href="basic_table.html">Basic Table</a></li>
                          <li><a  href="responsive_table.html">Responsive Table</a></li>
                      </ul>
                  </li>
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
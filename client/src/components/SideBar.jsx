import React, { Component } from 'react';
import './Dashboard Styles/DashboardStyle.css';
import './Dashboard Styles/DashboardStyle-responsive.css';
import './Dashboard Styles/DashboardBootstrap.css';

import { Link } from 'react-router-dom';

class SideBar extends Component {

    render() {
        return (
            <aside>
          <div id="sidebar"   className="nav-collapse ">
              {/* <!-- sidebar menu start--> */}
              <ul  className="sidebar-menu" id="nav-accordion">
              
              	  <p  className="centered"><a href="profile.html"><img src="assets/img/ui-sam.jpg"  className="img-circle" width="60"/></a></p>
              	  <h5  className="centered">Amirah Islam</h5>
              	  	
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
                  <li  className="sub-menu">
                      <a href="javascript:;" >
                          <i  className="fa fa-book"></i>
                          <span>Creat Event</span>
                      </a>
                      <ul  className="sub">
                          <li><a  href="blank.html">Blank Page</a></li>
                          <li><a  href="login.html">Login</a></li>
                          <li><a  href="lock_screen.html">Lock Screen</a></li>
                      </ul>
                  </li>
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

export default SideBar;
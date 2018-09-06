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
              
              	  <p  className="centered"><a href="profile.html"><img src="assets/img/ui-sam.jpg"  className="img-circle" width="60"/></a></p>
              	  <h5  className="centered">Amirah Islam</h5>
                    <h6 className="centered">Boss Chef</h6>
              	  	
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
                      <ul  className="sub">
                          <li><a  href="general.html">General</a></li>
                          <li><a  href="buttons.html">Buttons</a></li>
                          <li><a  href="panels.html">Panels</a></li>
                      </ul>
                  </li>

                  <li  className="sub-menu">
                      <a href="javascript:;" >
                          <i  className="fa fa-calendar-o"></i>
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
                          <i  className="fa fa-list-ul"></i>
                          <span>Guests</span>
                      </a>
                      <ul  className="sub">
                          <li><a  href="form_component.html">Form Components</a></li>
                      </ul>
                  </li>
                  <li  className="sub-menu">
                      <a href="javascript:;" >
                          <i  className="fa fa-globe"></i>
                          <span>Location</span>
                      </a>
                      <ul  className="sub">
                          <li><a  href="basic_table.html">Basic Table</a></li>
                          <li><a  href="responsive_table.html">Responsive Table</a></li>
                      </ul>
                  </li>
                  <li  className="sub-menu">
                      <a href="javascript:;" >
                          <i  className=" fa fa-line-chart"></i>
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
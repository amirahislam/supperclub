import React, { Component } from 'react';
import './SideToolBar.css';
import './SideToolBar-themes.css';
import { Link } from 'react-router-dom';

class SideToolBar extends Component {

    ProfilePic = props => (
  
        <div className='col-md-4'>
          <div className="row">
            <div className="card profileCard">
              <img className="card-img-top" src={props.userPP} alt={props.userName} />
                <div className="card-body">
                  <h5 className="card-title">{props.userName}</h5>
                  <p className="card-text">Add your bio here</p>
                  <a href="#" className="btn btn-primary">Find suppers!!!</a>
                </div>
            </div>
          </div>
        </div>
    
)

    render() {
        return (
            <div className="page-wrapper cool-theme sidebar-bg bg1 toggled">
            <a id="show-sidebar" className="btn btn-sm btn-dark" href="#">
                <i className="fas fa-bars"></i>
            </a>
            <nav id="sidebar" className="sidebar-wrapper">
                <div className="sidebar-content">
                    <div className="sidebar-brand">
                        <a href="#"></a>
                        <div id="close-sidebar">
                            <i className="fas fa-times"></i>
                        </div>
                    </div>
                    <div className="sidebar-header">
                        <div className="user-pic">
                            <img className="img-responsive img-rounded" src={this.props.userPP} alt={this.props.userName} />
                        </div>
                        <div className="user-info">
                            <span className="user-name">{this.props.firstName} 
                                <strong> {this.props.lastName}</strong>
                            </span>
                            <span className="user-role">Boss Chef</span>
                            <span className="user-status">
                                <i className="fa fa-circle"></i>
                                <span>Online</span>
                            </span>
                        </div>
                    </div>
                    {/* <!-- sidebar-header  --> */}
                
                {/* <!-- sidebar-search  --> */}
                <div className="sidebar-menu">
                    <ul>
                        <li className="header-menu">
                            <span>General</span>
                        </li>
                        <li className="sidebar-dropdown">
                            <a href="#">
                                <i className="fa fa-tachometer-alt"></i>
                                <span>Waitlist</span>
                                <span className="badge badge-pill badge-danger">New</span>
                            </a>
                            <div className="sidebar-submenu">
                                <ul>
                                    <li>
                                        <a href="#">Dashboard 1
                                            <span className="badge badge-pill badge-success">Pro</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">Dashboard 2</a>
                                    </li>
                                    <li>
                                        <a href="#">Dashboard 3</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="sidebar-dropdown">
                            <a href="#">
                                <i className="fa fa-shopping-cart"></i>
                                <span>Reviews</span>
                                <span className="badge badge-pill badge-primary">3</span>
                            </a>
                            <div className="sidebar-submenu">
                                <ul>
                                    <li>
                                        <a href="#">Products

                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">Orders</a>
                                    </li>
                                    <li>
                                        <a href="#">Credit card</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="sidebar-dropdown">
                            <a href="#">
                                <i className="far fa-gem"></i>
                                <span>Events</span>
                            </a>
                            <div className="sidebar-submenu">
                                <ul>
                                    <li>
                                        <a href="#">General</a>
                                    </li>
                                    <li>
                                        <a href="#">Panels</a>
                                    </li>
                                    <li>
                                        <a href="#">Tables</a>
                                    </li>
                                    <li>
                                        <a href="#">Icons</a>
                                    </li>
                                    <li>
                                        <a href="#">Forms</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="sidebar-dropdown">
                            <a href="#">
                                <i className="fa fa-chart-line"></i>
                                <span>Revenue</span>
                            </a>
                            <div className="sidebar-submenu">
                                <ul>
                                    <li>
                                        <a href="#">Pie chart</a>
                                    </li>
                                    <li>
                                        <a href="#">Line chart</a>
                                    </li>
                                    <li>
                                        <a href="#">Bar chart</a>
                                    </li>
                                    <li>
                                        <a href="#">Histogram</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="sidebar-dropdown">
                            <a href="#">
                                <i className="fa fa-globe"></i>
                                <span>Locations</span>
                            </a>
                            <div className="sidebar-submenu">
                                <ul>
                                    <li>
                                        <a href="#">Google maps</a>
                                    </li>
                                    <li>
                                        <a href="#">Open street map</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="header-menu">
                            <span>Extra</span>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-calendar"></i>
                                <span>Calendar</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-folder"></i>
                                <span>Create Event</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-book"></i>
                                <span>Review Guests</span>
                            </a>
                        </li>
                    </ul>
                </div>
                {/* <!-- sidebar-menu  --> */}
            </div>
            {/* <!-- sidebar-content  --> */}
            {/* <div className="sidebar-footer">
                <div className="dropdown">

                    <a href="#" className="" id="dropdownMenuNotification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><a>
                        <i className="fa fa-bell"></i>
                        <span className="badge badge-pill badge-warning notification">3</span>
                    </a>
                    <div className="dropdown-menu notifications" aria-labelledby="dropdownMenuMessage">
                        <div className="notifications-header">
                            <i className="fa fa-bell"></i>
                            Notifications
                        </div>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">
                            <div className="notification-content">
                                <div className="icon">
                                    <i className="fas fa-check text-success border border-success"></i>
                                </div>
                                <div className="content">
                                    <div className="notification-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam explicabo</div>
                                    <div className="notification-time">
                                        6 minutes ago
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a className="dropdown-item" href="#">
                            <div className="notification-content">
                                <div className="icon">
                                    <i className="fas fa-exclamation text-info border border-info"></i>
                                </div>
                                <div className="content">
                                    <div className="notification-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam explicabo</div>
                                    <div className="notification-time">
                                        Today
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a className="dropdown-item" href="#">
                            <div className="notification-content">
                                <div className="icon">
                                    <i className="fas fa-exclamation-triangle text-warning border border-warning"></i>
                                </div>
                                <div className="content">
                                    <div className="notification-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam explicabo</div>
                                    <div className="notification-time">
                                        Yesterday
                                    </div>
                                </div>
                            </div>
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item text-center" href="#">View all notifications</a>
                    </div>
                </a>
                <div className="dropdown">
                    <a href="#" className="" id="dropdownMenuMessage" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fa fa-envelope"></i>
                        <span className="badge badge-pill badge-success notification">7</span>
                    </a>
                    <div className="dropdown-menu messages" aria-labelledby="dropdownMenuMessage">
                        <div className="messages-header">
                            <i className="fa fa-envelope"></i>
                            Messages
                        </div>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">
                            <div className="message-content">
                                <div className="pic">
                                    <img src="assets/img/user.jpg" alt=""/>
                                </div>
                                <div className="content">
                                    <div className="message-title">
                                        <strong> Jhon doe</strong>
                                    </div>
                                    <div className="message-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam explicabo</div>
                                </div>
                            </div>

                        </a>
                        <a className="dropdown-item" href="#">
                            <div className="message-content">
                                <div className="pic">
                                    <img src="assets/img/user.jpg" alt=""/>
                                </div>
                                <div className="content">
                                    <div className="message-title">
                                        <strong> Jhon doe</strong>
                                    </div>
                                    <div className="message-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam explicabo</div>
                                </div>
                            </div>

                        </a>
                        <a className="dropdown-item" href="#">
                            <div className="message-content">
                                <div className="pic">
                                    <img src="assets/img/user.jpg" alt=""/>
                                </div>
                                <div className="content">
                                    <div className="message-title">
                                        <strong> Jhon doe</strong>
                                    </div>
                                    <div className="message-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam explicabo</div>
                                </div>
                            </div>
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item text-center" href="#">View all messages</a>

                    </div>
                </div>
                <div className="dropdown">
                    <a href="#" className="" id="dropdownMenuMessage" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fa fa-cog"></i>
                        <span className="badge-sonar"></span>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuMessage">
                        <a className="dropdown-item" href="#">My profile</a>
                        <a className="dropdown-item" href="#">Help</a>
                        <a className="dropdown-item" href="#">Setting</a>
                    </div>
                </div>
                <div>
                    <a href="#">
                        <i className="fa fa-power-off"></i>
                    </a>
                </div>
            </div>
        
            
        </div> */}
            <div>
                </div>
            
        </nav>
        
        
    </div>

                    
            
        )
    }
}

export default SideToolBar;
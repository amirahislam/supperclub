import React from "react";
import '../css/DashboardStyles/DashboardStyle.css';
import '../css/DashboardStyles/DashboardStyle-responsive.css';
import '../css/DashboardStyles/DashboardBootstrap.css';
import '../pages/Patron/Timeline.css';


// Destructuring the type, className, children and onClick props, applying them to the button element
const FollowComponent = props => (

  <div>
    <button type="button" id="followButton"
        className="profile-01 centered followButton btn btn-primary" 
        {...props}
    ><i className="fa fa-telegram" aria-hidden="true"></i>Follow
    </button>
    <br/>
  </div>
       
    

);

export default FollowComponent;
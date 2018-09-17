import React from "react";
import '../css/DashboardStyles/DashboardStyle.css';
import '../css/DashboardStyles/DashboardStyle-responsive.css';
import '../css/DashboardStyles/DashboardBootstrap.css';
import '../pages/Patron/Timeline.css';


// Destructuring the type, className, children and onClick props, applying them to the button element
const UnfollowComponent = props => (

  <div>
    <button 
        className="profile-01 centered followButton" 
        {...props}
    >Unfollow
    </button>
  </div>
       
    

);

export default UnfollowComponent;
import React from 'react'
import BuzzComponent from '../BuzzComponent'
import '../../css/DashboardStyles/DashboardStyle.css';
import '../../css/DashboardStyles/DashboardStyle-responsive.css';
import '../../css/DashboardStyles/DashboardBootstrap.css';
import '../../css/DashboardStyles/Dashboard-custom.css';
import '../../pages/Patron/Timeline.css'

const ProfilePageTimeline = props => (
    
        <div className="ds timelineDiv">
        <h3>TIMELINE</h3>

        {
          props.myBuzz.map(buzz => {
            return(
            <BuzzComponent
                key={buzz._id}
                username={buzz.username}
                date={buzz.date}
                buzz={buzz.buzz}
            />
          )})
        }

        </div>
    

        
    )

export default ProfilePageTimeline;


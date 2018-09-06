import React from 'react'
import BuzzComponent from '../BuzzComponent'
import '../../css/DashboardStyles/DashboardStyle.css';
import '../../css/DashboardStyles/DashboardStyle-responsive.css';
import '../../css/DashboardStyles/DashboardBootstrap.css';
import '../../css/DashboardStyles/Dashboard-custom.css';
import '../../pages/Patron/Timeline.css'

const Timeline = props => (
    <div className="container">
        <div  className="col-lg-4 ds timelineDiv">
        <h3>TIMELINE</h3>
        {
          props.currentBuzz.map(buzz => {
            return(
            <BuzzComponent
                username={buzz.username}
                date={buzz.date}
                buzz={buzz.buzz}
            />
          )})
        }

        </div>
    </div>

        
    )

export default Timeline;


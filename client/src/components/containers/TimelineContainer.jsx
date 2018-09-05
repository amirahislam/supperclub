import React from 'react'
import BuzzComponent from '../BuzzComponent'
import '../../css/Dashboard Styles/DashboardStyle.css';
import '../../css/Dashboard Styles/DashboardStyle-responsive.css';
import '../../css/Dashboard Styles/DashboardBootstrap.css';
import '../../css/Dashboard Styles/Dashboard-custom.css';
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


import React from "react";
import '../css/DashboardStyles/EventInfo.css';

const EventLocation = props => {
    console.log(props);
    if (props.attending === "Yes") {
        return (
            <p><strong>Location:</strong> <br/> {props.eventLocation}</p>
        )
    } else {
        return (
            <p><strong>Location:</strong> <br/>SECRET</p>
        )
    }

};
    
export default EventLocation;
import React from "react";
import '../css/DashboardStyles/EventInfo.css';

const EditEventButton = props => {
    // console.log(this.props);
    if (props.yourEvent === "Your event") {
            return (
                <div>
                    <p align="center">
                        <a
                            className="btn btn-light"
                            data-toggle="collapse"
                            // value={this.props.value}
                            // onClick={this.click}
                        >
                            Edit event
                        </a>
                    </p>
                </div>
            )
    } else {
        return (
            <div></div>
        )
    }

};
    
export default EditEventButton;
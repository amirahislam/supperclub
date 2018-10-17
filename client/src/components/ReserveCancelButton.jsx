import React from "react";
import '../css/DashboardStyles/EventInfo.css';

const ReserveCancelButton = props => {
    if (props.attending === "Yes") {
        return (
            <div>
                <a
                    className="btn btn-light"
                    data-toggle="collapse"
                    value={props.value}
                    onClick={props.cancelSeat}
                >
                    Cancel your reservation
                </a>                
            </div>
        )
    } else {
        if (props.spotsLeft === 0) {
            return (
                <div>
                    <a
                        className="btn btn-light"
                        data-toggle="collapse"
                        value={props.value}
                        onClick={props.reserveSeat}
                    >
                        Event full
                    </a>                
                </div>
            )
        } else {
            return (
                <div>
                    <a
                        className="btn btn-light"
                        data-toggle="collapse"
                        value={props.value}
                        onClick={props.reserveSeat}
                    >
                        Reserve your seat
                    </a>                
                </div>
            )
        }     
    }
};

export default ReserveCancelButton;
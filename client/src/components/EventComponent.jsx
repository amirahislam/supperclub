import React from 'react'
import Moment from 'react-moment'
import '../pages/Patron/Timeline.css'


const EventComponent = props => (
    
    <div>
        <li>
            <a target="_blank" href="#">{props.username}</a>
            <a href="#" className="float-right">
                <Moment format="LLL"> 
                    {props.date}
                </Moment>
            </a>
            <p>{props.description}</p>
        </li>
        <hr />
    </div>
        
    )

export default EventComponent;


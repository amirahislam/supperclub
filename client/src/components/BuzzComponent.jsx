import React from 'react'
import Moment from 'react-moment'
import '../pages/Patron/Timeline.css'


const BuzzComponent = props => (
    
    <div>
        <li>
            <a target="_blank" href="https://www.totoprayogo.com/#">{props.username}</a>
            <a href="#" className="float-right">
                <Moment format="LLL"> 
                    {props.date}
                </Moment>
            </a>
            <p>{props.buzz}</p>
        </li>
        <hr />
    </div>
        
    )

export default BuzzComponent;


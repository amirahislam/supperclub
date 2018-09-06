import React from 'react'
import '../css/DashboardStyles/DashboardStyle.css';
import '../css/DashboardStyles/DashboardStyle-responsive.css';
import '../css/DashboardStyles/DashboardBootstrap.css';
import '../css/DashboardStyles/Dashboard-custom.css';
import '../pages/Patron/Timeline.css'


const FriendComponent = props => (
    
    <div>
        <li>
            <div  className="desc">
                <div  className="thumb">
                    <img  className="img-circle" src={props.img} width="35px" height="35px" align=""/>
                </div>
                <div  className="details">
                    <p><a href="#">{props.username}</a><br/>
                        <muted>Available</muted>
                    </p>
                </div>
            </div>
        </li>
        <br />
    </div>
        
    )

export default FriendComponent;


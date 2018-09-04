import React from 'react'
import Moment from 'react-moment'
import './Dashboard Styles/DashboardStyle.css';
import './Dashboard Styles/DashboardStyle-responsive.css';
import './Dashboard Styles/DashboardBootstrap.css';
import './Dashboard Styles/Dashboard-custom.css';
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


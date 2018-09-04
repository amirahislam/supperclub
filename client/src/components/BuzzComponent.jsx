import React from 'react'
import Moment from 'react-moment'
import './Dashboard Styles/DashboardStyle.css';
import './Dashboard Styles/DashboardStyle-responsive.css';
import './Dashboard Styles/DashboardBootstrap.css';
import './Dashboard Styles/Dashboard-custom.css';
import '../pages/Patron/Timeline.css'


const BuzzComponent = props => (
    
    <div className="timelineObj">
        <div  className="desc">
            <div  className="thumb">
                <span  className="badge bg-theme"><i  className="fa fa-clock-o"></i></span>
            </div>
            <div  className="details">
                <p>
                    <muted> 
                        <Moment format="LLL" className="float-right"> 
                            {props.date}
                        </Moment>
                    </muted><br/>
                    <a target="_blank" href="#">{props.username}</a><br />{props.buzz}<br/>
                </p>
            </div>
        </div>
    </div>
        
    )

export default BuzzComponent;


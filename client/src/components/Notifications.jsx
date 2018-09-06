import React, { Component } from 'react';
import '../css/DashboardStyles/DashboardStyle.css';
import '../css/DashboardStyles/DashboardStyle-responsive.css';
import '../css/DashboardStyles/DashboardBootstrap.css';
import '../css/DashboardStyles/Dashboard-custom.css';

import { Link } from 'react-router-dom';

class Notifications extends Component {

    render() {
        return(
            <section className="wrapper" id="notifications" align="">
            <div  className="row">
                  <div  className="col-lg-9 main-chart">
                  
                  	<div  className="row mtbox">
                  		<div  className="col-md-2 col-sm-2 col-md-offset-1 box0">
                  			<div  className="box1">
					  			<span  className="fa fa-heart"></span>
					  			<h3>933</h3>
                  			</div>
					  			<p>933 People liked your page the last 24hs. Whoohoo!</p>
                  		</div>
                  		<div  className="col-md-2 col-sm-2 box0">
                  			<div  className="box1">
					  			<span  className="fa fa-file-text-o"></span>
					  			<h3>+48</h3>
                  			</div>
					  			<p>48 New files were added in your cloud storage.</p>
                  		</div>
                  		<div  className="col-md-2 col-sm-2 box0">
                  			<div  className="box1">
					  			<span  className="fa fa-inbox"></span>
					  			<h3>23</h3>
                  			</div>
					  			<p>You have 23 unread messages in your inbox.</p>
                  		</div>
                  		<div  className="col-md-2 col-sm-2 box0">
                  			<div  className="box1">
					  			<span  className="fa fa-calendar"></span>
					  			<h3>+10</h3>
                  			</div>
					  			<p>More than 10 news were added in your reader.</p>
                  		</div>
                  		<div  className="col-md-2 col-sm-2 box0">
                  			<div  className="box1">
					  			<span  className="fa fa-address-card"></span>
					  			<h3>OK!</h3>
                  			</div>
					  			<p>Your server is working perfectly. Relax & enjoy.</p>
                  		</div>
                  	
                  	</div>
                </div>
                </div>
                </section>
                      
        )
    }
}

export default Notifications;
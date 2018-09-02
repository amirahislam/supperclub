import React, { Component } from 'react';
import './Dashboard Styles/DashboardStyle.css';
import './Dashboard Styles/DashboardStyle-responsive.css';
import './Dashboard Styles/DashboardBootstrap.css';
import './Dashboard Styles/Dashboard-custom.css';

import { Link } from 'react-router-dom';

class ActivitiesPanel extends Component {

    render() {
        return (
            <section align="right">
            <div  className="col-lg-3 ds">
                    {/* <!--COMPLETED ACTIONS DONUTS CHART--> */}
						<h3>TIMELINE</h3>
                                        
                      {/* <!-- First Action --> */}
                      <div  className="desc">
                      	<div  className="thumb">
                      		<span  className="badge bg-theme"><i  className="fa fa-clock-o"></i></span>
                      	</div>
                      	<div  className="details">
                      		<p><muted>2 Minutes Ago</muted><br/>
                      		   <a href="#">James Brown</a> subscribed to your newsletter.<br/>
                      		</p>
                      	</div>
                      </div>
                      {/* <!-- Second Action --> */}
                      <div  className="desc">
                      	<div  className="thumb">
                      		<span  className="badge bg-theme"><i  className="fa fa-clock-o"></i></span>
                      	</div>
                      	<div  className="details">
                      		<p><muted>3 Hours Ago</muted><br/>
                      		   <a href="#">Diana Kennedy</a> purchased a year subscription.<br/>
                      		</p>
                      	</div>
                      </div>
                      {/* <!-- Third Action --> */}
                      <div  className="desc">
                      	<div  className="thumb">
                      		<span  className="badge bg-theme"><i  className="fa fa-clock-o"></i></span>
                      	</div>
                      	<div  className="details">
                      		<p><muted>7 Hours Ago</muted><br/>
                      		   <a href="#">Brandon Page</a> purchased a year subscription.<br/>
                      		</p>
                      	</div>
                      </div>
                      {/* <!-- Fourth Action --> */}
                      <div  className="desc">
                      	<div  className="thumb">
                      		<span  className="badge bg-theme"><i  className="fa fa-clock-o"></i></span>
                      	</div>
                      	<div  className="details">
                      		<p><muted>11 Hours Ago</muted><br/>
                      		   <a href="#">Mark Twain</a> commented your post.<br/>
                      		</p>
                      	</div>
                      </div>
                      {/* <!-- Fifth Action --> */}
                      <div  className="desc">
                      	<div  className="thumb">
                      		<span  className="badge bg-theme"><i  className="fa fa-clock-o"></i></span>
                      	</div>
                      	<div  className="details">
                      		<p><muted>18 Hours Ago</muted><br/>
                      		   <a href="#">Daniel Pratt</a> purchased a wallet in your store.<br/>
                      		</p>
                      	</div>
                      </div>

                       {/* <!-- USERS ONLINE SECTION --> */}
						<h3>FRIENDS</h3>
                      {/* <!-- First Member --> */}
                      <div  className="desc">
                      	<div  className="thumb">
                      		<img  className="img-circle" src="assets/img/ui-divya.jpg" width="35px" height="35px" align=""/>
                      	</div>
                      	<div  className="details">
                      		<p><a href="#">DIVYA MANIAN</a><br/>
                      		   <muted>Available</muted>
                      		</p>
                      	</div>
                      </div>
                      {/* <!-- Second Member --> */}
                      <div  className="desc">
                      	<div  className="thumb">
                      		<img  className="img-circle" src="assets/img/ui-sherman.jpg" width="35px" height="35px" align=""/>
                      	</div>
                      	<div  className="details">
                      		<p><a href="#">DJ SHERMAN</a><br/>
                      		   <muted>I am Busy</muted>
                      		</p>
                      	</div>
                      </div>
                      {/* <!-- Third Member --> */}
                      <div  className="desc">
                      	<div  className="thumb">
                      		<img  className="img-circle" src="assets/img/ui-danro.jpg" width="35px" height="35px" align=""/>
                      	</div>
                      	<div  className="details">
                      		<p><a href="#">DAN ROGERS</a><br/>
                      		   <muted>Available</muted>
                      		</p>
                      	</div>
                      </div>
                      {/* <!-- Fourth Member --> */}
                      <div  className="desc">
                      	<div  className="thumb">
                      		<img  className="img-circle" src="assets/img/ui-zac.jpg" width="35px" height="35px" align=""/>
                      	</div>
                      	<div  className="details">
                      		<p><a href="#">Zac Sniders</a><br/>
                      		   <muted>Available</muted>
                      		</p>
                      	</div>
                      </div>
                      {/* <!-- Fifth Member --> */}
                      <div  className="desc">
                      	<div  className="thumb">
                      		<img  className="img-circle" src="assets/img/ui-sam.jpg" width="35px" height="35px" align=""/>
                      	</div>
                      	<div  className="details">
                      		<p><a href="#">Marcel Newman</a><br/>
                      		   <muted>Available</muted>
                      		</p>
                      	</div>
                      </div>

                        {/* <!-- CALENDAR--> */}
                        <div id="calendar"  className="mb">
                            <div  className="panel green-panel no-margin">
                                <div  className="panel-body">
                                    <div id="date-popover"  className="popover top"> 
                                    {/* style="cursor: pointer; disadding: block; margin-left: 33%; margin-top: -50px; width: 175px;"> */}
                                        <div  className="arrow"></div>
                                        <h3  className="popover-title"></h3> 
                                        {/* style="disadding: none;" */}
                                        <div id="date-popover-content"  className="popover-content"></div>
                                    </div>
                                    <div id="my-calendar"></div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- / calendar --> */}
                      
                  </div>
                  </section>
          
      
        )
    }
}

export default ActivitiesPanel;
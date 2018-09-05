import React, { Component } from 'react';
import '../../css/Dashboard Styles/DashboardStyle.css';
import '../../css/Dashboard Styles/DashboardStyle-responsive.css';
import '../../css/Dashboard Styles/DashboardBootstrap.css';
import '../../css/Dashboard Styles/Dashboard-custom.css';

class ActivitiesPanel extends Component {

    render() {
        return (
            <div className="container">
            <div  className="col-lg-4 ds">
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

                      
                  </div>
                  </div>
				  
          
      
        )
    }
}

export default ActivitiesPanel;
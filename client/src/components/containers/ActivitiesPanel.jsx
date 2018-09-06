import React, { Component } from 'react';
import '../../css/DashboardStyles/DashboardStyle.css';
import '../../css/DashboardStyles/DashboardStyle-responsive.css';
import '../../css/DashboardStyles/DashboardBootstrap.css';
import '../../css/DashboardStyles/Dashboard-custom.css';

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
                      		   <a href="#">James Brown</a> just requested to join "Desi Treats" club.<br/>
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
                      		   <a href="#">Diana Kennedy</a> just added a review.<br/>
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
                      		   <a href="#">Brandon Page</a> commented on your post.<br/>
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
                      		   <a href="#">Mark Twain</a> commented on your post.<br/>
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
                      		   <a href="#">Daniel Pratt</a> just sent payment.<br/>
                      		</p>
                      	</div>
                      </div>

                       {/* <!-- USERS ONLINE SECTION --> */}
						<h3>FRIENDS</h3>
                      {/* <!-- First Member --> */}
                      <div  className="desc">
                      	<div  className="thumb">
                      		<img  className="img-circle" src="https://media.licdn.com/dms/image/C4E03AQFcUomweFEvBg/profile-displayphoto-shrink_800_800/0?e=1541635200&v=beta&t=wFuAeWeeTCJx9MFuFtIB32nRZm3QfdLK_LP82a3egWA" width="35px" height="35px" align=""/>
                      	</div>
                      	<div  className="details">
                      		<p><a href="#">Christine Ronk</a><br/>
                      		   <muted>Available</muted>
                      		</p>
                      	</div>
                      </div>
                      {/* <!-- Second Member --> */}
                      <div  className="desc">
                      	<div  className="thumb">
                      		<img  className="img-circle" src="https://media.licdn.com/dms/image/C5103AQEEmIzp8GY9Ig/profile-displayphoto-shrink_800_800/0?e=1541635200&v=beta&t=YgoG4VLZVEH3jbzwDEiItHZrogidsQJxAdWXQM987UU" width="35px" height="35px" align=""/>
                      	</div>
                      	<div  className="details">
                      		<p><a href="#">Elvira Barrientos</a><br/>
                      		   <muted>I am Busy</muted>
                      		</p>
                      	</div>
                      </div>
                      {/* <!-- Third Member --> */}
                      <div  className="desc">
                      	<div  className="thumb">
                      		<img  className="img-circle" src="https://media.licdn.com/dms/image/C5603AQGpARzM1uPCFA/profile-displayphoto-shrink_800_800/0?e=1541635200&v=beta&t=IumLv1HEFdtwbggtrGHmbFyOHvuEDYeubjUow-RR138" width="35px" height="35px" align=""/>
                      	</div>
                      	<div  className="details">
                      		<p><a href="#">Tyler Whitson</a><br/>
                      		   <muted>Available</muted>
                      		</p>
                      	</div>
                      </div>
                      {/* <!-- Fourth Member --> */}
                      <div  className="desc">
                      	<div  className="thumb">
                      		<img  className="img-circle" src="https://media.licdn.com/dms/image/C4E03AQEe8NEo9daVCQ/profile-displayphoto-shrink_800_800/0?e=1541635200&v=beta&t=RkPAlhqRFMhqdXMqAtbWRo5kM13CMtRhgx9LDQDKk3s" width="35px" height="35px" align=""/>
                      	</div>
                      	<div  className="details">
                      		<p><a href="#">Sepehr Olfatmanesh</a><br/>
                      		   <muted>Available</muted>
                      		</p>
                      	</div>
                      </div>
                      {/* <!-- Fifth Member --> */}
                      <div  className="desc">
                      	<div  className="thumb">
                      		<img  className="img-circle" src="http://www3.pictures.zimbio.com/gi/Josh+Trimble+Virginia+Tech+v+Alabama+1Cwus2kGwl5l.jpg" width="35px" height="35px" align=""/>
                      	</div>
                      	<div  className="details">
                      		<p><a href="#">Josh Trimble</a><br/>
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
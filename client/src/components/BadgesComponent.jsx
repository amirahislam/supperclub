import React, { Component } from 'react';
import '../css/DashboardStyles/DashboardStyle.css';
import '../css/DashboardStyles/DashboardStyle-responsive.css';
import '../css/DashboardStyles/DashboardBootstrap.css';

import { Link } from 'react-router-dom';

class Badges extends Component {

    render() {
        return (
            <div  className="col-lg-4 col-md-4 col-sm-4 mb">
                      		<div className="darkblue-panel pn">
                      			<div className="darkblue-header">
						  			<h5>BADGES</h5>
                      			</div>
                      			<h1 className="mt"><i className="fa fa-star fa-2x"></i></h1>
								<p>+ 2 NEW REVIEWS</p>
								
									<div className="centered">
										<h5><i className="fa fa-trophy"></i> 17,988</h5>
									</div>
								
                      		</div>
                              </div>
                
                        
        )
    }
}

export default Badges;

import React, { Component } from 'react';
import './Dashboard Styles/DashboardStyle.css';
import './Dashboard Styles/DashboardStyle-responsive.css';
import './Dashboard Styles/DashboardBootstrap.css';

import { Link } from 'react-router-dom';

class SocialMedia extends Component {

    render() {
        return (
            <div  className="col-lg-4 col-md-4 col-sm-4 mb">
							{/* <!-- INSTAGRAM PANEL --> */}
							<div  className="instagram-panel pn">
								<i  className="fa fa-instagram fa-4x"></i>
								<p>@THISISYOU<br/>
									5 min. ago
								</p>
								<p><i  className="fa fa-comment"></i> 18 | <i  className="fa fa-heart"></i> 49</p>
							</div>
                        </div>
                        // <!-- /col-md-4 -->
                        
        )
    }
}

export default SocialMedia;



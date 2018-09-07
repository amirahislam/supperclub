import React, { Component } from 'react';
import '../css/DashboardStyles/DashboardStyle.css';
import '../css/DashboardStyles/DashboardStyle-responsive.css';
import '../css/DashboardStyles/DashboardBootstrap.css';
import '../css/DashboardStyles/Dashboard-custom.css';
import '../css/DashboardStyles/SocialMedia.css';

import { Link } from 'react-router-dom';

class SocialMedia extends Component {

    render() {
        return (
            <div className="socialMediaDiv">
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



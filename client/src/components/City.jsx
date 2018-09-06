import React, { Component } from 'react';
import '../css/DashboardStyles/DashboardStyle.css';
import '../css/DashboardStyles/DashboardStyle-responsive.css';
import '../css/DashboardStyles/DashboardBootstrap.css';

import { Link } from 'react-router-dom';

class City extends Component {

    render() {
        return (
            <div className="col-lg-4 col-md-4 col-sm-4 mb">
							<div class="weather pn">
								<i class="fa fa-home fa-4x"></i>
								<h2>Hyde Park</h2>
								<h4>AUSTIN</h4>
							</div>
						</div>
        )
    }
}

export default City;
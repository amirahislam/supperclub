import React, { Component } from 'react';
import '../css/DashboardStyles/DashboardStyle.css';
import '../css/DashboardStyles/DashboardStyle-responsive.css';
import '../css/DashboardStyles/DashboardBootstrap.css';

import { Link } from 'react-router-dom';

class City extends Component {

    render() {
        return (
            <div class="col-lg-4 col-md-4 col-sm-4 mb">
							<div class="weather-2 pn">
								<div class="weather-2-header">
									<div class="row">
										<div class="col-sm-6 col-xs-6">
											<p>HYDE PARK</p>
										</div>
										<div class="col-sm-6 col-xs-6 goright">
											<p class="small">Austin</p>
										</div>
									</div>
								</div>
                                {/* <!-- /weather-2 header --> */}
								<div class="row centered">
									<img src="http://stonecreektherapy.com/wp-content/uploads/2015/07/austin-sign.jpg" class="img" width="220"/>			
								</div>
								{/* <div class="row data">
									<div class="col-sm-6 col-xs-6 goleft">
										<h4><b>16 ºC</b></h4> 
										<h6>21º max</h6>
										<h6>8º min</h6> 
									</div>
									<div class="col-sm-6 col-xs-6 goright">
										<h5><i class="fa fa-sun-o fa-2x"></i></h5>
										<h6><b>Sunny</b></h6>
										<h5>7:15 am</h5>
									</div>
								</div> */}
							</div>
						</div>
        )
    }
}

export default City;
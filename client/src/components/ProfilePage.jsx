import React, { Component } from 'react';
import '../css/Dashboard Styles/DashboardStyle.css';
import '../css/Dashboard Styles/DashboardStyle-responsive.css';
import '../css/Dashboard Styles/DashboardBootstrap.css';

import { Link } from 'react-router-dom';

class ProfilePage extends Component {

    render () {
        return (
            <div className="container">
            <div className="wrapper chefPage">
            <div className="row">
            <div class="col-lg-10 col-md-10 col-sm-10 mb">
							<div class="content-panel pn">
								<div id="profile-02">
									<div class="user">
										<img src="https://picture-cdn.wheretoget.it/0fanh6-l.jpg" class="img-circle" width="80"/>
										<h4>HIPSTER DUDE</h4>
									</div>
								</div>
                                <div class="profile-01 centered">
                            <p>ADD TO CONTACT LIST</p>
                        </div>
							</div>
								{/* <div class="pr2-social centered">
									<a href="#"><i class="fa fa-twitter"></i></a>
									<a href="#"><i class="fa fa-facebook"></i></a>
									<a href="#"><i class="fa fa-dribbble"></i></a>
								</div> */}
                             
                            {/* <! --/panel --> */}
						</div>
					</div>
                    </div>
                    </div>
        )
    }
}

export default ProfilePage;
import React, { Component } from 'react';
import '../css/DashboardStyles/DashboardStyle.css';
import '../css/DashboardStyles/DashboardStyle-responsive.css';
import '../css/DashboardStyles/DashboardBootstrap.css';

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
								<p><h5><i class="fa fa-telegram" id="friendcard"></i>FOLLOW</h5></p>
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
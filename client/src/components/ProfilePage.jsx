import React, { Component } from 'react';
import '../css/DashboardStyles/DashboardStyle.css';
import '../css/DashboardStyles/DashboardStyle-responsive.css';
import '../css/DashboardStyles/DashboardBootstrap.css';
import SocialMedia from './SocialMedia';
import Badges from './BadgesComponent';
import City from './City';
import ProfilePageTimeline from './containers/ProfilePageTimeline';
import API from "../utils/API";
import '../css/DashboardStyles/ProfilePage.css';

class ProfilePage extends Component {
	state = {
		redirect: false,
		currentBuzz: [],
		myBuzz: [],
		currentFollowings: [],
        userType: '',
	}

	componentDidMount() {
        this.getBuzz();
    
	}
	
	getBuzz = () => {
        API.getBuzz()
          .then(res => {
			this.setState({ currentBuzz: res.data });
			this.getMyBuzz()
			}
        )
		  .catch(err => console.log(err))
	}

	getMyBuzz = () => {
		let theBuzz = this.state.currentBuzz
		let myBuzz = []
		console.log("HERE IS ALL THE CURRENT BUZZ", theBuzz)

		for (var v=0; v<theBuzz.length; v++) {
			if (theBuzz[v].username === this.props.patron) {
				console.log("THIS IS MY BUZZ")
				myBuzz.push(theBuzz[v])
			} else {
				console.log("THIS IS NOT MY BUZZ, SORRY.")
			}
		}
		console.log("MY BUZZ:", myBuzz)
		this.setState({ myBuzz: myBuzz });

		
	}
	
    render () {
        return (
            <div className="container">
                <div className="row profPageWrapper">
            	  <div className="col-lg-12 col-md-12 col-sm-12 mb">
					<div className="content-panel pn">
						<div id="profile-02">
							<div className="user">
								<img src={this.props.patronimg} alt={this.props.patron} className="img-circle" width="300" height="200"/>
								<h4>{this.props.patron}</h4>
							</div>
						</div>
						<div className="profile-01 centered">
							<p><i className="fa fa-telegram" id="friendcard"></i>FOLLOW</p>
						</div>
					</div>
				  </div>
				</div>

				<div className="row">
				  <div className="col-lg-12 col-md-12 col-sm-12 mb">
				  	<div className="row profSocialWrapper">
						<SocialMedia />
						<City />
						<Badges />
					</div>
				  </div>
				</div>

				<div className="row">
				  <div className="col-lg-12 col-md-12 col-sm-12 mb">
				    <div className="row profTimelineWrapper">
					  <ProfilePageTimeline 
					  myBuzz={this.state.myBuzz}
					  />
				    </div>
				  </div>
				</div>

            </div>
        )
    }
}

export default ProfilePage;
import React, { Component } from 'react';
import '../../css/DashboardStyles/DashboardStyle.css';
import '../../css/DashboardStyles/DashboardStyle-responsive.css';
import '../../css/DashboardStyles/DashboardBootstrap.css';
import '../../css/DashboardStyles/Dashboard-custom.css';


 class FooterPages extends Component {
     render() {
         return (
            <footer class="site-footer">
            <div class="text-center">
            &copy; Copyright <strong>Secret Supper Club </strong>. All Rights Reserved
                {/* <a href="general.html#" class="go-top"> */}
                    {/* <i class="fa fa-angle-up"></i> */}
                {/* </a> */}
            </div>
        </footer>
         )
     }
 }

 export default FooterPages;
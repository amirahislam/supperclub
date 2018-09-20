import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import '../../css/DashboardStyles/Creative.css';
// import './Creative.min.css';
import '../../css/DashboardStyles/Footer.css';

class Footer extends Component {
    render() {
        return (
            <div>
            <footer id="footer">
            <div class="container">
                  <div class="copyright">
                    &copy; Copyright <strong>Secret Supper Club </strong>. All Rights Reserved
                  </div>
                  
                </div>
              </footer>
            
              <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
              </div>
        )
    }
}

export default Footer;

   
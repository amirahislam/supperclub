import React, { Component } from 'react';
import '../css/Dashboard Styles/DashboardStyle.css';
import '../css/Dashboard Styles/DashboardStyle-responsive.css';
import '../css/Dashboard Styles/DashboardBootstrap.css';

import { Link } from 'react-router-dom';

class ToDoPanel extends Component {

    render() {
        return (
            <div class="col-lg-4 col-md-4 col-sm-4 mb">
							<div class="steps pn">
							    <input id='op1' name='op1' type='checkbox' checked/>
							    <label for='op1'>Update Profile</label>
							    <input id='op2' name='op2' type='checkbox'/>
							    <label for='op2'>Contact Paul</label>
							    <input id='op3' name='op3' type='checkbox'/>
							    <label for='op3'>Enjoy Life</label>
							    <input type='submit' value='All Done!' id='submit'/>
							</div>
						</div>
        )
    }
}

export default ToDoPanel;
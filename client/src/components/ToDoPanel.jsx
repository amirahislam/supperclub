import React, { Component } from 'react';
import '../css/DashboardStyles/DashboardStyle.css';
import '../css/DashboardStyles/DashboardStyle-responsive.css';
import '../css/DashboardStyles/DashboardBootstrap.css';
import '../pages/Patron/Patron.css'

import { Link } from 'react-router-dom';

class ToDoPanel extends Component {

    render() {
        return (
            
			<div className="steps pn toDoPanel">
				<input id='op1' name='op1' type='checkbox' checked/>
				<label for='op1'>Check Guestlist</label>
				<input id='op2' name='op2' type='checkbox'/>
				<label for='op2'>Send out location</label>
				<input id='op3' name='op3' type='checkbox'/>
				<label for='op3'>Contact local suppliers</label>
				<input type='submit' value='All Done!' id='submit'/>
			</div>
						
        )
    }
}

export default ToDoPanel;
import React from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import '../css/DashboardStyles/Follow.css';



class ChefEventsButton extends React.Component {

    componentDidMount() {
        console.log('mounted');
     
    }

        constructor(props, context) {
        super(props, context);  
      
        this.state = {
        

        };

      }

    render() {
      
      return (
        <div>
            <li className="sub-menu" onClick={this.props.onClick}>
                <a href="/chefevents">
                <span className="addEvent" onClick={this.open}>
                    <i className="fa fa-book"></i>
                    Events
                </span>
                
                </a>
            </li>
        </div>
      );
    }
  }

export default ChefEventsButton
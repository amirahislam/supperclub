import React from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import FollowingCard from '../FollowingCard'
import 'react-datepicker/dist/react-datepicker.css';
import '../../css/DashboardStyles/Following.css';
import moment from 'moment';
import API from "../../utils/API";



class FollowingModal extends React.Component {

    componentDidMount() {
        console.log('mounted');
     
    }

        constructor(props, context) {
        super(props, context);  
      
        this.state = {
          showModal: false,

        };

        // this.handleSaveEvent = this.handleSaveEvent.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
      }

      handleChange = date => {
        console.log(date._d)
        this.setState({
          eventDate: date
        });
      }

      handleSelection = event => {
        const { name, value } = event.target;
        // console.log(event.target.value)
        this.setState({
          [name]: value
        });
      }
      
      open() {
        this.setState({showModal: true});
      }
      
      close() {
        this.setState({showModal: false});
      }
      
  
    render() {
      const uuidv4 = require('uuid/v4')
      return (
        <div>
            <li className="sub-menu">
                <a href="javascript:;">
                <span className="addEvent" onClick={this.open}>
                    <i className="fa fa-bars"></i>
                    Following
                </span>
                <div>
                    <Modal className="followingModal" 
                    key={uuidv4}
                    show={this.state.showModal} 
                    onHide={this.close}
                    animation={true} 
                    bsSize="small">

                    <Modal.Header>
                        <Modal.Title>My Foodies</Modal.Title>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" onClick={this.close}>&times;</span>
                        </button>
                    </Modal.Header>

                    <Modal.Body>
                        <FollowingCard 
                        key={uuidv4()}
                        name={this.props.name}
                        currentFollowing={this.props.currentFollowing}
                        onClick={this.props.onClick}
                        patronName={this.props.patronName}
                        />
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                        <Button bsStyle="primary" onClick={this.handleSaveEvent}>Find More Foodies...</Button>
                    </Modal.Footer>         
                    </Modal> 
                </div>
                </a>
            </li>
        </div>
      );
    }
  }

export default FollowingModal
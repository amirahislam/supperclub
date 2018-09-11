import React from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import FriendCard from '../FriendCard'
import 'react-datepicker/dist/react-datepicker.css';
import '../../css/DashboardStyles/Follow.css';
import moment from 'moment';
import API from "../../utils/API";



class FollowModal extends React.Component {

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

    //   handleSaveEvent = (event) => {
    //     event.preventDefault()

    //     let eventData = {
            
    //     }

    //     console.log(eventData)

    //     API.saveEvent(eventData)
    //       .then(res => this.setState({ newEvent: res.data }))
    //       .catch(err => console.log(err));
    //     console.log('new event added:')
    //     console.log(this.state.newEvent)
        
    //     this.setState({
    //       eventName: '',
    //       eventImg: '',
    //       menu: 'no menu today',
    //       guests: '',
    //       price: '25',
    //       eventDate: moment(),
    //       description: '',
    //       rules: '',
    //       showModal: false
    //     })

    //   }
      
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
                    <i className="fa fa-book"></i>
                    Follow
                </span>
                <div>
                    <Modal className="followModal" 
                    key={uuidv4}
                    show={this.state.showModal} 
                    onHide={this.close}
                    animation={true} 
                    bsSize="small">

                    <Modal.Header>
                        <Modal.Title>Follow Fellow Foodies</Modal.Title>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" onClick={this.close}>&times;</span>
                        </button>
                    </Modal.Header>

                    <Modal.Body>
                        <FriendCard 
                        key={uuidv4()}
                        name={this.props.name}
                        currentPatrons={this.props.currentPatrons}
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

export default FollowModal
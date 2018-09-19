import React from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../css/DashboardStyles/AddEvent.css';
import moment from 'moment';
import API from "../../utils/API";


class AddEventModal extends React.Component {

    componentDidMount() {
        // console.log('i am mounted');
        this.getUserData();
    }

    constructor(props, context) {
        super(props, context);  
      
        this.state = {
          showModal: false,
          id: "",
          firstName: "",
          lastName: "",
          username: "",
          profpic: "",
          newEvent: {},
          eventName: '',
          eventLocation: '',
          eventImg: '',
          menu: '',
          guests: '',
          price: '25',
          eventDate: moment(),
          description: '',
          rules: '',

        };

        this.handleSaveEvent = this.handleSaveEvent.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getUserData = this.getUserData.bind(this);
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

      handleSaveEvent = (event) => {
        event.preventDefault()

        let eventData = {
            username: this.state.username,
            eventName: this.state.eventName,
            eventLocation: this.state.eventLocation,
            eventImg: this.state.eventImg,
            description: this.state.description,
            menu: this.state.menu,
            guests: this.state.guests,
            spotsLeft: this.state.guests,
            price: this.state.price,
            rules: this.state.rules,
            date: this.state.eventDate
        }

        console.log(eventData)

        API.createEvent(eventData)
          .then(res => this.setState({ newEvent: res.data }))
          .catch(err => console.log(err));
        console.log('new event added:')
        console.log(this.state.newEvent)
        
        this.setState({
          eventName: '',
          eventLocation: '',
          eventImg: '',
          menu: '',
          guests: '',
          price: '25',
          eventDate: moment(),
          description: '',
          rules: '',
          showModal: false
        })

      }

      getUserData = () => {
        let localsessionUser = localStorage.getItem("user")
        API.getPatron(localsessionUser)
        .then(response => {
            this.setState({
                id: response.data[0]._id,
                firstName: response.data[0].firstName,
                lastName: response.data[0].lastName,
                username: response.data[0].username,
                profpic: response.data[0].img
            })
            // console.log(response.data)
        })
        .catch(err => console.log(err))
        // console.log(this.state.username);
    }
      
      open() {
        this.setState({showModal: true});
      }
      
      close() {
        this.setState({showModal: false});
      }
      
  
    render() {
      return (
        <div>
            <li className="sub-menu">
                <a href="javascript:;">
                <span className="addEvent" onClick={this.open}>
                    <i className="fa fa-calendar-plus-o"></i>
                    Create Event
                </span>
                <div>
                    <Modal className="modal-container" 
                    show={this.state.showModal} 
                    onHide={this.close}
                    animation={true} 
                    bsSize="small">

                    <Modal.Header>
                        <Modal.Title>Create An Event</Modal.Title>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" onClick={this.close}>&times;</span>
                        </button>
                    </Modal.Header>

                    <Modal.Body>
                        <form>

                            <FormGroup>

                                <FormGroup>
                                    <ControlLabel htmlFor="formGroupExampleInput">Event Name</ControlLabel>
                                    <FormControl 
                                        type="text" 
                                        className="form-control" 
                                        id="formGroupExampleInput" 
                                        placeholder=""
                                        value={this.state.eventName}
                                        name="eventName"
                                        onChange={this.handleSelection}
                                    >    
                                    </FormControl>
                                </FormGroup>

                                <FormGroup>
                                    <ControlLabel htmlFor="formGroupExampleInput">Event Location</ControlLabel>
                                    <FormControl 
                                        type="text" 
                                        className="form-control" 
                                        id="formGroupExampleInput" 
                                        placeholder=""
                                        value={this.state.eventLocation}
                                        name="eventLocation"
                                        onChange={this.handleSelection}
                                    >    
                                    </FormControl>
                                </FormGroup>                                

                                <FormGroup>
                                    <ControlLabel htmlFor="exampleFormControlTextarea1">Event Description:</ControlLabel>
                                    <textarea 
                                      className="form-control" 
                                      id="exampleFormControlTextarea1" 
                                      rows="3" 
                                      name="description"
                                      value={this.state.description}
                                      onChange={this.handleSelection}
                                    >
                                    </textarea>
                                </FormGroup>

                                <FormGroup>
                                    <ControlLabel htmlFor="textarea">Event Photo</ControlLabel>
                                        <FormControl 
                                            type="text" 
                                            className="form-control" 
                                            id="formPhoto"
                                            placeholder="Enter the photo URL"
                                            value={this.state.eventImg}
                                            name="eventImg"
                                            onChange={this.handleSelection}
                                        >
                                        </FormControl>
                                </FormGroup>

                                {/* <ControlLabel>
                                    Upload Menu
                                </ControlLabel> */}

                                {/* <FormControl 
                                    type="file" 
                                    className="form-control form-control-file" 
                                    id="exampleFormControlFile2"
                                    // value={this.state.menu}
                                    name="menu"
                                    onChange={this.handleChange}
                                >
                                </FormControl><br /> */}

                                <FormGroup>
                                    <ControlLabel htmlFor="formGroupExampleInput">Number of Guests</ControlLabel>
                                    <FormControl 
                                        type="text" 
                                        className="form-control" 
                                        id="formGroupExampleInput" 
                                        placeholder=""
                                        name="guests"
                                        value={this.state.guests}
                                        onChange={this.handleSelection}
                                    >    
                                    </FormControl>
                                </FormGroup>

                                <FormGroup>
                                    <ControlLabel htmlFor="selectbasic">Set Price</ControlLabel>
                                        <select id="selectbasic" name="price" value={this.state.price} className="form-control" onChange={this.handleSelection}>
                                            <option value="15">$15</option>
                                            <option value="20">$20</option>
                                            <option value="25">$25</option>
                                            <option value="30">$30</option>
                                            <option value="40">$50</option>
                                            <option value="50">$60</option>
                                        </select>
                                </FormGroup>

                                <FormGroup>
                                    <ControlLabel htmlFor="selectbasic">Set Date</ControlLabel>
                                        <DatePicker 
                                            className="form-control"
                                            selected={this.state.eventDate}
                                            name="date"
                                            onChange={this.handleChange}
                                        />
                                </FormGroup>

                                <FormGroup>
                                    <ControlLabel htmlFor="exampleFormControlTextarea1">Rules:</ControlLabel>
                                    <textarea 
                                      className="form-control" 
                                      id="exampleFormControlTextarea1" 
                                      rows="3" 
                                      name="rules"
                                      value={this.state.rules}
                                      onChange={this.handleSelection}
                                    >
                                    </textarea>
                                </FormGroup>

                            </FormGroup>
                        </form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                        <Button bsStyle="primary" onClick={this.handleSaveEvent}>Create event</Button>
                    </Modal.Footer>         
                    </Modal> 
                </div>
                </a>
            </li>
        </div>
      );
    }
  }

export default AddEventModal
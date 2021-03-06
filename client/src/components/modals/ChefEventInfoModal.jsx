import React from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import '../../css/DashboardStyles/EventInfo.css';
import EditEventButton from '../EditEventButton';


class ChefEventInfoModal extends React.Component {

        constructor(props, context) {
        super(props, context);
      
        this.state = {
          showModal: false,
        };

        this.handleSaveEvent = this.handleSaveEvent.bind(this);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
      }

      componentDidMount() {
          console.log(this.props.yourEvent)
      }

      handleSaveEvent = (event) => {
        event.preventDefault()

        let patronData = {
            patronId: this.props.patronId,
            username: this.props.username,
            eventName: this.props.eventName,
            eventDate: this.props.eventDate
        }

        console.log(patronData)
        this.close()

      }

    //   renderEdit = () => {
    //       const yourEvent = this.props.yourEvent;
    //       if (yourEvent === "Your event") {
    //         console.log("edit event");
    //         return <EditEventButton />
    //       } else {}
    //   }

      click = (event) => {
        // this.props.joinEvent(event, this.props.checkAttending)
        console.log(this.props.yourEvent)
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
            <a href="#" className="link-details" title="More Details" data-toggle="modal" data-target={"modal + `{this.props.id}`"}>
            <span className="eventInfo" onClick={this.open}>
                <i className="fas fa-list-alt"></i>
            </span>
                <div>
                    <Modal className="modal-container modal fade" 
                    show={this.state.showModal} 
                    onHide={this.close}
                    animation={true} 
                    tabindex="-1"
                    aria-labelledby="exampleModalCenterTitle"
                    role="dialog"
                    aria-hidden="true"
                    bsSize="small">

                    <Modal.Header>
                        <Modal.Title>{this.props.eventName}</Modal.Title>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" onClick={this.close}>&times;</span>
                        </button>
                    </Modal.Header>

                    <Modal.Body>
                        <div>
                            <p><strong>Date:</strong> <br/> {this.props.eventDate}</p>
                            <p><strong>Host:</strong> <br/> {this.props.username}</p>
                            <p><strong>Description:</strong> <br/> {this.props.description}</p>
                            <p><strong>Maximum guests:</strong> {this.props.guests}</p>
                            <p><strong>Spots Left:</strong> {this.props.spotsLeft}</p>
                            <p><strong>Price:</strong> ${this.props.price}</p>
                            <p><strong>Note:</strong> <br />{this.props.rules}</p>
                        </div>

                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                    <img className="d-block img-responsive" src={this.props.eventImg} alt="First slide" />
                                    </div>
                                    <div className="carousel-item">
                                    <img className="d-block img-responsive" src={this.props.eventImg} alt="Second slide" />
                                    </div>
                                    <div className="carousel-item">
                                    <img className="d-block img-responsive" src={this.props.eventImg} alt="Third slide" />
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                            <br />
                            <br />

                            {/* <renderEdit /> */}
                            {/* <p align="center">
                                <a
                                    className="btn btn-light"
                                    data-toggle="collapse"
                                    value={this.props.value}
                                    onClick={this.click}
                                >
                                    Edit your event
                                </a>
                            </p> */}

                                <EditEventButton
                                yourEvent={this.props.yourEvent}
                                />

                            <div className="collapse" id={"#collapse {this.props.id}"}>
                                <div className="card card-body">
                                    <form>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col">
                                                    <input type="text" className="form-control" id="firstName" placeholder="First name" />
                                                </div>
                                                <div className="col">
                                                    <input type="text" className="form-control" id="lastName" placeholder="Last name" />
                                                </div>
                                            </div>
                                            <div className="form-group" align="left">
                                                <label for="exampleFormControlInput1">Email address</label>
                                                <input type="email" className="form-control" id="emailInput" placeholder="name@example.com" />
                                            </div>
                                            <div className="form-group" align="left">
                                                <label for="formGroupExampleInput">Phone Number</label>
                                                <input type="text" className="form-control" id="phoneInput" placeholder="Example input" />
                                            </div>

                                            <button type="submit" className="btn btn-light" id="submitprofile">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                    </Modal.Body>

                    <Modal.Footer>
                        {/* <Button onClick={this.close}>Close</Button> */}
                        {/* <Button bsStyle="primary" onClick={this.handleSaveEvent}>Save To Upcoming Events</Button> */}
                    </Modal.Footer>         
                    </Modal> 
                </div>
                </a>
        
        </div>
      );
    }
  }

export default ChefEventInfoModal
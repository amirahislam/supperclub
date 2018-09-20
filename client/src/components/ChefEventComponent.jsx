import React, { Component } from 'react';
import ChefEventInfoModal from './modals/ChefEventInfoModal'
import '../pages/Events/Events.css'
import API from "../utils/API";
import EditEventButton from "../components/EditEventButton";


class ChefEventComponent extends Component {

    state = {
        yourEvent: "",
        splitDate: ""
    }

    componentDidMount() {
        this.checkHosting();
        this.splitDate();
    }

    checkHosting = () => {
        console.log(this.props.id)
        let localsessionUser = localStorage.getItem("user");
        API.getEvent(this.props.id)
        .then(response => {
            console.log(response.data[0].username)
            if (response.data[0].username === localsessionUser) {
                this.setState({
                    yourEvent: "Your event"
                })
            } else {
                this.setState({
                    yourEvent: "Another chef's event"
                })
            }
        });
    }

    splitDate = () => {
        let splitDate = this.props.eventDate.split("T")
        let eventDate = splitDate[0];
        this.setState({
            splitDate: eventDate
        })
    }

    render() {
        return(
            
            <div id="portfolio" className="portfolio col-md porfolio-container">
        <div className="col-lg-5 col-md-6 portfolio-item filter-app wow fadeInUp post">
            <div className="porfolio-wrap" post-id={this.props.id}>
                <figure>
                    <img src={this.props.eventImg} className="img-fluid" alt="Oops" />
                    <a href={this.props.eventImg} data-lightbox="portfolio" data-title="App 1" className="link-preview" title="Preview"><i className="fas fa-camera-retro"></i></a>
                    <ChefEventInfoModal
                    patronId={this.props.patronId}
                    id={this.props.id}
                    username={this.props.username}
                    eventName={this.props.eventName}
                    eventImg={this.props.eventImg}
                    guests={this.props.guests}
                    spotsLeft={this.props.spotsLeft}
                    price={this.props.price}
                    eventDate={this.state.splitDate}
                    description={this.props.description}
                    rules={this.props.rules}
                    value={this.props.id}
                    yourEvent={this.state.yourEvent}
                    joinEvent={this.props.joinEvent}
                    />
                </figure>

                <div className="portfolio-info">
                    <h4>{this.props.eventName}</h4>
                    <h4>{this.state.splitDate}</h4>
                    <EditEventButton
                        yourEvent={this.state.yourEvent}
                    />                 
                    {/* <h4>Spots left: {this.props.spotsLeft}</h4>
                    <button
                    value={this.props.id}
                    onClick={this.props.joinEvent}
                    >
                    Request to Join
                    </button> */}
                </div>
            </div>

            
            <div className="modal fade" id={"modal + {this.props.id}"} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle" >{this.props.eventName}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            
                            <div>
                                <p>Event Description: <br /> {this.props.description}</p>
                                <p>Number of Guests: {this.props.guests}</p>  
                                <p>Price: {this.props.price}</p>
                                <p>Note: <br />{this.props.rules}</p>
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
                            <p align="center">
                                <a className="btn btn-light" id="submitprofile" data-toggle="collapse" href={"#collapse {this.props.id}"}>
                                    Reserve your seat
                                </a>
                            </p>
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
                                                <label htmlFor="exampleFormControlInput1">Email address</label>
                                                <input type="email" className="form-control" id="emailInput" placeholder="name@example.com" />
                                            </div>
                                            <div className="form-group" align="left">
                                                <label htmlFor="formGroupExampleInput">Phone Number</label>
                                                <input type="text" className="form-control" id="phoneInput" placeholder="Example input" />
                                            </div>

                                            <button type="submit" className="btn btn-light" id="submitprofile">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>       
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    
        )
    }
    

}

export default ChefEventComponent;


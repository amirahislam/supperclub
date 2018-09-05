import React from 'react'
import EventInfoModal from './modals/EventInfoModal'
import '../pages/Events/Events.css'


const EventComponent = props => (
<section id="portfolio">
    <div className="row posts-container">
        <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp post">
            <div className="posts-wrap" post-id={props.id}>
                <figure>
                    <img src={props.eventImg} className="img" alt="Oops" />
                    <a href={props.eventImg} data-lightbox="portfolio" data-title="App 1" className="link-preview" title="Preview"><i className="fas fa-camera-retro"></i></a>
                    <EventInfoModal
                    id={props._id}
                    username={props.username}
                    eventName={props.eventName}
                    eventImg={props.eventImg}
                    guests={props.guests}
                    price={props.price}
                    date={props.date}
                    description={props.description}
                    rules={props.rules}
                    />
                </figure>

                <div className="portfolio-info" >
                    <h4>{props.eventName}</h4>
                    <p>Request to Join</p>
                </div>
            </div>

            
            <div className="modal fade" id={"modal + {props.id}"} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle" >{props.eventName}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            
                            <div>
                                <p>Event Description: <br /> {props.description}</p>
                                <p>Number of Guests: {props.guests}</p>  
                                <p>Price: {props.price}</p>
                                <p>Note: <br />{props.rules}</p>
                            </div>
                            
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                    <img className="d-block img-responsive" src={props.eventImg} alt="First slide" />
                                    </div>
                                    <div className="carousel-item">
                                    <img className="d-block img-responsive" src={props.eventImg} alt="Second slide" />
                                    </div>
                                    <div className="carousel-item">
                                    <img className="d-block img-responsive" src={props.eventImg} alt="Third slide" />
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
                                <a className="btn btn-light" id="submitprofile" data-toggle="collapse" href={"#collapse {props.id}"}>
                                    Reserve your seat
                                </a>
                            </p>
                            <div className="collapse" id={"#collapse {props.id}"}>
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
                        </div>
                        
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>       
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    )

export default EventComponent;


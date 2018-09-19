import React from 'react'
import '../pages/Patron/UpcomingEvents.css'
import UpcomingEventsCarousel from './UpcomingEventsCarousel'

const UpcomingEvents = props => (
    
    <div className="row upcomingEventsDiv">
  {/* <div className="container UpcomingEvents"> */}
    <div className="col-md-2"></div>
    <div className="imagesDiv col-md-8">
    <h2 className='eventTitle'>Upcoming Events</h2>
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
        <div className="carousel-item active">
                <img className="d-block w-100 eventsImg" src={"https://berlinfoodstories.com/wp-content/uploads/2017/11/23155002_1645545768818342_6121728967607120425_o.jpg"} alt="Second slide" />
            </div>
            <div className="carousel-item">
                <img className="d-block w-100 eventsImg" src={"https://berlinfoodstories.com/wp-content/uploads/2017/11/23155002_1645545768818342_6121728967607120425_o.jpg"} alt="Second slide" />
            </div>
            <div className="carousel-item">
                <img className="d-block w-100 eventsImg" src={"https://www.youngisthan.in/wp-content/uploads/2018/05/featured-15.jpg"} alt="Third slide" />
            </div>
        </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
        </div>
    <div className="col-md-2"></div>
    {/* </div> */}
    </div>
    )



export default UpcomingEvents;


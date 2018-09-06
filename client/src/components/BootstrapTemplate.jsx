import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import '../css/DashboardStyles/Creative.css';
// import './Creative.min.css';


class BootstrapTemplate extends Component {
    
    render() {
        return (
    <div>
    <header   className="masthead text-center text-white d-flex">
      <div   className="container my-auto">
        <div   className="row">
          <div   className="col-lg-10 mx-auto">
            <h1   className="text-uppercase"   className="quote">
              People who love to eat are always the best people.
            </h1>
            <hr/>
          
          <div   className="col-lg-8 mx-auto">
            <p   className="text-faded mb-5"></p>
            <a   className="btn btn-primary btn-xl js-scroll-trigger" href="/about">Learn More</a>
          </div>
        </div>
      </div>
      </div>
    </header>

<section   className="bg-primary" id="about">
<div   className="container">
  <div   className="row">
    <div   className="col-lg-8 mx-auto text-center">
      <h2   className="section-heading text-white">Who are we?</h2>
      <hr   className="light my-4"/> ,
      <p   className="text-faded mb-4">A group of people trying to bring people of diverse communities and cultures together through food. While promoting going local for the ingredients used in our Supper Clubs. </p>
      <a   className="btn btn-light btn-xl js-scroll-trigger" href="/services">Get Started!</a>
    </div>
  </div>
</div>
</section>

<section id="services">
      <div   className="container">
        <div   className="row">
          <div   className="col-lg-12 text-center">
            <h2   className="section-heading">How it works</h2>
            <hr   className="my-4"/> 
          </div>
        </div>
      </div>
      <div   className="container">
        <div   className="row">
          <div   className="col-lg-3 col-md-6 text-center">
            <div   className="service-box mt-5 mx-auto">
              <i   className="fa fa-4x fa-user-plus text-primary mb-3 sr-icons"></i>
              <h3   className="mb-3">Sign Up</h3>
              <p   className="text-muted mb-0">To use our platfrom join as a Chef or a foodie. For Chefs who apply to join you don't actually have formal traning as a chef, homecooks are welcomed, but you will need to submit a copy of your food handler's license and a writen sample menu of your ideal Supper Culb. </p>
            </div>
          </div>
          <div   className="col-lg-3 col-md-6 text-center">
            <div   className="service-box mt-5 mx-auto">
              <i   className="fa fa-4x fa-cutlery text-primary mb-3 sr-icons"></i>
              <h3   className="mb-3">Clubs</h3>
              <p   className="text-muted mb-0">Each "Supper Club" is an one time event that takes place when the chef or home-cook sets a date for it. </p>
            </div>
          </div>
          <div   className="col-lg-3 col-md-6 text-center">
            <div   className="service-box mt-5 mx-auto">
              <i   className="fa fa-4x fa-calendar text-primary mb-3 sr-icons"></i>
              <h3   className="mb-3">How to attend</h3>
              <p   className="text-muted mb-0">Attendees for the clubs are at the discretion of the chefs and home-cooks. Attendees are able to request to join and once approved will be notified immediately and have upto two weeks before the event to cancel if need be.</p>
            </div>
          </div>
          <div   className="col-lg-3 col-md-6 text-center">
            <div   className="service-box mt-5 mx-auto">
              <i   className="fa fa-4x fa-map-marker text-primary mb-3 sr-icons"></i>
              <h3   className="mb-3">Location</h3>
              <p   className="text-muted mb-0">A week prior to the event the location of the "Supper Club" is texted to the particular attentdee.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

<section   className="p-0" id="portfolio">
<div   className="container-fluid p-0">
  <div   className="row no-gutters popup-gallery">
    {/* <div   className="col-lg-4 col-sm-6">
      <a   className="portfolio-box" href={'https://previews.dropbox.com/p/thumb/AAJd7IKmDTJrKJsZP2teb8BFUxZwPkRk5K-SfuXayaUJoANYCqr_MCEq5oLeZQP-BzAUomUZ6rkvfFCpxYzSXbClrxOnfm4mR9BpCzeNR0kq8S_w3J7vdOkzbNxV7rCnO6UTTFbi-PvTZhmIwr5ju6KBRAUSxeBPRVdXs-d2JWoftw/p.jpeg?size=2048x1536&size_mode=3'}>
        <img   className="img-fluid" src={'https://previews.dropbox.com/p/thumb/AAJd7IKmDTJrKJsZP2teb8BFUxZwPkRk5K-SfuXayaUJoANYCqr_MCEq5oLeZQP-BzAUomUZ6rkvfFCpxYzSXbClrxOnfm4mR9BpCzeNR0kq8S_w3J7vdOkzbNxV7rCnO6UTTFbi-PvTZhmIwr5ju6KBRAUSxeBPRVdXs-d2JWoftw/p.jpeg?size=2048x1536&size_mode=3'}/>
        <div   className="portfolio-box-caption">
          <div   className="portfolio-box-caption-content">
            <div   className="project-category text-faded">
              Category
            </div>
            <div   className="project-name">
              Project Name
            </div>
          </div>
        </div>
      </a>
      </div> */}
      
    {/* </div> */}
    <div   className="col-lg-4 col-sm-6">
            <a   className="portfolio-box" href={'https://images.food52.com/JQ5DyEa7OHUhw6zmewDqAugKJ_U=/753x502/e1260ebd-d4f7-47c9-b116-603efc2513f7--18.jpeg'}>
              <img   className="img-fluid" src={'https://images.food52.com/JQ5DyEa7OHUhw6zmewDqAugKJ_U=/753x502/e1260ebd-d4f7-47c9-b116-603efc2513f7--18.jpeg'}/>
              <div   className="portfolio-box-caption">
                <div   className="portfolio-box-caption-content">
                  <div   className="project-category text-faded">
                    Category
                  </div>
                  <div   className="project-name">
                    Project Name
                  </div>
                </div>
              </div>
            </a>
          </div>
    
    <div   className="col-lg-4 col-sm-6">
    <a   className="portfolio-box" href={'https://images.food52.com/76iyuOFTKtlfPAIZSlP4uYydnYk=/753x502/911657b7-99aa-46d2-94f9-7bdc529658ee--2015-0730_braised-moroccan-chicken-and-olives_james-ransom-359.jpg'}>
      <img   className="img-fluid" src={'https://images.food52.com/76iyuOFTKtlfPAIZSlP4uYydnYk=/753x502/911657b7-99aa-46d2-94f9-7bdc529658ee--2015-0730_braised-moroccan-chicken-and-olives_james-ransom-359.jpg'}/>
      <div   className="portfolio-box-caption">
        <div   className="portfolio-box-caption-content">
          <div   className="project-category text-faded">
            Category
          </div>
          <div   className="project-name">
            Project Name
          </div>
        </div>
      </div>
    </a>
  </div>
  <div   className="col-lg-4 col-sm-6">
            <a   className="portfolio-box" href={'https://images.food52.com/z0-hpXkw_QzwryeiRAGJRBPE9W8=/753x502/4f50e30e-1b90-474c-8f8d-c387cd0def90--chickenlegsandcabbage.jpg'}>
              <img   className="img-fluid" src={'https://images.food52.com/z0-hpXkw_QzwryeiRAGJRBPE9W8=/753x502/4f50e30e-1b90-474c-8f8d-c387cd0def90--chickenlegsandcabbage.jpg'}/>
              <div   className="portfolio-box-caption">
                <div   className="portfolio-box-caption-content">
                  <div   className="project-category text-faded">
                    Category
                  </div>
                  <div   className="project-name">
                    Project Name
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div   className="col-lg-4 col-sm-6">
            <a   className="portfolio-box" href={'https://images.food52.com/yUr636sIVJIVLD7y1zgK3qPW2sE=/753x502/6f9bcdae-5ab9-454e-9469-414f6818dc28--2016-1011_genius-one-pan-skillet-lasagna_james-ransom-566.jpg'}>
              <img   className="img-fluid" src={'https://images.food52.com/yUr636sIVJIVLD7y1zgK3qPW2sE=/753x502/6f9bcdae-5ab9-454e-9469-414f6818dc28--2016-1011_genius-one-pan-skillet-lasagna_james-ransom-566.jpg'}/>
              <div   className="portfolio-box-caption">
                <div   className="portfolio-box-caption-content">
                  <div   className="project-category text-faded">
                    Category
                  </div>
                  <div   className="project-name">
                    Project Name
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div   className="col-lg-4 col-sm-6">
            <a   className="portfolio-box" href={'https://images.food52.com/p3Ji2qK1S1WiXHLFyRZZurHBOSM=/753x502/671219eb-1cd1-48fc-9f10-6133242cdd64--2015-0602_crabcake-sliders-with-remoulade_mark-weinberg_443.jpg'}>
              <img   className="img-fluid" src={'https://images.food52.com/p3Ji2qK1S1WiXHLFyRZZurHBOSM=/753x502/671219eb-1cd1-48fc-9f10-6133242cdd64--2015-0602_crabcake-sliders-with-remoulade_mark-weinberg_443.jpg'}/>
              <div   className="portfolio-box-caption">
                <div   className="portfolio-box-caption-content">
                  <div   className="project-category text-faded">
                    Category
                  </div>
                  <div   className="project-name">
                    Project Name
                  </div>
                </div>
              </div>
            </a>
          </div>
          
          <div   className="col-lg-4 col-sm-6">
            <a   className="portfolio-box" href={'https://images.food52.com/S4w1bWLKEEBhMtMBTuTZyyNThNY=/753x502/90a2c5af-5724-4da5-98f4-a8bbc56dce42--DSCF6651_1.jpg'}>
              <img   className="img-fluid" src={'https://images.food52.com/S4w1bWLKEEBhMtMBTuTZyyNThNY=/753x502/90a2c5af-5724-4da5-98f4-a8bbc56dce42--DSCF6651_1.jpg'}/>
              <div   className="portfolio-box-caption">
                <div   className="portfolio-box-caption-content">
                  <div   className="project-category text-faded">
                    Category
                  </div>
                  <div   className="project-name">
                    Project Name
                  </div>
                </div>
              </div>
            </a>
          </div>
          </div>
          </div>
          <br/>
        {/* </div> */}
          </section>
        <section   className="bg-dark text-white">
        <div   className="container text-center">
          <h2   className="mb-4">Want to take a look at our past events? Check out our gallery!</h2>
          <hr/>
          <a   className="btn btn-light btn-xl sr-button" href="">View Gallery</a>
        </div>
      </section>
      <section id="contact">
      <div   className="container">
        <div   className="row">
          <div   className="col-lg-8 mx-auto text-center">
            <h2   className="section-heading">Questions? Get In Touch With Us!</h2>
            <hr   className="my-4"></hr>
            <p   className="mb-5">Not sure how it works or where to start? Send us a message and we'll get back to you!</p>
          </div>
        </div>
        <div   className="row">
          <div   className="col-lg-4 ml-auto text-center">
            <i   className="fa fa-facebook-official fa-3x mb-3 sr-contact"></i>
            <p></p>
          </div>
          <div   className="col-lg-4 mr-auto text-center">
            <i   className="fa fa-envelope-o fa-3x mb-3 sr-contact"></i>
            <p>
              <a href="mailto:your-email@your-domain.com">projectsupperclub@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>

        );
    }
}

export default BootstrapTemplate;
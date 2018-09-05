import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import '../css/Dashboard Styles/Creative.css';
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
      <h2   className="section-heading text-white">We've got what you need!</h2>
      <hr   className="light my-4"/> ,
      <p   className="text-faded mb-4">Start Bootstrap has everything you need to get your new website up and running in no time! All of the templates and themes on Start Bootstrap are open source, free to download, and easy to use. No strings attached!</p>
      <a   className="btn btn-light btn-xl js-scroll-trigger" href="/services">Get Started!</a>
    </div>
  </div>
</div>
</section>

<section id="services">
      <div   className="container">
        <div   className="row">
          <div   className="col-lg-12 text-center">
            <h2   className="section-heading">At Your Service</h2>
            <hr   className="my-4"/> 
          </div>
        </div>
      </div>
      <div   className="container">
        <div   className="row">
          <div   className="col-lg-3 col-md-6 text-center">
            <div   className="service-box mt-5 mx-auto">
              <i   className="fa fa-4x fa-diamond text-primary mb-3 sr-icons"></i>
              <h3   className="mb-3">Sturdy Templates</h3>
              <p   className="text-muted mb-0">Our templates are updated regularly so they don't break.</p>
            </div>
          </div>
          <div   className="col-lg-3 col-md-6 text-center">
            <div   className="service-box mt-5 mx-auto">
              <i   className="fa fa-4x fa-paper-plane text-primary mb-3 sr-icons"></i>
              <h3   className="mb-3">Ready to Ship</h3>
              <p   className="text-muted mb-0">You can use this theme as is, or you can make changes!</p>
            </div>
          </div>
          <div   className="col-lg-3 col-md-6 text-center">
            <div   className="service-box mt-5 mx-auto">
              <i   className="fa fa-4x fa-newspaper-o text-primary mb-3 sr-icons"></i>
              <h3   className="mb-3">Up to Date</h3>
              <p   className="text-muted mb-0">We update dependencies to keep things fresh.</p>
            </div>
          </div>
          <div   className="col-lg-3 col-md-6 text-center">
            <div   className="service-box mt-5 mx-auto">
              <i   className="fa fa-4x fa-heart text-primary mb-3 sr-icons"></i>
              <h3   className="mb-3">Made with Love</h3>
              <p   className="text-muted mb-0">You have to make your websites with love these days!</p>
            </div>
          </div>
        </div>
      </div>
    </section>

<section   className="p-0" id="portfolio">
<div   className="container-fluid p-0">
  {/* <div   className="row no-gutters popup-gallery">
    <div   className="col-lg-4 col-sm-6">
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
      </div>
      </div> */}
    </div>
    {/* </div> */}
    <div   className="col-lg-4 col-sm-6">
            <a   className="portfolio-box" href={'https://previews.dropbox.com/p/thumb/AAKeZ98nmolb7OlD53wjtsmjzD5_O9_x8VmCRtCO5NJKMtyEnOuLx0E_K_Zer5Oeo7Q4GcU8hCNzYXCvoFxeDB8JcAB_Djiy2l9O8njLUvNvLnWEXMFlJpJfTJ8HjOrwaIlar2Ul7ESfVe_n4rMYm7MgmPDxiNobNuz2rya1-72qpw/p.jpeg?size=2048x1536&size_mode=3'}>
              <img   className="img-fluid" src={'https://previews.dropbox.com/p/thumb/AAKeZ98nmolb7OlD53wjtsmjzD5_O9_x8VmCRtCO5NJKMtyEnOuLx0E_K_Zer5Oeo7Q4GcU8hCNzYXCvoFxeDB8JcAB_Djiy2l9O8njLUvNvLnWEXMFlJpJfTJ8HjOrwaIlar2Ul7ESfVe_n4rMYm7MgmPDxiNobNuz2rya1-72qpw/p.jpeg?size=2048x1536&size_mode=3'}/>
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
    <a   className="portfolio-box" href={'https://previews.dropbox.com/p/thumb/AAKiJUqfoLtwe_RpkBuxlK6uAkSLyWBCQ82Q1mw7j6OmdwhY6EEXy92fh1zKTwkJ3DVbwVnSB4fTxgS3lN7shJYlS6y7cEeH5NphZDO4XQDiXvLYrGJrqv4V1pHCp2aHX6MdNM6BAGJMm8GHW1FxZk-L0Qam7jlSFlzUDVuY9bd7lA/p.jpeg?size=2048x1536&size_mode=3'}>
      <img   className="img-fluid" src={'https://previews.dropbox.com/p/thumb/AAKiJUqfoLtwe_RpkBuxlK6uAkSLyWBCQ82Q1mw7j6OmdwhY6EEXy92fh1zKTwkJ3DVbwVnSB4fTxgS3lN7shJYlS6y7cEeH5NphZDO4XQDiXvLYrGJrqv4V1pHCp2aHX6MdNM6BAGJMm8GHW1FxZk-L0Qam7jlSFlzUDVuY9bd7lA/p.jpeg?size=2048x1536&size_mode=3'}/>
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
            <a   className="portfolio-box" href={'https://previews.dropbox.com/p/thumb/AALqcIs5hgAYOG7VrTamja74-1xVV8Cn4gzNHLVaVU_TFdvJmN55cyeUuEdZPVs_-lapy0OV3iXO4j4qsaf6c3ZbFxpb-9xAG7MU5oAiYnYRQE2O7VVeHa_VdfKp35G8AAbFHges8-exyyRlYhYAm4keOUNcL6sabrdRnend3X3jzw/p.jpeg?size=2048x1536&size_mode=3'}>
              <img   className="img-fluid" src={'https://previews.dropbox.com/p/thumb/AALqcIs5hgAYOG7VrTamja74-1xVV8Cn4gzNHLVaVU_TFdvJmN55cyeUuEdZPVs_-lapy0OV3iXO4j4qsaf6c3ZbFxpb-9xAG7MU5oAiYnYRQE2O7VVeHa_VdfKp35G8AAbFHges8-exyyRlYhYAm4keOUNcL6sabrdRnend3X3jzw/p.jpeg?size=2048x1536&size_mode=3'}/>
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
            <a   className="portfolio-box" href={'https://previews.dropbox.com/p/thumb/AAJX9TX9TQZa1g-NQnK9h4p5PI0ctg5jUWtgJvmQxNejwt6WQQR0BIE2FwbQtxsyrkW5pLvbKjrb2Xjzbnm04ygkBmaXR8SGm9iEEH8ADH1JxJNT-qMXtTRf0v0hm6TCkLwwiQ7HCNos8Sxjfkfzw2WrlNKVNr5u8liGKgTtBtb0vQ/p.jpeg?size=2048x1536&size_mode=3'}>
              <img   className="img-fluid" src={'https://previews.dropbox.com/p/thumb/AAJX9TX9TQZa1g-NQnK9h4p5PI0ctg5jUWtgJvmQxNejwt6WQQR0BIE2FwbQtxsyrkW5pLvbKjrb2Xjzbnm04ygkBmaXR8SGm9iEEH8ADH1JxJNT-qMXtTRf0v0hm6TCkLwwiQ7HCNos8Sxjfkfzw2WrlNKVNr5u8liGKgTtBtb0vQ/p.jpeg?size=2048x1536&size_mode=3'}/>
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
            <a   className="portfolio-box" href={'https://previews.dropbox.com/p/thumb/AALOl6azVXHKvWjyWlD_7iwL0WcYlwAUItxNfqzz3JDyp-Ke6eWCqKjclN92PiO9zUrtU_ZeShJ_Lc9PMxGkbUSmmzq8aUfxPmw-M2UjQDOTF4bsFJ6Ot-gXLoM9lRyVu9HbWA80LQ7btWK_ssrgBnegOH-st434DwuiubDa46-GbA/p.jpeg?size=2048x1536&size_mode=3'}>
              <img   className="img-fluid" src={'https://previews.dropbox.com/p/thumb/AALOl6azVXHKvWjyWlD_7iwL0WcYlwAUItxNfqzz3JDyp-Ke6eWCqKjclN92PiO9zUrtU_ZeShJ_Lc9PMxGkbUSmmzq8aUfxPmw-M2UjQDOTF4bsFJ6Ot-gXLoM9lRyVu9HbWA80LQ7btWK_ssrgBnegOH-st434DwuiubDa46-GbA/p.jpeg?size=2048x1536&size_mode=3'}/>
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
            <a   className="portfolio-box" href={'https://previews.dropbox.com/p/thumb/AALOl6azVXHKvWjyWlD_7iwL0WcYlwAUItxNfqzz3JDyp-Ke6eWCqKjclN92PiO9zUrtU_ZeShJ_Lc9PMxGkbUSmmzq8aUfxPmw-M2UjQDOTF4bsFJ6Ot-gXLoM9lRyVu9HbWA80LQ7btWK_ssrgBnegOH-st434DwuiubDa46-GbA/p.jpeg?size=2048x1536&size_mode=3'}>
              <img   className="img-fluid" src={'https://previews.dropbox.com/p/thumb/AALOl6azVXHKvWjyWlD_7iwL0WcYlwAUItxNfqzz3JDyp-Ke6eWCqKjclN92PiO9zUrtU_ZeShJ_Lc9PMxGkbUSmmzq8aUfxPmw-M2UjQDOTF4bsFJ6Ot-gXLoM9lRyVu9HbWA80LQ7btWK_ssrgBnegOH-st434DwuiubDa46-GbA/p.jpeg?size=2048x1536&size_mode=3'}/>
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
          <br/>
        {/* </div> */}
          </section>
        <section   className="bg-dark text-white">
        <div   className="container text-center">
          <h2   className="mb-4"></h2>
          <hr/>
          <a   className="btn btn-light btn-xl sr-button" href="http://startbootstrap.com/template-overviews/creative/">View Gallery</a>
        </div>
      </section>
      <section id="contact">
      <div   className="container">
        <div   className="row">
          <div   className="col-lg-8 mx-auto text-center">
            <h2   className="section-heading">Let's Get In Touch!</h2>
            <hr   className="my-4"></hr>
            <p   className="mb-5">Ready to start your next project with us? That's great! Give us a call or send us an email and we will get back to you as soon as possible!</p>
          </div>
        </div>
        <div   className="row">
          <div   className="col-lg-4 ml-auto text-center">
            <i   className="fa fa-phone fa-3x mb-3 sr-contact"></i>
            <p>123-456-6789</p>
          </div>
          <div   className="col-lg-4 mr-auto text-center">
            <i   className="fa fa-envelope-o fa-3x mb-3 sr-contact"></i>
            <p>
              <a href="mailto:your-email@your-domain.com">feedback@startbootstrap.com</a>
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
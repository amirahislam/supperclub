import React, { Component } from 'react';
import '../pages/Events/Events.css'


class PublicEventComponent extends Component {

    state = {
        splitDate: ""
    }

    componentDidMount() {
        this.splitDate();
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
        <div id="portfolio" className="portfolio col-md posts-container">
            <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp post">
                <div className="posts-wrap" post-id={this.props.id}>
                    <figure>
                        <img src={this.props.eventImg} className="img" alt="Oops" />
                    </figure>

                    <div className="portfolio-info">
                        <h4>{this.props.eventName}</h4>
                        <h4>{this.state.splitDate}</h4>                   
                    </div>
                </div>
            </div>
        </div>
        )
    }
    

}

export default PublicEventComponent;


import React from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
// import '../../css/DashboardStyles/EventImages.css';


class EventImagesModal extends React.Component {

        constructor(props, context) {
        super(props, context);
      
        this.state = {
          showModal: false,
        };

        this.handleSaveEvent = this.handleSaveEvent.bind(this);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
      }

      handleSaveEvent = (event) => {
        event.preventDefault()

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
                        
                    </Modal.Body>

                    <Modal.Footer>
                        {/* <Button onClick={this.close}>Close</Button> */}
                        <Button bsStyle="primary" onClick={this.handleSaveEvent}>Save To Upcoming Events</Button>
                    </Modal.Footer>         
                    </Modal> 
                </div>
                </a>
        
        </div>
      );
    }
  }

export default EventImagesModal
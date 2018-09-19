import React from "react";
import { Modal, Button } from 'react-bootstrap';
import ProfilePage from '../ProfilePage';
import '../../css/DashboardStyles/DashboardStyle.css';
import '../../css/DashboardStyles/DashboardStyle-responsive.css';
import '../../css/DashboardStyles/DashboardBootstrap.css';
import '../../pages/Patron/Timeline.css';
import '../../css/DashboardStyles/Modals.css';


// Destructuring the type, className, children and onClick props, applying them to the button element
class ViewProfileModal extends React.Component {

  constructor(props, context) {
    super(props, context);  
  
    this.state = {
      showModal: false,
      render: ''
    };
      this.open = this.open.bind(this);
      this.close = this.close.bind(this);
  }

  handleSelection = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

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
        <button 
            className="profile-01 centered viewButton" 
            onClick={this.open}
        >View Profile
        </button>
          <div>
            <Modal 
              key={uuidv4}
              show={this.state.showModal} 
              onHide={this.close}
              animation={true} 
              bsSize="lg"
              dialogClassName="profileModal">

              <Modal.Header>
                  <Modal.Title>Profile Page</Modal.Title>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true" onClick={this.close}>&times;</span>
                  </button>
              </Modal.Header>

              <Modal.Body>
                  <ProfilePage 
                    key={uuidv4()}
                    patron={this.props.patron}
                    patronid={this.props.patronid}
                    patronimg={this.props.patronimg}
                    patronemail={this.props.patronemail}
                  />
              </Modal.Body>

              <Modal.Footer>
                  <Button onClick={this.close}>Close</Button>
                  
              </Modal.Footer>         
            </Modal> 
          </div>
      </div>
    )
  }

};

export default ViewProfileModal;
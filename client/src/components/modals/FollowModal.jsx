import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import FriendCard from '../FriendCard'
import 'react-datepicker/dist/react-datepicker.css';
import '../../css/DashboardStyles/Follow.css';
import '../../css/DashboardStyles/FollowModals.css';

class FollowModal extends React.Component {

    componentDidMount() {
        // console.log('mounted');
     
    }

        constructor(props, context) {
        super(props, context);  
      
        this.state = {
          showModal: false,

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
            <li className="sub-menu">
                <a href="javascript:;">
                <span className="addEvent" onClick={this.open}>
                    <i className="fa fa-telegram"></i>
                    Follow
                </span>
                <div>
                    <Modal 
                    key={uuidv4}
                    show={this.state.showModal} 
                    onHide={this.close}
                    animation={true} 
                    bsSize="lg"
                    className="followModal"
                    >
                    
                    <Modal.Header>
                        <Modal.Title>Follow Fellow Foodies</Modal.Title>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" onClick={this.close}>&times;</span>
                        </button>
                    </Modal.Header>

                    <Modal.Body className="followModal">
                        <FriendCard 
                        key={uuidv4()}
                        name={this.props.name}
                        currentPatrons={this.props.currentPatrons}
                        onClick={this.props.onClick}
                        patron={this.props.patronName}
                        />
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                        <Button bsStyle="primary" onClick={this.handleSaveEvent}>Find More Foodies...</Button>
                    </Modal.Footer>         
                    </Modal> 
                </div>
                </a>
            </li>
        </div>
      );
    }
  }

export default FollowModal
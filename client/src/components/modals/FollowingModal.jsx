import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import FollowingCard from '../FollowingCard'
import 'react-datepicker/dist/react-datepicker.css';
import '../../css/DashboardStyles/Following.css';
import '../../css/DashboardStyles/FollowModals.css';

class FollowingModal extends React.Component {

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
                    <i className="fa fa-bars"></i>

                    Following
                </span>
                <div>
                    <Modal 
                    key={uuidv4}
                    show={this.state.showModal} 
                    onHide={this.close}
                    animation={true} 
                    bsSize="small"
                    className="followingModal"
                    >

                    <Modal.Header>
                        <Modal.Title>My Foodies</Modal.Title>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" onClick={this.close}>&times;</span>
                        </button>
                    </Modal.Header>

                    <Modal.Body className="followingModal">
                        <FollowingCard 
                        key={uuidv4()}
                        name={this.props.name}
                        dataFollowings={this.props.dataFollowings}
                        patron={this.props.patronName}
                        onClick={this.props.onClick}
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

export default FollowingModal
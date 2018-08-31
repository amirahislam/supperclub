import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import SideToolBar from '../../components/SideToolBar';
import PatronPP from '../../components/PatronPP';
import './FriendsList.css'
import './Patron.css';
import API from "../../utils/API";

class Patron extends Component {

    state = {
        // patron
        username: 'jtrimble6',
        profpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA8BLAglQRn7puP_PCHyGx5LzPed7oZTYab1JObhFprzdVwQMdsA',
        firstName: 'Joshua',
        lastName: 'Trimble',
        badges: '',
        buzzVal: '',
        placeholder: '',
        img1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA8BLAglQRn7puP_PCHyGx5LzPed7oZTYab1JObhFprzdVwQMdsA',
        img2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTINIEB01_NAsc6vlMZB2jMOXQzWeOAX-ykhRTfezZFqXVPtOtuVg',
        img3: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6tulBsRVy8aTCCsdwQFGkumZva_jZ_hvsZHJVlBUoZEwXeAseVw'
    }

    componentDidMount() {
        console.log('mounted');
    }

    handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    handleFormSubmit = event => {
        // When the form is submitted, prevent its default behavior, get recipes update the recipes state
        event.preventDefault();
        // API.getPatron()
        //   .then(res => this.setState({ patron: res.data }))
        //   .catch(err => console.log(err));
        const buzzVal = this.state.buzzVal
        console.log('buzz submitted');
        console.log(buzzVal)
    
    };


    render() {
        return (
            <div>
                <Navbar />
                <div className='wrapper profilePage'>
                    <PatronPP 
                    key={this.state.username}
                    user={this.state.username}
                    name='buzzVal'
                    value={this.state.buzzVal}
                    placeholder='Create some buzz...'
                    onChange={this.handleInputChange}
                    onClick={this.handleFormSubmit}
                    img1={this.state.img1}
                    img2={this.state.img2}
                    img3={this.state.img3}
                    />
                </div>
                <SideToolBar 
                userPP={this.state.profpic}
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                badges={this.state.badges}
                userFullName={this.state.firstName + '' + this.state.lastName}
                />
            </div>
        )
    }
}

export default Patron;
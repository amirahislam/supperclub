import React, { Component } from 'react';
import NavbarPages from '../../components/navigation/NavbarPages';
import PatronPP from '../../components/containers/PatronPageContainer';
import PatronSideBar from '../../components/navigation/PatronSideBar';
import './FriendsList.css';
import './Patron.css';
import API from "../../utils/API";

class Patron extends Component {

    state = {
        username: '',
        profpic: '',
        firstName: '',
        lastName: '',
        badges: '',
        buzzVal: '',
        currentBuzz: [],
        newBuzz: '',
        placeholder: '',
        img1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA8BLAglQRn7puP_PCHyGx5LzPed7oZTYab1JObhFprzdVwQMdsA',
        img2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTINIEB01_NAsc6vlMZB2jMOXQzWeOAX-ykhRTfezZFqXVPtOtuVg',
        img3: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6tulBsRVy8aTCCsdwQFGkumZva_jZ_hvsZHJVlBUoZEwXeAseVw'
    }

    componentDidMount() {
        console.log('mounted');
        this.getBuzz()
        this.getUser()
        
    }

    getUser = () => {
        let localsessionUser = localStorage.getItem("user")
        console.log("hi " + localsessionUser)
        API.getPatron(localsessionUser)
        .then(response => {
            console.log('the data i neeeeeeed')
            console.log(response)
            this.setState({
                firstName: response.data[0].firstName,
                lastName: response.data[0].lastName,
                username: response.data[0].username
            })
        })
        .catch(err => console.log(err))
        console.log(this.state.loggedIn);
        console.log(this.state.username);
        
    }

    getBuzz = () => {
        API.getBuzz()
          .then(res => {
            this.setState({ currentBuzz: res.data });
            console.log('we got the buzz')
            console.log(this.state.currentBuzz)
            }
        )
          .catch(err => console.log(err))
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
        let buzzData = {
            username: this.state.username,
            buzz: this.state.buzzVal
        }

        console.log(buzzData)

        API.createBuzz(buzzData)
          .then(res => this.setState({ newBuzz: res.data }))
          .catch(err => console.log(err));
        console.log(this.state.buzzVal)
        this.getBuzz()
        this.setState({
            buzzVal: ''
        })
        
    };


    render() {
        return (
            <div>
                <NavbarPages />
                <PatronSideBar 
                    userPP={this.state.profpic}
                    username={this.state.username}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    badges={this.state.badges}
                    userFullName={this.state.firstName + ' ' + this.state.lastName}
                />
                <PatronPP 
                    key={this.state.username}
                    user={this.state.username}
                    img1={this.state.img1}
                    img2={this.state.img2}
                    img3={this.state.img3}
                    onClick={this.handleFormSubmit}
                    name='buzzVal'
                    value={this.state.buzzVal}
                    placeholder='Create some buzz...'
                    onChange={this.handleInputChange}
                    currentBuzz={this.state.currentBuzz}
                />
                
                
            </div>
        )
    }
}

export default Patron;
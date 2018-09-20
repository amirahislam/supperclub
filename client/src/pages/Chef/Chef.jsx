import React, { Component } from 'react';
import NavbarPages from '../../components/navigation/NavbarPages';
import ChefPP from '../../components/containers/ChefPageContainer'
import SideBar from '../../components/navigation/SideBar';
// import Revenue from '../../components/Revenue';
import API from "../../utils/API";
import './Chef.css'
import Calendar from '../../components/Calendar';
import FooterPages from '../../components/navigation/FooterPages';



class Chef extends Component {

    state = {
        username: '',
        profpic: '',
        firstName: '',
        lastName: '',
        userType: '',
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
        this.getUserData();
        this.getBuzz();
        this.getPatrons();

    }

    getUserData = () => {
        let localsessionUser = localStorage.getItem("user")
        API.getPatron(localsessionUser)
        .then(response => {
            console.log(response);
            this.setState({
                firstName: response.data[0].firstName,
                lastName: response.data[0].lastName,
                username: response.data[0].username,
                profpic: response.data[0].img,
                userType: response.data[0].userType
            })
        })
        .catch(err => console.log(err))
        console.log(this.state.loggedIn);
        console.log(this.state.username);   
      }

    getPatrons = () => {
        API.getPatrons()
          .then(res => {
              this.setState({ currentPatrons: res.data })
              console.log('we got the patrons')
              console.log(this.state.currentPatrons)
          })
          .catch(err => console.log(err))
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

    handleFollow = event => {
        console.log("I want to follow you")
        console.log(event.target.getAttribute('patronName'))
        let patronName = event.target.getAttribute('patronName')
        this.setState({
            patronName: patronName
        })
        let id = this.state.id
        console.log('Patron name: ', patronName)
        console.log("ID: ", id)

        API.saveFollow(id, this.state.patronName)
          .then(res => this.setState({ newFollow: res }))
          .catch(err => console.log(err));
        console.log("New Follow: ")
        console.log(this.state.newFollow)
        // this.getPatrons()
        this.setState({
            newFollow: ''
        })

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
        

        this.setState({
            buzzVal: ''
        })
        this.getBuzz()
        
      };


    render() {
        
        return (
            <div>
                <NavbarPages />
                <SideBar
                    userPP={this.state.profpic}
                    username={this.state.username}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    userType={this.state.userType}
                    badges={this.state.badges}
                    userFullName={this.state.firstName + ' ' + this.state.lastName}
                    currentPatrons={this.state.currentPatrons}
                    onClick={this.handleFollow}  
                />
                <ChefPP 
                    key={this.state.username}
                    user={this.state.username}
                    img1={this.state.img1}
                    img2={this.state.img2}
                    img3={this.state.img3}
                    onClick={this.handleFormSubmit}
                    name='buzzVal'
                    value={this.state.buzzVal}
                    currentPatrons={this.state.buzzVal}
                    placeholder='Create some buzz...'
                    onChange={this.handleInputChange}
                    currentBuzz={this.state.currentBuzz}
                    currentEvents={this.state.currentEvents}
                />
                
                    
                
                {/* <DashboardComponents /> */}
                {/* <Calendar /> */}
                <FooterPages />
            </div>
        )
    }
}

export default Chef;
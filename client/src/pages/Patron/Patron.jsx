import React, { Component } from 'react'
import NavbarPages from '../../components/navigation/NavbarPages'
import PatronPP from '../../components/containers/PatronPageContainer'
import PatronSideBar from '../../components/navigation/PatronSideBar'
import './FriendsList.css'
import './Patron.css'
import API from "../../utils/API"
let uuidv4 = require('uuid/v4')

class Patron extends Component {
    state = {
        redirect: false,
        id: '',
        username: '',
        profpic: '',
        firstName: '',
        lastName: '',
        badges: '',
        buzzVal: '',
        patronName: '',
        availablePatrons: [],
        currentBuzz: [],
        currentPatrons: [],
        currentFollowings: [],
        dataFollowings: [],
        thisPatron: {},
        newBuzz: '',
        newFollow: '',
        placeholder: '',
        img1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA8BLAglQRn7puP_PCHyGx5LzPed7oZTYab1JObhFprzdVwQMdsA',
        img2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTINIEB01_NAsc6vlMZB2jMOXQzWeOAX-ykhRTfezZFqXVPtOtuVg',
        img3: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6tulBsRVy8aTCCsdwQFGkumZva_jZ_hvsZHJVlBUoZEwXeAseVw'
    }
    
    componentWillMount() {
        this.getPatrons();
        this.getUserData();
        this.getBuzz();
        
    }
    componentDidMount() {
        this.getFollowing();
        this.getAvailPatrons();
    }

    getBuzz = () => {
        API.getBuzz()
          .then(res => {
            this.setState({ currentBuzz: res.data });
            console.log('Here is all the buzz')
            console.log(this.state.currentBuzz)
            }
        )
          .catch(err => console.log(err))
    }

    getUserData = () => {
        let localsessionUser = localStorage.getItem("user")
        API.getPatron(localsessionUser)
        .then(response => {
            this.setState({
                id: response.data[0]._id,
                firstName: response.data[0].firstName,
                lastName: response.data[0].lastName,
                username: response.data[0].username,
                profpic: response.data[0].img,
                currentFollowings: response.data[0].following
            })
            
            console.log("This is the current user:")
            console.log(response.data)
            console.log("This is who I follow:")
            console.log(this.state.currentFollowings)
            let currentFollowings = this.state.currentFollowings
            // this.getFollowing(currentFollowings);
        })
        .catch(err => console.log(err))
        
    }

    getPatrons = () => {
        API.getPatrons()
          .then(res => {
              this.setState({ currentPatrons: res.data })
              console.log('Here are all users:')
              console.log(this.state.currentPatrons)
          })
          .catch(err => console.log(err))
    }

    
    getFollowing = () => {
        let following = this.state.currentFollowings

        for (let i=0; i<following.length; i++) {
            let thisUser = following[i].patronName
            API.getPatron(thisUser)
            .then(response => {
                if (response.data[0] !== undefined || null)  {
                    this.state.dataFollowings.push(response.data[0])
                    
                }
                
            })
            .catch(err => console.log(err))
        }
        let currentPatrons = this.state.currentPatrons
        let dataFollowings = this.state.dataFollowings
        console.log("Current Patrons:")
        console.log(currentPatrons)
        console.log("Current Followings:")
        console.log(dataFollowings)
        // console.log(this.getAvailPatrons(currentPatrons, dataFollowings))
    }
    
    handleFollow = event => {
        event.preventDefault()
        console.log("I want to follow you")
        console.log(event.target.getAttribute('patronName'))
        let thisFollow = {
            patronName: event.target.getAttribute('patronName')
          }
        
        let id = this.state.id
        this.savingFollow(id, thisFollow)
    }

    savingFollow = (id, thisFollow) => {
        API.saveFollow(id, thisFollow)
          .then(res => this.setState({ newFollow: res.data }))
          .catch(err => console.log(err));
        console.log("New Follow: ")
        console.log(thisFollow)
        // this.getAvailPatrons()
        this.setState({
            newFollow: ''
        })
    }

    getAvailPatrons = () => {
        console.log("GETTING AVAIL PATRONS")

        for(let z=0; z<this.state.currentPatrons.length; z++) {
            let data = this.state.currentPatrons[z].username
            // console.log("Data:")
            // console.log(data)

            for (let y=0; y<this.state.dataFollowings.length; y++) {
                let following = this.state.dataFollowings[y].username
                // console.log("Following:")
                // console.log(following)
                if (data !== following) {
                    console.log("These two match")
                    console.log(data)
                    console.log("and")
                    console.log(following)
                    API.getPatron(data)
                    .then(res => {
                        this.setState({ availablePatrons: res.data })
                        console.log('Here are all available patrons:')
                        console.log(this.state.availablePatrons)
                    })
                    .catch(err => console.log(err))
                } else {
                    console.log("no match")
                }
            }
        }
        
    }


    // handleViewProfile = event => {

    // }

    handleInputChange = event => {
        // Destructure the name and currentPatrons properties off of event.target
        // Update the appropriate state
        const { name, currentPatrons } = event.target;
        this.setState({
          [name]: currentPatrons
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

        this.getBuzz()
        
    };


    render() {
        return (
            <div>
                <NavbarPages />
                <PatronSideBar 
                    key={uuidv4()}
                    userPP={this.state.profpic}
                    username={this.state.username}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    badges={this.state.badges}
                    userFullName={this.state.firstName + ' ' + this.state.lastName}
                    currentPatrons={this.state.availablePatrons}
                    dataFollowings={this.state.dataFollowings}
                    onClick={this.handleFollow}
                    onFollowingClick={this.getFollowing}
                    
                />
                <PatronPP 
                    key={this.state.username}
                    user={this.state.username}
                    img1={this.state.img1}
                    img2={this.state.img2}
                    img3={this.state.img3}
                    onClick={this.handleFormSubmit}
                    name='buzzVal'
                    currentPatrons={this.state.buzzVal}
                    placeholder='Create some buzz...'
                    onChange={this.handleInputChange}
                    currentBuzz={this.state.currentBuzz}
                />
                
                
            </div>
        )
    }
}

export default Patron;
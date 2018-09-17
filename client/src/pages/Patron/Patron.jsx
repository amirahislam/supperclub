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
        userType: '',
        badges: '',
        buzzVal: '',
        patron: '',
        availablePatrons: [],
        myUnfollowedPatrons: [],
        currentBuzz: [],
        currentPatrons: [],
        currentFollowings: [],
        dataFollowings: [],
        theseDataFollowings: [],
        thisPatron: {},
        newBuzz: '',
        newFollow: '',
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

    getBuzz = () => {
        API.getBuzz()
          .then(res => {
            this.setState({ currentBuzz: res.data });
            }
        )
          .catch(err => console.log(err))
    }

    getUserData = () => {
        this.getPatrons()
        let localsessionUser = localStorage.getItem("user")
        API.getPatron(localsessionUser)
        .then(response => {
            this.setState({
                id: response.data[0]._id,
                firstName: response.data[0].firstName,
                lastName: response.data[0].lastName,
                username: response.data[0].username,
                profpic: response.data[0].img,
                currentFollowings: response.data[0].following,
                userType: response.data[0].userType
            })
            
            console.log("This is the current user:")
            console.log(response.data)
            console.log("This is who I follow:")
            console.log(this.state.currentFollowings)
            // let currentFollowings = this.state.currentFollowings
            this.getFollowing();
            
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
        console.log("CURRENT PATRONS", this.state.currentPatrons)
        let unfollowed = this.state.currentPatrons
        let following = this.state.currentFollowings
        let theseDataFollowings = []
        for (let m=0; m<unfollowed.length; m++) {
            let thisPatron = unfollowed[m]
            let thisPatronUsername = unfollowed[m].username
            for (let v=0; v<following.length; v++) {
                let thisUser = following[v]
                let thisUserUsername = following[v].patronName
                console.log("THIS USERNAME", thisUser)
                if (thisPatronUsername === thisUserUsername) {
                    unfollowed.splice(m, 1)
                }
                if (thisUser !== thisPatron && thisUserUsername !== undefined && thisUserUsername !== null) {
                    // theseDataFollowings.splice(m, 1)
                    API.getPatron(thisUserUsername)
                    .then(response => {
                        if (response.data[0] !== undefined && response.data[0] !== null && thisUser !== thisPatron)   {
                            theseDataFollowings.push(response.data[0])
                        }
                    })
                    .catch(err => console.log(err))
                    } 
                
            }
        }
        
        console.log("NEW UNFOLLOWED: ", unfollowed)
        console.log("NEW FOLLOWED: ", theseDataFollowings)
        // console.log("FOLLOWING", following)
        let currentPatrons = unfollowed
        let dataFollowings = following
        
        const uniqueNames = Array.from(new Set(currentPatrons));
        console.log("UNIQUE Patrons:")
        console.log(following)
        // console.log("Current Followings:")
        // console.log(dataFollowings)
        this.setState({myUnfollowedPatrons: unfollowed})
        this.setState({dataFollowings: dataFollowings})
        this.getAvailPatrons(currentPatrons, dataFollowings);
    }

    
    getAvailPatrons = (currentPatrons, dataFollowings) => {
        console.log("GETTING AVAIL PATRONS")
        let unfollowedPatrons = currentPatrons
        console.log("UNFOLLOWED PATRONS:", currentPatrons)
        console.log("FOLLOWED PATRONS:", dataFollowings)
        let newDataFollowings = this.removeDups(dataFollowings)
        console.log("NEW FOLLOWED PATDRONS:", newDataFollowings)
        for(let z=0; z<currentPatrons.length; z++) {
            let data = currentPatrons[z]
            for (let y = dataFollowings.length - 1; y >= 0; y--) {
                let following = dataFollowings[y]
                if (data.username !== following.username) {
                    // console.log("Not a match", data)
                } else if (data.username === following.username) {
                    // console.log("I already follow you", data)
                    unfollowedPatrons.splice(z, 1)
                } else {
                    console.log("must not be anything")
                }
            }
        }
        console.log("My unfollowed patrons:", unfollowedPatrons)
        console.log("-----------------------------------------")
        
        this.setState({ myUnfollowedPatrons: unfollowedPatrons })
        console.log("Passing Array", this.state.myUnfollowedPatrons)
        console.log("Passing Other Array", this.state.dataFollowings)
        // let currentFollowings = this.state.currentFollowings
        
    }

    // handleViewProfile = event => {

    // }

    removeDups = (array) => {
        let unique = {};
        array.forEach(function(w) {
          if(!unique[w]) {
            console.log([w])
            unique[w] = true;
          }
        });
        return Object.keys(unique);
      }
    
    handleFollow = event => {
        event.preventDefault()
        let thisFollow =  {
            patronId: event.target.getAttribute('patronid'),
            patronName: event.target.getAttribute('patron'),
            patronImg: event.target.getAttribute('patronimg'),
            patronEmail: event.target.getAttribute('patronemail')
        }
        let id = this.state.id
        this.savingFollow(id, thisFollow)
    }

    savingFollow = (id, thisFollow) => {
        console.log("NEW UNFOLLOWED STATE:", this.state.myUnfollowedPatrons)
        API.saveFollow(id, thisFollow)
          .then(res => this.setState({ newFollow: res.data }))
          .catch(err => console.log(err));
          console.log("New Follow: ")
          console.log(thisFollow)
          this.getUserData()
          this.setState({
            // myUnfollowedPatrons: this.state.myUnfollowedPatrons.splice(thisFollow, 1),
            newFollow: ''
          })
        // console.log("NEW UNFOLLOWED STATE:", this.state.myUnfollowedPatrons)
    }

    handleUnfollow = event => {
        event.preventDefault()
        let thisUnfollow =  {
            patronId: event.target.getAttribute('patronId'),
            patronName: event.target.getAttribute('patron'),
            patronImg: event.target.getAttribute('patronImg'),
            patronEmail: event.target.getAttribute('patronEmail')
        }
        let id = this.state.id
        this.savingUnfollow(id, thisUnfollow)
    }

    savingUnfollow = (id, thisUnfollow) => {
        console.log("NEW FOLLOWED STATE:", this.state.dataFollowings)
        console.log("MY ID:", id)
        console.log("NEW UNFOLLOW:", thisUnfollow)
        let unfollowId = thisUnfollow.patronId
        console.log("NEW UNFOLLOW ID:", unfollowId)
        API.saveUnfollow(id, unfollowId)
          .then(res => console.log("HUGE RESULT:", res))
          .catch(err => console.log(err));
          this.getUserData()
          this.setState({
            // myUnfollowedPatrons: this.state.myUnfollowedPatrons.splice(thisFollow, 1),
            newUnfollow: ''
          })
        // console.log("NEW UNFOLLOWED STATE:", this.state.myUnfollowedPatrons)
    }


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
        // console.log(this.state.buzzVal)
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
                    userType={this.state.userType}
                    badges={this.state.badges}
                    userFullName={this.state.firstName + ' ' + this.state.lastName}
                    currentPatrons={this.state.myUnfollowedPatrons}
                    dataFollowings={this.state.currentFollowings}
                    onClick={this.handleFollow}
                    onUnfollowClick={this.handleUnfollow}
                    onFollowClick={this.getUserData}
                    onFollowingClick={this.getUserData}
                    
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
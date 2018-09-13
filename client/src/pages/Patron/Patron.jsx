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

    componentDidMount() {
        this.getPatrons();
        this.getUserData();
        this.getBuzz();
        
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
            this.getFollowing(currentFollowings);
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

    
    getFollowing = (currentFollowings) => {
        let following = currentFollowings

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
        // this.getAvailPatrons(currentPatrons, dataFollowings);
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

    getAvailPatrons = (currentPatrons, dataFollowings) => {
        console.log("GETTING AVAIL PATRONS")
        // Get the currentPatrons type
        const type = Object.prototype.toString.call(currentPatrons);

        // If the two objects are not the same type, return false
        if (type !== Object.prototype.toString.call(dataFollowings)) console.log("false 1");

        // If items are not an object or array, return false
        if (['[object Array]', '[object Object]'].indexOf(type) < 0) console.log("false 2");

        // Compare the length of the length of the two items
        let currentPatronsLen = type === '[object Array]' ? currentPatrons.length : Object.keys(currentPatrons).length;
        let dataFollowingsLen = type === '[object Array]' ? dataFollowings.length : Object.keys(dataFollowings).length;
        console.log("Current Patrons length:")
        console.log(currentPatronsLen)
        console.log("Current Followings length:")
        console.log(dataFollowingsLen)
        if (currentPatronsLen !== dataFollowingsLen) console.log("false 3");
        else {return true;}
        // const compare = function (currentPatrons, dataFollowings) {
        //     // Get the object type
        //     var itemType = Object.prototype.toString.call(currentPatrons);

        //     // If an object or array, compare recursively
        //     if (['[object Array]', '[object Object]'].indexOf(itemType) >= 0) {
        //         if (!this.getAvailPatrons(currentPatrons, dataFollowings)) return false;
        //     }
        //     // Otherwise, do a simple comparison
        //     else {  
        //         // If the two items are not the same type, return false
        //         if (itemType !== Object.prototype.toString.call(dataFollowings)) return false;
        //         if (itemType === '[object Function]') {
        //             if (currentPatrons.toString() !== dataFollowings.toString()) return false;
        //         } else {
        //             if (currentPatrons !== dataFollowings) return false;
        //         }
	    //     }
        // }
        // let match;
        // if (type === '[object Array]') {
        //     for (let p = 0; p < currentPatronsLen; p++) {
        //         compare(currentPatrons[p], dataFollowings[p]);
        //     }
        // } else {
        //     for (let username in currentPatrons) {
        //         if (currentPatrons.hasOwnProperty(username)) {
        //             compare(currentPatrons[username], dataFollowings[username]);
        //         }
        //     }
        // // Compare properties
        // if (type === '[object Array]') {
        //     for (var i = 0; i < currentPatronsLen; i++) {
        //         if (compare(currentPatrons[i], dataFollowings[i]) === false) return false;
        //     }
        // } else {
        //     for (var username in currentPatrons) {
        //         if (currentPatrons.hasOwnProperty(username)) {
        //             if (compare(currentPatrons[username], dataFollowings[username]) === false) return false;
        //         }
        //     }
        // }

	    // // If nothing failed, return true
	    //     return true;
        // };

        // const matches = []
        // console.log("current patrons")
        // console.log(currentPatrons)
        // console.log("current followings")
        // console.log(dataFollowings)
        // currentPatrons.forEach((e1)=>dataFollowings.forEach((e2)=> {if(e1 !== e2){
        //     console.log(e1)
        //     // matches.push(e1)
        //     }
        // }))
        // console.log("Matches:", matches)
        
        

        // for(let z=0; z<dataFollowings.length; z++) {
        //     let data = dataFollowings[z].username
        //     console.log("data")
        //     console.log(data)
        //     console.log("username")
        //     console.log(this.state.currentPatrons[z].username)
        //     // if (data === this.state.currentPatrons[z].username) {
        //     //     console.log("True", data)
        //     // } else {
        //     //     console.log("False", data)
        //     // }
        //     // API.getPatron(data)
        //     //   .then(res => {
        //     //         console.log('I can follow you:')
        //     //         console.log(res.data)
                
        //     //   })
        //     //   .catch(err => console.log(err))
        // }
        
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
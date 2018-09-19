import React from 'react'
import '../../pages/Patron/Patron.css'
import '../../pages/Patron/FriendsList.css'
import SocialMedia from '../SocialMedia'
import Badges from '../BadgesComponent'
import UpcomingEvents from '../UpcomingEvents'


const PatronPageMiddle = props => (
  
        <div className='row'>
          <div className='row'>
            <div className="col-md-4">
            <Badges />
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4">
            <SocialMedia />
            </div>
          </div>
            <div className='row'>
            <UpcomingEvents 
              currentEvents={props.currentEvents}
              img1={props.img1}
              img2={props.img2}
              img3={props.img3}
            />
            </div>
        </div>
        
    )



export default PatronPageMiddle;


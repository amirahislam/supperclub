import React from 'react'
import '../../pages/Patron/Patron.css'
import '../../pages/Patron/FriendsList.css'
import SocialMedia from '../SocialMedia'
import Badges from '../BadgesComponent'
import Timeline from './TimelineContainer'
import UpcomingEvents from '../UpcomingEvents'
import BuzzInput from '../BuzzInput'
import SubmitButton from '../SubmitButton'

const PatronPP = props => (

      <div className='wrapper'>

            <Badges />
            <SocialMedia />
            <UpcomingEvents 
              img1={props.img1}
              img2={props.img2}
              img3={props.img3}
            />
            
            <Timeline 
              currentBuzz={props.currentBuzz}
            />
            


            <BuzzInput
              name={props.name}
              onChange={props.onChange}
              placeholder={props.placeholder}
              value={props.value}
            />
            <SubmitButton 
              onClick={props.onClick}
            />
              
          
          {/* <div className='col-md-4 communityDiv'>
            <h2 className='communityTitle'>Community</h2>
              <div className='row'>
                {friends.map(friend => (
                    <FriendsList 
                    id={friend.id}
                    key={friend.id}
                    img={friend.img}
                    />
                ))}
              </div>
          </div> */}
        

        
          
        




      </div>
        
    )



export default PatronPP;


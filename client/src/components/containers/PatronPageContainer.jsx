import React from 'react'
import '../../pages/Patron/Patron.css'
import '../../pages/Patron/FriendsList.css'
import SocialMedia from '../SocialMedia';
import Badges from '../BadgesComponent';
import Timeline from './TimelineContainer'
import UpcomingEvents from '../UpcomingEvents'

const PatronPP = props => (

      <div className='wrapper'>

            <Badges />
            <SocialMedia />
            
            <Timeline 
              currentBuzz={props.currentBuzz}
            />
            <UpcomingEvents 
              img1={props.img1}
              img2={props.img2}
              img3={props.img3}
            />


            {/* <BuzzInput
              name={props.name}
              onChange={props.onChange}
              placeholder={props.placeholder}
              value={props.value}
            /> */}
            {/* <SubmitButton 
              onClick={props.onClick}
            /> */}
              
          
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


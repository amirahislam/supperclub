import React from 'react'
import '../pages/Patron/Patron.css'
import '../pages/Patron/FriendsList.css'
import Timeline from './Timeline'
import BuzzInput from './BuzzInput'
import SubmitButton from './SubmitButton'
import FriendsList from './FriendsList'
import UpcomingEvents from './UpcomingEvents'
import friends from '../friends.json'

const PatronPP = props => (

      <div className='container'>

        <div className='row'>
          <div className='col-md-6'>
            <Timeline 
            currentBuzz={props.currentBuzz}
            />
              <div className='row'>
                <BuzzInput
                  name={props.name}
                  onChange={props.onChange}
                  placeholder={props.placeholder}
                  value={props.value}
                />
                <SubmitButton 
                  onClick={props.onClick}
                />
              </div>
          </div>
          <div className='col-md-4 communityDiv'>
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
          </div>
        </div> 

        <div className='row'>
          <div className='col-md-2'></div>
          <UpcomingEvents 
          img1={props.img1}
          img2={props.img2}
          img3={props.img3}
          />
        </div>




      </div>
        
    )



export default PatronPP;


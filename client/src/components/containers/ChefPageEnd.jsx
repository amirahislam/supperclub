import React from 'react'
import '../../pages/Patron/Patron.css'
import '../../pages/Patron/FriendsList.css'
import Timeline from './TimelineContainer'
import BuzzInput from '../BuzzInput'
import SubmitButton from '../SubmitButton'
import BuzzInputContainer from './BuzzInputContainer';

const ChefPageEnd = props => (

        

      <div className='timelineDiv'>

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
            
            <div className="timelineContent">
              <Timeline 
                currentBuzz={props.currentBuzz}
              />
            </div>

            <BuzzInputContainer
              name={props.name}
              onChange={props.onChange}
              placeholder={props.placeholder}
              value={props.value}
              onClick={props.onClick}
            />
          
      </div>
        
    )



export default ChefPageEnd;


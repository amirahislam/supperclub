import React from 'react'
import FriendComponent from './FriendComponent'
import '../pages/Patron/Timeline.css'

const Friends = props => (
    <section align="right">
        <div  className="ds timelineDiv">
            <h3>Friends</h3>
            {
                props.currentFriends.map(friend => {
                return(
                <FriendComponent
                    username={friend.username}
                    img={friend.img}
    
                />
                )})
            }

        </div>
    </section>

        
    )

export default Friends;


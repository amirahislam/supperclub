import React from 'react'
import ChefEventComponent from '../ChefEventComponent'
import '../../pages/Events/Events'
import '../../pages/Events/Events.css'

const ChefEventsContainer = props => (

  <div className='wrapper'>
    {
        props.currentEvents.map(event => {
            // if (event.username === props.username) {
                return(
                    <ChefEventComponent
                        patronId={event.username}
                        key={event._id}
                        id={event._id}
                        username={event.username}
                        eventName={event.eventName}
                        eventImg={event.eventImg}
                        guests={event.guests}
                        price={event.price}
                        eventDate={event.date}
                        description={event.description}
                        rules={event.rules}
                        spotsLeft={event.spotsLeft}
                        guestArray={event.guestArray}
                        joinEvent={props.joinEvent}
                    />
                )
            // }
        })
    }

  </div>
  


        
    )



export default ChefEventsContainer;


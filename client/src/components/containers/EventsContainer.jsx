import React from 'react'
import EventComponent from '../EventComponent'
import '../../pages/Events/Events.css'

const EventsContainer = props => (

  <div className='wrapper'>
    {
        props.currentEvents.map(event => {
        return(
        <EventComponent
            id={event._id}
            username={event.username}
            eventName={event.eventName}
            eventImg={event.eventImg}
            guests={event.guests}
            price={event.price}
            date={event.date}
            description={event.description}
            rules={event.rules}
        />
        )})
    }

  </div>
  


        
    )



export default EventsContainer;


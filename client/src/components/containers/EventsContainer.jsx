import React from 'react'
import EventComponent from '../EventComponent'
import '../../pages/Events/Events'
import '../../pages/Events/Events.css'

const EventsContainer = props => (

  <div className='wrapper'>
    {
        props.currentEvents.map(event => {
        return(
        <EventComponent
            key={event._id}
            patronId={event.username}
            key={event._id}
            id={event._id}
            username={event.username}
            eventName={event.eventName}
            eventLocation={event.eventLocation}
            eventImg={event.eventImg}
            guests={event.guests}
            price={event.price}
            eventDate={event.date}
            description={event.description}
            rules={event.rules}
            spotsLeft={event.spotsLeft}
            guestArray={event.guestArray}
            joinEvent={props.joinEvent}
            cancelReservation={props.cancelReservation}
        />
        )})
    }

  </div>
  


        
    )



export default EventsContainer;


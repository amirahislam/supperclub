import React from 'react'
import PublicEventComponent from '../PublicEventComponent'
import '../../pages/Events/Events'
import '../../pages/Events/Events.css'

const PublicEventsContainer = props => (

  <div className='wrapper'>
    {
        props.currentEvents.map(event => {
        return(
        <PublicEventComponent
            key={event._id}
            id={event._id}
            eventName={event.eventName}
            eventImg={event.eventImg}
            eventDate={event.date}
        />
        )})
    }

  </div>
  


        
    )



export default PublicEventsContainer;


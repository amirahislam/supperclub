import React from 'react'
import EventComponent from './EventComponent'

const EventsContainer = props => (

      <div className='container'>

        <div className='row'>
          <div className='col-md'>
              <div className='row'>
                {
                    props.currentEvents.map(event => {
                    return(
                    <EventComponent
                        id={event._id}
                        username={event.username}
                        eventName={event.eventName}
                        eventImg={event.eventImg}
                        date={event.date}
                        description={event.description}
                        rules={event.rules}
                    />
                    )})
                }
              </div>
          </div>
        </div> 

      </div>
        
    )



export default EventsContainer;


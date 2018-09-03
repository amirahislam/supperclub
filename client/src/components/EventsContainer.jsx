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
                        username={event.username}
                        date={event.date}
                        description={event.description}
                    />
                    )})
                }
              </div>
          </div>
        </div> 

      </div>
        
    )



export default EventsContainer;


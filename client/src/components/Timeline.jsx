import React from 'react'
import BuzzComponent from './BuzzComponent'
import '../pages/Patron/Timeline.css'

const Timeline = props => (
    <div className="container timelineContainer">
        <div className="row timelineDiv">
            <div>
                <h3 className='buzzTitle'>Recent Buzz</h3>
                <ul className="timeline">
                  {
                      props.currentBuzz.map(buzz => {
                        return(
                        <BuzzComponent
                            username={buzz.username}
                            date={buzz.date}
                            buzz={buzz.buzz}
                        />
                      )})
                  }
    
                </ul>
            </div>
        </div> <br/>
        
    </div>

        
    )

export default Timeline;


import React from 'react'
import BuzzComponent from './BuzzComponent'
import '../pages/Patron/Timeline.css'

const Timeline = props => (
    <section align="right">
        <div  className="ds timelineDiv">
            <h3>TIMELINE</h3>
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

        </div>
    </section>

        
    )

export default Timeline;


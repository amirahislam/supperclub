import React from 'react'
import '../../pages/Patron/Patron.css'
import '../../pages/Patron/FriendsList.css'
import PatronPageMiddle from './PatronPageMiddle'
import PatronPageEnd from './PatronPageEnd'

const PatronPP = props => (

      <div className='wrapper'>

        <div className='row'>
          <div className='col-md-6 patronMiddle'>
              <PatronPageMiddle 
              />
            </div>
            <div className="col-md-2"></div>
            <div className='col-md-4'>
              <PatronPageEnd
                name={props.name}
                onClick={props.onClick}
                currentBuzz={props.currentBuzz}
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.onChange}
              />
          </div>
        </div>

      </div>
        
    )



export default PatronPP;


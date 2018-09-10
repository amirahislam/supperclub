import React from 'react'
import '../../pages/Patron/Patron.css'
import '../../pages/Patron/FriendsList.css'
import ChefPageMiddle from './ChefPageMiddle'
import ChefPageEnd from './ChefPageEnd'

const ChefPP = props => (

      <div className='wrapper'>

        <div className='row'>
          <div className='col-md-6 chefMiddle'>
              <ChefPageMiddle />
            </div>
            <div className="col-md-2"></div>
            <div className='col-md-4'>
              <ChefPageEnd
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



export default ChefPP;


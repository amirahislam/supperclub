import React from 'react'
import '../../pages/Patron/Patron.css'
import '../../pages/Patron/FriendsList.css'
import BuzzInput from '../BuzzInput'
import SubmitButton from '../SubmitButton'

const BuzzInputContainer = props => (

      <div className='BuzzInputDiv'>
          
              <BuzzInput
                name={props.name}
                onChange={props.onChange}
                placeholder={props.placeholder}
                value={props.value}
              />
        
              <SubmitButton 
                onClick={props.onClick}
              />
    
      </div>
        
    )



export default BuzzInputContainer;



import React from 'react'
import '../../pages/Patron/Patron.css'
import '../../pages/Patron/FriendsList.css'
import SocialMedia from '../SocialMedia'
import Badges from '../BadgesComponent'
import ToDoPanel from '../ToDoPanel'



const ChefPageMiddle = props => (
  
        <div className='row'>
          <div className='row'>
            <div className="col-md-4">
            <Badges />
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4">
            <SocialMedia />
            </div>
          </div>
            <div className="col-md-2"></div>
            <div className='col-md-6 toDoPanel'>
                <ToDoPanel />
            </div>
            <div className="col-md-2"></div>
        </div>
        
    )



export default ChefPageMiddle;


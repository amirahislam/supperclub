import React from 'react'
import '../pages/Patron/FriendsList.css'

const FriendsList = props => (
  
    <div className="col-md-4 card friendCard">
      <img className="card-img-top" src={props.img} alt={props.id} />
        <div hidden className="card-body">
          <h5 className="card-title">{props.id}</h5>
          <a href="#" className="btn btn-primary">Connect</a>
          <a href="#" className="btn btn-primary">Send a Message</a>
        </div>
    </div>

)



export default FriendsList;


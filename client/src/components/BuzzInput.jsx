import React from "react";
import '../pages/Patron/Timeline.css';

// Destructuring the type, className, children and onClick props, applying them to the button element
const BuzzInput = props => (
<div className='input-group input-group-lg'>
    <input 
        className="form-control buzz" 
        type="text"
        {...props}
    />
</div>
);

export default BuzzInput;
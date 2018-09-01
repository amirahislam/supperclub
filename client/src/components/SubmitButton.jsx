import React from "react";
import '../pages/Patron/Timeline.css';


// Destructuring the type, className, children and onClick props, applying them to the button element
const SubmitButton = props => (
  <button 
    className="btn btn-outline-success subButton"
    {...props}
  > Submit
  </button>
);

export default SubmitButton;
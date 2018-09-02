import React from "react";
import '../pages/Patron/Timeline.css';

// Destructuring the type, className, children and onClick props, applying them to the button element
const DropDown = props => (
<div className="form-group">
    <select className="form-control" id="exampleFormControlSelect1" onChange={props.onChange}>
        <option>Select a user type</option>
        <option value="Patron">Patron</option>
        <option value="Chef">Chef</option>
    </select>
  </div>
);

export default DropDown;
import React from 'react'
import '../pages/Patron/Timeline.css'

const Timeline = props => (
  <div className="col-md-6">
    <div className="container timelineContainer">
        <div className="row timelineDiv">
            <div>
                <h3 className='buzzTitle'>Recent Buzz</h3>
                <ul className="timeline">
                    <li>
                        <a target="_blank" href="https://www.totoprayogo.com/#">New Web Design</a>
                        <a href="#" className="float-right">21 March, 2014</a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....</p>
                    </li>
                    <li>
                        <a href="#">21 000 Job Seekers</a>
                        <a href="#" className="float-right">4 March, 2014</a>
                        <p>Curabitur purus sem, malesuada eu luctus eget, suscipit sed turpis. Nam pellentesque felis vitae justo accumsan, sed semper nisi sollicitudin...</p>
                    </li>
                    <li>
                        <a href="#">Awesome Employers</a>
                        <a href="#" className="float-right">1 April, 2014</a>
                        <p>Fusce ullamcorper ligula sit amet quam accumsan aliquet. Sed nulla odio, tincidunt vitae nunc vitae, mollis pharetra velit. Sed nec tempor nibh...</p>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.totoprayogo.com/#">New Web Design</a>
                        <a href="#" className="float-right">21 March, 2014</a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....</p>
                    </li>
                    <li>
                        <a href="#">21 000 Job Seekers</a>
                        <a href="#" className="float-right">4 March, 2014</a>
                        <p>Curabitur purus sem, malesuada eu luctus eget, suscipit sed turpis. Nam pellentesque felis vitae justo accumsan, sed semper nisi sollicitudin...</p>
                    </li>
                    <li>
                        <a href="#">Awesome Employers</a>
                        <a href="#" className="float-right">1 April, 2014</a>
                        <p>Fusce ullamcorper ligula sit amet quam accumsan aliquet. Sed nulla odio, tincidunt vitae nunc vitae, mollis pharetra velit. Sed nec tempor nibh...</p>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.totoprayogo.com/#">New Web Design</a>
                        <a href="#" className="float-right">21 March, 2014</a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....</p>
                    </li>
                    <li>
                        <a href="#">21 000 Job Seekers</a>
                        <a href="#" className="float-right">4 March, 2014</a>
                        <p>Curabitur purus sem, malesuada eu luctus eget, suscipit sed turpis. Nam pellentesque felis vitae justo accumsan, sed semper nisi sollicitudin...</p>
                    </li>
                    <li>
                        <a href="#">Awesome Employers</a>
                        <a href="#" className="float-right">1 April, 2014</a>
                        <p>Fusce ullamcorper ligula sit amet quam accumsan aliquet. Sed nulla odio, tincidunt vitae nunc vitae, mollis pharetra velit. Sed nec tempor nibh...</p>
                    </li>
                </ul>
            </div>
        </div> <br/>
        <div className='form-group'>
            <textarea className="buzz" rows="3" placeholder={props.placeholder} value={props.onChange} />
        </div>
        <button type="button" class="btn btn-outline-success subButton" onClick={props.onClick}>Submit</button>
    </div>
  </div>
        
    )



export default Timeline;


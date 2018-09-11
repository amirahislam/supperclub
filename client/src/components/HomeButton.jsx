import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import '../css/DashboardStyles/Follow.css';



class HomeButton extends React.Component {

    componentDidMount() {
        console.log('mounted');
     
    }

        constructor(props, context) {
        super(props, context);  
      
        this.state = {
        

        };

      }

    render() {
      
      return (
        <div>
            <li className="sub-menu" onClick={this.props.onClick}>
                <a href="/patron">
                <span className="addEvent" onClick={this.open}>
                    <i className="fa fa-book"></i>
                    Home
                </span>
                
                </a>
            </li>
        </div>
      );
    }
  }

export default HomeButton
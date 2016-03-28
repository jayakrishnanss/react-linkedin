import React from 'react'
import ReactDOM from 'react-dom'
import Message from './message.jsx'
import HeaderActions from '../actions/HeaderMenuActions'
import { Link } from 'react-router'

class Header extends React.Component {
	constructor(props, context) {
	    super(props, context);
	    this.onChange = this.onChange.bind(this);
	}
	onChange() {
		this.onChange.bind(this);
	}
   	render() {
      return (
      	<div>
        	<div >
        		<div id="header">
	            	<a id="linkedin_logo" href="/">
	                	<img src="/assets/images/Linkedin-icon.png" 
	                	alt="LinkedIn logo" width="36" height="36" />
	            	</a>
	            	<div id="noti_Container">
				    	<img width="36" height="36" src="/assets/images/contacts_icon.png" alt="message" />
				    	<div className="noti_bubble">3</div>
					</div>
	            	<div id="noti_Container">
	            		<div className="noti_bubble">0</div>
				    	<Message />
					</div>	
            	</div>
            	<div id="header-sub">
            		<ul>
				  	<li><a href="#">Home</a></li>
				  	<li><a href="#">Dashboard</a></li>
				  	<li><Link to="/profile">Profile</Link></li>
					</ul>
            	</div>
        	</div>
        	{this.props.children}
        </div>
      );
   	}
}

export default Header;


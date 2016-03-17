import React from 'react';

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
				    <img width="36" height="36" src="/assets/images/message_icon.png" alt="message" />
				    <div className="noti_bubble">2</div>
				</div>	
            </div>
            <div id="header-sub">
            	<ul>
				  <li><a className="active" href="#">Home</a></li>
				  <li><a href="#">Dashboard</a></li>
				  <li><a href="#">Profile</a></li>
				</ul>
            </div>
        </div>
      );
   	}
}

export default Header;
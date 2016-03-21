import React from 'react';
import Message from './message.jsx'
import HeaderActions from '../actions/HeaderMenuActions';

class Header extends React.Component {
	constructor(props, context) {
	    super(props, context);
	    this.onChange = this.onChange.bind(this);
	}
	onChange() {
		this.onChange.bind(this);
	}
	onClickMenu(e) {
		HeaderActions.clickHeaderMenu(e.target.innerHTML);
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
	            	<div className="noti_bubble">0</div>
				    <Message />
				</div>	
            </div>
            <div id="header-sub">
            	<ul>
				  <li onClick={this.onClickMenu}><a className="active" href="#">Home</a></li>
				  <li onClick={this.onClickMenu}><a href="#">Dashboard</a></li>
				  <li onClick={this.onClickMenu}><a href="#">Profile</a></li>
				</ul>
            </div>
        </div>
      );
   	}
}

export default Header;
import React from 'react';
import AppActions from '../actions/AppActions';
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
	populateContacts() {
		AppActions.getUsers('get_users');
	}
	render() {
      return (
        <div >
        	<div id="header">
	            <a id="linkedin_logo" href="/">
	                <i className="fa fa-linkedin-square fa-2x"></i>
	            </a>
	            <div id="noti_Container" className="contact_icon">
				    <i className="fa fa-user-plus fa-2x" onClick={this.populateContacts}></i>
				    <div className="noti_bubble">3</div>
				</div>
	            <div id="noti_Container">
				    <i className="fa fa-whatsapp fa-2x"></i>
				    <div className="noti_bubble">2</div>
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

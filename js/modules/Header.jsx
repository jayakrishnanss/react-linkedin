import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import ContactListEasyAccess from './HeaderContactsList.jsx';
import Message from './message.jsx';
import ProfileWrapper from './profileComponents/profile.jsx';

import AppActions from '../actions/AppActions';
import HeaderActions from '../actions/HeaderMenuActions';

import ContactStore from '../stores/contactStore';

import $ from "jquery";

var newUserCount = 0;

class Header extends React.Component {
	constructor(props, context) {
	    super(props, context);
		this.onGetUser = this.onGetUser.bind(this);
		this.showNewlyAddedContacts.bind(this)
		this.state = {contacts: []};
	}
	onGetUser() {
		newUserCount = 0;
		var newUsers = ContactStore.getNewUser();
		newUsers = newUsers.reverse();
		this.setState({contacts: newUsers});
		newUsers.forEach(function(user) {
			if (user.new_user == true) {
				newUserCount++;
			}
		});
	}
	componentDidMount() {
	  	ContactStore.addChangeListener(this.onGetUser.bind(this));
	}
	componentWillUnmount() {
	  	ContactStore.removeChangeListener(this.onGetUser.bind(this));
	}
	onClickMenu(e) {
		HeaderActions.clickHeaderMenu(e.target.innerHTML);
	}
	showNewlyAddedContacts() {
		$('.contact_ul_wrapper').show();
		AppActions.getNewUsers('get_new_users');
		newUserCount = 0;
	}
	hideNewlyAddedContacts() {
		$('.contact_ul_wrapper').hide();
	}
	render() {
      return (
        <div >
        	<div id="header">
	            <a id="linkedin_logo" href="/">
	                <i className="fa fa-linkedin-square fa-2x"></i>
	            </a>
	            <div id="noti_Container" className="contact_icon" onMouseEnter={this.showNewlyAddedContacts}>
				    <i className="fa fa-user-plus fa-2x"></i>
					<NotificationBubble count={newUserCount}/>
					<ContactListEasyAccess users={this.state.contacts} />
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

class NotificationBubble extends React.Component {
	render () {
		return (
			<div className="noti_bubble">{this.props.count}</div>
		)
	}
}

export default Header;

import React from 'react';
import AppActions from '../actions/AppActions';
import ContactStore from '../stores/contactStore';
import Message from './message.jsx'
import HeaderActions from '../actions/HeaderMenuActions';
import $ from "jquery";

var newUserCount = 0;

class Header extends React.Component {
	constructor(props, context) {
	    super(props, context);
		this.onGetUser = this.onGetUser.bind(this);
		this.showNewlyAddedContacts = this.showNewlyAddedContacts.bind(this);
		this.state = {contacts: []};
	}
	onGetUser() {
		var newUsers = ContactStore.getNewUser();
		newUsers = newUsers.reverse();
		this.setState({contacts: newUsers});
		// newUsers.forEach(function(user) {
		// 	if (user.new_user == true) {
		// 		newUserCount++;
		// 		var obj = $.extend(true,{},user);
		// 		obj.new_user = false;
		//         AppActions.updateContact(obj);
		// 	}
		// });
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
	            <div id="noti_Container" className="contact_icon" onMouseEnter={this.showNewlyAddedContacts.bind(this)} onMouseLeave={this.hideNewlyAddedContacts.bind(this)}>
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

class ContactListEasyAccess extends React.Component {
	showNewlyAddedContacts() {
		$('.contact_ul_wrapper').show();
	}
	hideNewlyAddedContacts() {
		$('.contact_ul_wrapper').hide();
	}
	render() {
		if (this.props.users.length > 0) {
			var userList = this.props.users.map(function(user, i) {
	            return (
	                <li key={user.id}>
	                    <div className="new_user_details">
							<img src="../../assets/images/user.jpg" />
							<div className="user_name">{user.name}</div>
	                    </div>
	                </li>
	            );
	        }.bind(this));
		}
		else {
			var userList =
			<div className="spinner">
				<img src="../../assets/images/rolling.gif"/>
			</div>
		}
        return (
            <div className="contact_ul_wrapper" onMouseEnter={this.showNewlyAddedContacts} onMouseLeave={this.hideNewlyAddedContacts}>
				<div>
					Contacts (0)
				</div>
				<ul className="new_user_wrapper">
					{userList}
				</ul>
				<div className="more_button" onClick={this.gotoContactPage}>More</div>
            </div>
        )
    }
}

export default Header;

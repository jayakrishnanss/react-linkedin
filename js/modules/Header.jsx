import React from 'react';
import AppActions from '../actions/AppActions';
import ContactStore from '../stores/contactStore';
import HeaderActions from '../actions/HeaderMenuActions';
import $ from "jquery";

var newUserCount = 0;

class Header extends React.Component {
	constructor(props, context) {
	    super(props, context);
		this.onGetUser = this.onGetUser.bind(this);
		this.showNewlyAddedContacts = this.showNewlyAddedContacts.bind(this);
		this.state = {contacts: [{'id': '01', 'name': 'No name', 'email': 'no email'}, {'id': '02', 'name': 'No name', 'email': 'no email'}]};
	}
	onGetUser() {
		this.onGetUser.bind(this);
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
	  	ContactStore.addChangeListener(this.onGetUser)
	}
	componentWillUnmount() {
	  	ContactStore.removeChangeListener(this.onGetUser)
	}
	onClickMenu(e) {
		HeaderActions.clickHeaderMenu(e.target.innerHTML);
	}
	populateContacts() {
		AppActions.getUsers('get_users');
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
	            <div id="noti_Container" className="contact_icon" onMouseEnter={this.showNewlyAddedContacts} onMouseLeave={this.hideNewlyAddedContacts}>
				    <i className="fa fa-user-plus fa-2x"></i>
					<NotificationBubble count={newUserCount}/>
					<ContactListEasyAccess users={this.state.contacts} />
				</div>
	            <div id="noti_Container">
				    <i className="fa fa-whatsapp fa-2x"></i>
				    <NotificationBubble count={2}/>
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
	gotoContactPage() {
		HeaderActions.clickHeaderMenu('more_contacts');
	}
    render() {
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
        return (
            <div className="contact_ul_wrapper" onMouseEnter={this.showNewlyAddedContacts} onMouseLeave={this.hideNewlyAddedContacts}>
				<ul className="new_user_wrapper">
					{userList}
					<div className="more_button" onClick={this.gotoContactPage}>More</div>
				</ul>
            </div>
        )
    }
}

export default Header;

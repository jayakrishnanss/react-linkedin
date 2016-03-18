import React from 'react';
import AppActions from '../actions/AppActions';
import ContactStore from '../stores/contactStore';
import HeaderActions from '../actions/HeaderMenuActions';
import $ from "jquery";

class Header extends React.Component {
	constructor(props, context) {
	    super(props, context);
	    this.onChange = this.onChange.bind(this);
		this.showNewlyAddedContacts = this.showNewlyAddedContacts.bind(this);
		this.state = {contacts: [{'id': '01', 'name': 'No name', 'email': 'no email'}, {'id': '02', 'name': 'No name', 'email': 'no email'}]};
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
	showNewlyAddedContacts() {
		$('.contact_ul_wrapper').show();
		AppActions.getNewUsers('get_users');
		var users = ContactStore.getNewUser();
		this.setState({contacts: users});
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
				    <i className="fa fa-user-plus fa-2x" onClick={this.populateContacts}></i>
				    <div className="noti_bubble">3</div>
					<ContactListEasyAccess users={this.state.contacts} />
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

class ContactListEasyAccess extends React.Component {

	showNewlyAddedContacts() {
		$('.contact_ul_wrapper').show();
	}
	hideNewlyAddedContacts() {
		$('.contact_ul_wrapper').hide();
	}
	gotoContactPage() {
		AppActions.getUsers('get_users');
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

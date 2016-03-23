import React from 'react';
import AppActions from '../actions/AppActions'
import HeaderActions from '../actions/HeaderMenuActions';
import $ from "jquery";

class ContactListEasyAccess extends React.Component {
	constructor(props, context) {
	    super(props, context);
		this.showNewlyAddedContacts.bind(this);
		this.hideNewlyAddedContacts.bind(this);
	}
	showNewlyAddedContacts() {
		$('.contact_ul_wrapper').show();
	}
	hideNewlyAddedContacts() {
		$('.contact_ul_wrapper').hide();
	}
	gotoContactPage() {
		HeaderActions.clickHeaderMenu('MoreContacts');
	}
    updateUserStatus(i) {
        var obj = $.extend(true,{},this.props.users[i]);
        obj.new_user = false;
        AppActions.updateContact(obj);
        AppActions.getNewUsers('get_new_users');
    }
	render() {
		if (this.props.users.length > 0) {
			var userList = this.props.users.map(function(user, i) {
	            return (
	                <li key={user.id} onClick={this.updateUserStatus.bind(this, i)}>
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
				<div className="contact_header">
					Contacts(0)
					<span className="caret_msg">
						<i className="fa fa-caret-right"></i>
					</span>
				</div>
				<ul className="new_user_wrapper">
					{userList}
				</ul>
				<div className="more_button" onClick={this.gotoContactPage}>More</div>
            </div>
        )
    }
}

export default ContactListEasyAccess;

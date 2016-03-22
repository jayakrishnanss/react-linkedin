import React from 'react';
import ReactDOM from 'react-dom';
import AppActions from '../actions/AppActions';
import ContactStore from '../stores/contactStore';
import ContactForm from './AddContactForm.jsx';
import $ from "jquery";

var NoContacts = 0;

export default class ContactWrapper extends React.Component {
    render(){
        return(
            <div>
                <ContactForm/>
                <AddContactButton />
                <ContactListWrapper/>
            </div>
        )
    }
}
class ContactListWrapper extends React.Component {
    render() {
        return (
            <div>
                <ContactTable />
            </div>
        )
    }
}
class ContactTable extends React.Component {
    constructor(props, context) {
	    super(props, context);
	    this.onGetAllUser = this.onGetAllUser.bind(this);
        this.state = {contacts: []};
	}
    onGetAllUser() {
        var users = [];
		this.onGetAllUser.bind(this);
        users = ContactStore.getUser();
        this.setState({contacts: users});
        if (users.length != 0) {
            NoContacts = (users[users.length-1].id) + 1;
        }
        console.log(NoContacts);
	}
    componentDidMount() {
        ContactStore.addGetAllUserListener(this.onGetAllUser);
        AppActions.getUsers('get_users');
	}
	componentWillUnmount() {
        ContactStore.removeGetAllUserListenerr(this.onGetAllUser);
	}
    render() {
        return(
            <div className="user_list_wrapper">
                <div className='user_list_header'>
                    <i className="fa fa-users fa-2x"></i>
                    People You May Know
                </div>
                <ContactElement users={this.state.contacts} />
            </div>
        )
    }
}
class ContactElement extends React.Component {
    editContact(i) {
        $('.add_form_wrapper').show();
        $('.update_button').show();
        $('.submit_button').hide();
        $('#name').val(this.props.users[i].name);
        $('#email').val(this.props.users[i].email);
        NoContacts = this.props.users[i].id;
    }
    deleteContact(i) {
        AppActions.deleteContactClick(this.props.users[i].name);
    }
    render() {
        var userList = this.props.users.map(function(user, i) {
            return (
                <li key={user.id}>
                    <div className="user_profPic">

                    </div>
                    <div className="user_wrapper">
                        <div className="user_details">
                            <div className="user_name">{user.name}</div>
                            <div>{user.email}</div>
                        </div>
                        <div className="user_icons">
                            <span className="icon_edit icon_user" onClick={this.editContact.bind(this, i)} title="Edit this contact">
                                <i className="fa fa-pencil-square-o fa-2x"></i>
                            </span>
                            <span className="icon_delete icon_user" onClick={this.deleteContact.bind(this, i)} title="Delete this contact">
                                <i className="fa fa-times fa-2x"></i>
                            </span>
                        </div>
                    </div>
                </li>
            );
        }.bind(this));
        return(

            <ul className="user_list">
                {userList}
            </ul>
        )
    }
}
class AddContactButton extends React.Component {
    showPopup (eve){
        $('.add_form_wrapper').show();
        $('.update_button').hide();
        $('.submit_button').show();
    }
    render(){
        return(
            <div className="add-contact">
                <button onClick={this.showPopup}>Add New</button>
            </div>
        )
    }
}

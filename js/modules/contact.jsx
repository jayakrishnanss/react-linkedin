import React from 'react';
import ReactDOM from 'react-dom';
import AppActions from '../actions/AppActions';
import ContactStore from '../stores/contactStore'
import $ from "jquery";

class Contact extends React.Component{

    hidePopup() {
        $('.add_form_wrapper').hide();
    }
    addContact() {
        var name = $('#name').val(),
            email = $('#email').val();
        var obj = {'name': name, 'email': email}
        AppActions.addContactClick(obj);
    }
    render() {
        return(
            <div className="add_form_wrapper">
                <form className="add_form" onSubmit={this.addContact}>
                    <div className="content_wrapper">
                        <label>Name : </label>
                        <input type="text" id="name" placeholder="Name"/>
                    </div>
                    <div className="content_wrapper">
                        <label>Email : </label>
                        <input type="text" id="email" placeholder="Email"/>
                    </div>
                    <input className="button submit_button" type="submit" name="submit_button" value="Submit"/>
                    <input className="button cancel_button" type="button" name="cancel_button" onClick={this.hidePopup} value="Cancel"/>
                </form>
            </div>
        )
    }
}
export default class ContactWrapper extends React.Component {
    render(){
        return(
            <div>
                <Contact/>
                <ListContacts />
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
                <ContactTable onInit={this.getContacts} />
            </div>
        )
    }
}
class ContactTable extends React.Component {

    constructor(props, context) {
	    super(props, context);
	    this.onChange = this.onChange.bind(this);
        this.state = {contacts: [{'name': 'No name', 'email': 'no email'}, {'name': 'No name', 'email': 'no email'}]};
	}
    onChange() {
        var users = [];
		this.onChange.bind(this);
        users = ContactStore.getUser();
        this.setState({contacts: users});
	}
    componentDidMount() {
	  ContactStore.addChangeListener(this.onChange);
	}

	componentWillUnmount() {
	  ContactStore.removeChangeListener(this.onChange);
	}
    render() {
        return(
            <table className="user_table">
                <TableHeader />
                <ContactRow users={this.state.contacts} />
            </table>
        )
    }
}
class TableHeader extends React.Component {
    render() {
        return (
            <thead>
                <th>Name</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
            </thead>
        )
    }
}
class ContactRow extends React.Component {
    editContact() {
        console.log('Edit');
    }
    deleteContact() {
        console.log('deleted');
    }
    render() {
        var userList = this.props.users.map(function(user) {
            return (
                <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        Edit
                    </td>
                    <td>Delete</td>
                </tr>
            );
        });
        return(
            <tbody>
                {userList}
            </tbody>
        )
    }
}
class AddContactButton extends React.Component {
    showPopup (eve){
        $('.add_form_wrapper').show();

    }
    render(){
        return(
            <div>
                <button className="add-contact" onClick={this.showPopup}>Add New</button>
            </div>
        )
    }
}
class ListContacts extends React.Component {
    getContacts() {
        AppActions.getUsers('get_users');
    }
    render() {
        return (
            <button onClick={this.getContacts}>List Contacts</button>
        )
    }
}

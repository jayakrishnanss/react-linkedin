import React from 'react';
import ReactDOM from 'react-dom';
import AppActions from '../actions/AppActions';
import $ from "jquery";

class ContactForm extends React.Component{

    hidePopup() {
        $('.add_form_wrapper').hide();
    }
    addContact() {
        var name = $('#name').val(),
            email = $('#email').val();
        var obj = {'id': NoContacts, 'name': name, 'email': email, 'new_user': true}
        AppActions.addContactClick(obj);
        $('.add_form_wrapper').hide();
    }
    updateUser() {
        var name = $('#name').val(),
            email = $('#email').val();
        var obj = {'id': NoContacts, 'name': name, 'email': email, 'new_user': true}
        AppActions.updateContact(obj);
        $('.add_form_wrapper').hide();
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
                    <input className="button update_button" type="button" value="Update" onClick={this.updateUser.bind(this)}/>
                    <input className="button cancel_button" type="button" name="cancel_button" onClick={this.hidePopup.bind(this)} value="Cancel"/>

                </form>
            </div>
        )
    }
}

export default ContactForm;

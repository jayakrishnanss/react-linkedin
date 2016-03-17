import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";

class Contact extends React.Component{
    hidePopup() {
        $('.add_form_wrapper').hide();
    }
    render() {
        return(
            <div className="add_form_wrapper">
                <form className="add_form">
                    <div className="content_wrapper">
                        <label>Name : </label>
                        <input type="text" name="name" placeholder="Name"/>
                    </div>
                    <div className="content_wrapper">
                        <label>Email : </label>
                        <input type="text" name="Email" placeholder="Email"/>
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
                <AddContactButton />
                <ContactListWrapper data={this.props.data}/>
            </div>
        )
    }
}
class ContactListWrapper extends React.Component {
    render() {
        return (
            <div>
                <ContactTable data={this.props.data}/>
            </div>
        )
    }
}
class ContactTable extends React.Component {
    render() {
        return(
            <table>
                <TableHeader />
                <tbody>
                    <ContactRow data={this.props.data} />
                </tbody>
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
    render() {
        var createColumn = function(tableData) {
            return (
                <td key="tableData.id">{tableData.author}</td>
            )
        }
        return <tr className="" id="commentBox">{this.props.data.map(createColumn)}</tr>;
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

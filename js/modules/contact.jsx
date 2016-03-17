import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import Firebase from 'firebase'

class Contact extends React.Component{
    hidePopup() {
        $('.add_form_wrapper').hide();
    }
    handleSubmit(){
        debugger;
    }
    render() {
        return(
            <div className="add_form_wrapper">
                <form className="add_form" onSubmit={this.handleSubmit}>
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
                <ContactListWrapper />
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
    render() {
        var array = [],
            data = {};
        var ref = new Firebase('https://sample-app2.firebaseio.com/Contact');
        array.push(<span>Haaaai</span>);
        ref.on("value", function(snapshot) {
            //array.push(<span>HEllo</span>);
            //<Test />
            //     data = childSnapshot.val();
            // snapshot.forEach(function(childSnapshot) {
            //     array.push(
            //         <li>
            //             <span>{data.name}</span>
            //             <span>{data.email}</span>
            //         </li>
            //     );
            //     debugger;
            // });
        });
        return(
            <ul>{array}</ul>
            // <table>
            //     <TableHeader />
            //     <tbody>
            //         <ContactRow />
            //     </tbody>
            // </table>
        )
    }
}
class TableHeader extends React.Component {
    render() {
        return (
            <tr className="table-header">
                <th>Name</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        )
    }
}
class Test extends React.Component {
    render() {
        return (
            <div>Test</div>
        )
    }
}
class ContactRow extends React.Component {
// getInitialState(){
//     return {
//       user : []
//    };
// }
    // render() {
    //     var users = [];
    //     var data = [],
    //         ref = new Firebase('https://sample-app2.firebaseio.com/Contact');
    //     ref.on("value", function(snapshot) {
    //         data = snapshot.val();
    //     });
    //         /*snapshot.forEach(function(childSnapshot) {
    //             data = childSnapshot.val();
    //             users.push(data);
    //             debugger;
    //        });*/
    //    });
    //     return (
    //         return <div>{data}</div>;
    //     );
    // }
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
